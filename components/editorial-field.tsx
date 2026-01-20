"use client"

import { useRef, useMemo, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

// ============================================
// CAMPO EDITORIAL - Sistema de Partículas 3D
// ============================================
// Concepto: Campo tridimensional latente
// Comportamiento: Energía contenida, no exhibicionismo
// Física: Masa, fricción, viscosidad real
// ============================================

const CANTIDAD_PARTICULAS = 100
const ANCHO_CAMPO = 16
const ALTO_CAMPO = 16
const PROFUNDIDAD_CAMPO = 16

// Colores: monocromo con acento teal ocasional
const COLOR_BASE = new THREE.Color("hsl(210, 10%, 13%)")
const COLOR_ACENTO = new THREE.Color("hsl(180, 40%, 30%)")

interface EstadoCampo {
  scrollY: number
  objetivoScrollY: number // targetScrollY
  mouseX: number
  mouseY: number
  objetivoMouseX: number // targetMouseX
  objetivoMouseY: number // targetMouseY
  tiempo: number // time
}

function CampoParticulas({ textura }: { textura: THREE.Texture }) {
  const puntosRef = useRef<THREE.Points>(null)
  const { viewport } = useThree()

  // Estado con inercia física
  const estado = useRef<EstadoCampo>({
    scrollY: 0,
    objetivoScrollY: 0,
    mouseX: 0,
    mouseY: 0,
    objetivoMouseX: 0,
    objetivoMouseY: 0,
    tiempo: 0,
  })

  // Posiciones base de partículas (estructura latente)
  const { posiciones, posicionesBase, colores, tamanios } = useMemo(() => {
    const posiciones = new Float32Array(CANTIDAD_PARTICULAS * 3)
    const posicionesBase = new Float32Array(CANTIDAD_PARTICULAS * 3)
    const colores = new Float32Array(CANTIDAD_PARTICULAS * 3)
    const tamanios = new Float32Array(CANTIDAD_PARTICULAS)

    for (let i = 0; i < CANTIDAD_PARTICULAS; i++) {
      // Distribución esférica
      const radio = 7
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = radio * Math.cbrt(Math.random()) // Distribución uniforme en volumen

      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi) - 3 // Mantener profundidad base

      posiciones[i * 3] = x
      posiciones[i * 3 + 1] = y
      posiciones[i * 3 + 2] = z

      posicionesBase[i * 3] = x
      posicionesBase[i * 3 + 1] = y
      posicionesBase[i * 3 + 2] = z

      // 5% de partículas con acento teal
      const esAcento = Math.random() < 0.05
      const color = esAcento ? COLOR_ACENTO : COLOR_BASE
      colores[i * 3] = color.r
      colores[i * 3 + 1] = color.g
      colores[i * 3 + 2] = color.b

      // Tamaños variados (muy pequeños)
      tamanios[i] = Math.random() * 1.5 + 0.5
    }

    return { posiciones, posicionesBase, colores, tamanios }
  }, [])

  // Escuchar scroll y mouse
  useEffect(() => {
    const manejarScroll = () => {
      estado.current.objetivoScrollY = window.scrollY
    }

    const manejarMovimientoMouse = (e: MouseEvent) => {
      // Normalizar a -1 a 1
      estado.current.objetivoMouseX = (e.clientX / window.innerWidth) * 2 - 1
      estado.current.objetivoMouseY = -(e.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener("scroll", manejarScroll, { passive: true })
    window.addEventListener("mousemove", manejarMovimientoMouse, { passive: true })

    return () => {
      window.removeEventListener("scroll", manejarScroll)
      window.removeEventListener("mousemove", manejarMovimientoMouse)
    }
  }, [])

  useFrame((_, delta) => {
    if (!puntosRef.current) return

    const s = estado.current
    s.tiempo += delta

    // ============================================
    // FÍSICA: Interpolación con viscosidad
    // ============================================
    // Fricción alta = movimiento lento, amortiguado
    const friccionScroll = 0.03
    const friccionMouse = 0.05

    s.scrollY += (s.objetivoScrollY - s.scrollY) * friccionScroll
    s.mouseX += (s.objetivoMouseX - s.mouseX) * friccionMouse
    s.mouseY += (s.objetivoMouseY - s.mouseY) * friccionMouse

    const atributoPosicion = puntosRef.current.geometry.attributes.position
    const posiciones = atributoPosicion.array as Float32Array

    for (let i = 0; i < CANTIDAD_PARTICULAS; i++) {
      const i3 = i * 3
      const baseX = posicionesBase[i3]
      const baseY = posicionesBase[i3 + 1]
      const baseZ = posicionesBase[i3 + 2]

      // ============================================
      // ESTADO BASE: Flotación constante suave
      // ============================================
      // Movimiento orgánico usando múltiples ondas
      const t = s.tiempo * 0.3 // Velocidad del movimiento

      // Pseudo-aleatoriedad basada en índice para desincronizar partículas
      const offset1 = i * 0.5
      const offset2 = i * 1.3
      const offset3 = i * 0.8

      // Movimiento en 3 ejes para sensación 3D real
      const flotacionX = Math.sin(t + offset1) * 0.2 + Math.cos(t * 0.5 + offset2) * 0.1
      const flotacionY = Math.cos(t * 0.8 + offset2) * 0.2 + Math.sin(t * 0.4 + offset1) * 0.1
      const flotacionZ = Math.sin(t * 0.6 + offset3) * 0.15

      // ============================================
      // SCROLL: Desplazamiento del campo
      // ============================================
      // El campo se desplaza ligeramente hacia arriba con el scroll
      const offsetScroll = s.scrollY * 0.0008
      const desplazamientoY = -offsetScroll * (1 + baseZ * 0.1) // Parallax por profundidad

      // ============================================
      // MOUSE: Perturbación local (no seguimiento)
      // ============================================
      // Calcula distancia del punto al cursor (en espacio normalizado)
      const dx = baseX / (ANCHO_CAMPO * 0.5) - s.mouseX
      const dy = baseY / (ALTO_CAMPO * 0.5) - s.mouseY
      const dist = Math.sqrt(dx * dx + dy * dy)

      // Radio de influencia y fuerza de repulsión
      const influencia = Math.max(0, 1 - dist / 1.5)
      const fuerzaRepulsion = influencia * influencia * 0.15

      // Dirección de repulsión (alejarse del cursor)
      const repulsionX = dx * fuerzaRepulsion
      const repulsionY = dy * fuerzaRepulsion

      // ============================================
      // COMPOSICIÓN FINAL
      // ============================================
      posiciones[i3] = baseX + flotacionX + repulsionX
      posiciones[i3 + 1] = baseY + flotacionY + desplazamientoY + repulsionY
      posiciones[i3 + 2] = baseZ + flotacionZ
    }

    atributoPosicion.needsUpdate = true
  })

  return (
    <points ref={puntosRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={CANTIDAD_PARTICULAS}
          array={posiciones}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={CANTIDAD_PARTICULAS}
          array={colores}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={CANTIDAD_PARTICULAS}
          array={tamanios}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={1.2}
        vertexColors
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        map={textura}
        alphaMap={textura}
      />
    </points>
  )
}

export function CampoEditorial() {
  // Generar textura circular programáticamente
  const texturaCirculo = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 32
    canvas.height = 32
    const context = canvas.getContext('2d')
    if (context) {
      context.beginPath()
      context.arc(16, 16, 14, 0, 2 * Math.PI)
      context.fillStyle = 'white'
      context.fill()
    }
    const textura = new THREE.CanvasTexture(canvas)
    return textura
  }, [])

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: 0.6 }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <CampoParticulas textura={texturaCirculo} />
      </Canvas>
    </div>
  )
}
