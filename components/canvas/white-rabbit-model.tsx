"use client"

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function WhiteRabbitModel() {
  const { scene, animations } = useGLTF('/models/rabbit.glb')
  const groupRef = useRef<THREE.Group>(null)

  // Refs para el sistema de animación manual (sin usar useAnimations de drei)
  const mixerRef = useRef<THREE.AnimationMixer | null>(null)
  const actionsRef = useRef<Record<string, THREE.AnimationAction>>({})

  // Refs para tracking de velocidad de scroll
  const lastScrollY = useRef(0)
  const scrollYRef = useRef(0)
  const smoothedVelocity = useRef(0)
  const currentActionName = useRef<string>('')

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!scene) return

    // 1. Eliminar nodos basura del juego
    const toRemove: THREE.Object3D[] = []
    scene.traverse((child) => {
      const name = child.name.toLowerCase()
      if (name.includes('mapicon') || name.includes('eatabletrigger') || name.includes('healthbar') || name.includes('pivot')) {
        toRemove.push(child)
      }
    })
    toRemove.forEach((child) => {
      if (child.parent) child.parent.remove(child)
    })

    // 2. Corregir traslación masiva
    const rabbitNode = scene.getObjectByName('Rabbit')
    if (rabbitNode) rabbitNode.position.set(0, 0, 0)

    // 3. Forzar visibilidad y materiales
    scene.traverse((child) => {
      child.visible = true
      if (child instanceof THREE.Mesh || child instanceof THREE.SkinnedMesh) {
        child.frustumCulled = false
        if (child.material) {
          const materials = Array.isArray(child.material) ? child.material : [child.material]
          materials.forEach((mat) => {
            mat.visible = true
            mat.transparent = false
            mat.opacity = 1.0
            mat.color = new THREE.Color('#ffffff')
            mat.emissive = new THREE.Color('#4ade80')
            mat.emissiveIntensity = 1.2
            mat.roughness = 0.2
            mat.metalness = 0.0
            mat.needsUpdate = true
          })
        }
        child.castShadow = true
        child.receiveShadow = true
      }
    })

    // 4. Calcular la caja delimitadora limpia y centrar/escalar directamente en scene
    const box = new THREE.Box3().setFromObject(scene)
    const size = new THREE.Vector3()
    box.getSize(size)
    const center = new THREE.Vector3()
    box.getCenter(center)

    scene.position.x = -center.x
    scene.position.y = -center.y
    scene.position.z = -center.z

    const maxDim = Math.max(size.x, size.y, size.z)
    if (maxDim > 0) {
      const scaleFactor = 1.0 / maxDim
      scene.scale.set(scaleFactor, scaleFactor, scaleFactor)
    }

    // 5. Crear mixer y animaciones
    if (animations && animations.length > 0) {
      try {
        const mixer = new THREE.AnimationMixer(scene)
        mixerRef.current = mixer

        const acts: Record<string, THREE.AnimationAction> = {}
        animations.forEach((clip) => {
          acts[clip.name] = mixer.clipAction(clip)
        })
        actionsRef.current = acts

        const idleAction = acts['Arm_rabbit|idle_1']
        if (idleAction) {
          idleAction.reset().fadeIn(0.3).play()
          currentActionName.current = 'Arm_rabbit|idle_1'
        }
      } catch {
        // Animation mixer creation failed - model will display without animation
      }
    }

    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction()
        mixerRef.current = null
      }
      actionsRef.current = {}
    }
  }, [scene, animations])

  useFrame((state, delta) => {
    if (!groupRef.current) return

    // Mixer update con delta seguro
    if (mixerRef.current && delta > 0) {
      // Limitar delta para evitar saltos enormes al inicio
      const safeDelta = Math.min(delta, 0.1)
      mixerRef.current.update(safeDelta)
    }

    // Motor de reactividad al scroll
    const currentY = scrollYRef.current
    const rawDelta = currentY - lastScrollY.current
    lastScrollY.current = currentY

    smoothedVelocity.current += (Math.abs(rawDelta) - smoothedVelocity.current) * 0.1
    smoothedVelocity.current *= 0.95

    let targetActionName = 'Arm_rabbit|idle_1'
    if (smoothedVelocity.current > 12) {
      targetActionName = 'Arm_rabbit|run'
    } else if (smoothedVelocity.current > 2) {
      targetActionName = 'Arm_rabbit|walk'
    }

    if (targetActionName !== currentActionName.current) {
      const currentAction = actionsRef.current[currentActionName.current]
      const targetAction = actionsRef.current[targetActionName]
      if (currentAction) currentAction.fadeOut(0.3)
      if (targetAction) {
        targetAction.reset().fadeIn(0.3).play()
      }
      currentActionName.current = targetActionName
    }

    const activeAction = actionsRef.current[currentActionName.current]
    if (activeAction) {
      const speedMultiplier = Math.min(smoothedVelocity.current * 0.1, 1.5)
      activeAction.timeScale = 1.0 + speedMultiplier
    }

    // Vaivén sutil
    groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05
  })

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload('/models/rabbit.glb')
