"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Text, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei"
import * as THREE from "three"

interface ExplodedStackProps {
  progress: number // 0 to 1
  project: {
    title: string
    technologies: string[]
  }
}

export function ExplodedStack({ progress, project }: ExplodedStackProps) {
  const groupRef = useRef<THREE.Group>(null)
  
  // Layers separation based on progress
  const separation = progress * 4

  return (
    <group ref={groupRef}>
      {/* 1. FRONTEND LAYER (Top) */}
      <group position={[0, 2 + separation, 0]}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh>
            <boxGeometry args={[4, 2.5, 0.1]} />
            <meshPhysicalMaterial 
              color="#4ade80" 
              transmission={0.6} 
              thickness={0.5} 
              roughness={0.1} 
              metalness={0.2}
              transparent
              opacity={0.4}
            />
          </mesh>
          <Text
            position={[0, 0, 0.1]}
            fontSize={0.2}
            color="#ffffff"
            font="/fonts/GeistMono-Bold.woff" // Assuming font exists or fallback
            anchorX="center"
            anchorY="middle"
          >
            FRONTEND: {project.technologies.filter(t => ["React", "Vue", "Next.js", "TypeScript"].includes(t)).join(", ")}
          </Text>
        </Float>
      </group>

      {/* 2. BACKEND LAYER (Middle) */}
      <group position={[0, 0, 0]}>
        <Float speed={3} rotationIntensity={1} floatIntensity={1}>
          <mesh>
            <boxGeometry args={[3, 1.5, 2]} />
            <meshStandardMaterial 
              color="#0f172a" 
              wireframe 
              emissive="#4ade80" 
              emissiveIntensity={progress * 2}
            />
          </mesh>
          {/* Internal "Logic" Core */}
          <mesh>
            <sphereGeometry args={[0.5, 32, 32]} />
            <MeshDistortMaterial 
              color="#4ade80" 
              speed={5} 
              distort={0.4} 
              radius={1}
            />
          </mesh>
          <Text
            position={[0, -1, 0]}
            fontSize={0.2}
            color="#4ade80"
            anchorX="center"
          >
            BACKEND: {project.technologies.filter(t => ["Node.js", "Python", "Express.js", "Django"].includes(t)).join(", ")}
          </Text>
        </Float>
      </group>

      {/* 3. INFRASTRUCTURE LAYER (Bottom) */}
      <group position={[0, -2 - separation, 0]}>
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
          <mesh>
            <cylinderGeometry args={[2.5, 3, 0.5, 32]} />
            <meshStandardMaterial 
              color="#334155" 
              metalness={0.9} 
              roughness={0.1} 
            />
          </mesh>
          <Text
            position={[0, -0.6, 0]}
            fontSize={0.2}
            color="#94a3b8"
            anchorX="center"
          >
            INFRA: {project.technologies.filter(t => ["Docker", "GCP", "Linux", "PostgreSQL"].includes(t)).join(", ")}
          </Text>
        </Float>
      </group>

      {/* DATA PACKETS (Simulation) */}
      <DataPackets active={progress > 0.1} />
    </group>
  )
}

function DataPackets({ active }: { active: boolean }) {
  const count = 20
  const points = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      offset: Math.random() * Math.PI * 2,
      speed: 0.5 + Math.random() * 2,
      x: (Math.random() - 0.5) * 2,
    }))
  }, [])

  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!ref.current || !active) return
    const t = state.clock.getElapsedTime()

    ref.current.children.forEach((child, i) => {
      const p = points[i]
      if (!p) return
      const y = ((t * p.speed + p.offset) % 6) - 3 // Loop from infra to front
      child.position.set(p.x, y, 0)
      child.scale.setScalar(Math.sin(t * 10 + i) * 0.05 + 0.05)
    })
  })

  return (
    <group ref={ref} visible={active}>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial color="#4ade80" />
        </mesh>
      ))}
    </group>
  )
}
