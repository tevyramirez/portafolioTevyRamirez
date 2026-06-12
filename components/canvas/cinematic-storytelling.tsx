"use client"

import { Canvas } from "@react-three/fiber"
import { WhiteRabbitModel } from "./white-rabbit-model"

function RabbitScene() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 10, 5]} intensity={2} />
      <group scale={3}>
        <WhiteRabbitModel />
      </group>
    </>
  )
}

export function CinematicStorytelling() {
  return (
    <div
      className="fixed inset-0 z-0"
      style={{ width: '100vw', height: '100vh', background: '#111' }}
    >
      <Canvas
        role="img"
        aria-label="Visualización 3D del conejo blanco - escena interactiva"
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: "high-performance",
        }}
      >
        <color attach="background" args={["#111111"]} />
        <RabbitScene />
      </Canvas>
    </div>
  )
}
