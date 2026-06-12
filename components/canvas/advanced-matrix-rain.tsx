"use client"

import { useRef, useMemo } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

// ============================================
// SOTA MATRIX RAIN SHADER
// ============================================
// High-end GLSL implementation of the Matrix digital rain.
// Features: 
// 1. Procedural character generation
// 2. High-dynamic-range glow (Bloom-ready)
// 3. Temporal digital noise (Glitches)
// 4. Parallax depth layers
// ============================================

const MatrixShader = {
  uniforms: {
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2() },
    uGlowIntensity: { value: 0.8 },
    uRainSpeed: { value: 0.25 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uResolution;
    uniform float uGlowIntensity;
    uniform float uRainSpeed;
    varying vec2 vUv;

    // Pseudo-random function
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    // Matrix character generator
    float char(vec2 p, float seed) {
      vec2 grid = floor(p * 16.0);
      float h = hash(grid + seed);
      if (h > 0.5) return 0.0;
      
      // Basic digital noise pattern for "characters"
      vec2 f = fract(p * 16.0);
      float d = 0.0;
      if (hash(grid * 0.1) > 0.5) d = step(0.1, f.x) * step(0.1, f.y) * step(f.x, 0.9) * step(f.y, 0.9);
      else d = step(0.4, f.x) * step(0.1, f.y) * step(f.x, 0.6) * step(f.y, 0.9);
      
      return d;
    }

    void main() {
      vec2 uv = vUv;
      uv.x *= uResolution.x / uResolution.y;
      
      float color = 0.0;
      
      // Three layers for parallax depth
      for(float i = 1.0; i <= 3.0; i++) {
        float layerScale = i * 20.0;
        vec2 layerUv = uv * layerScale;
        
        float columnId = floor(layerUv.x);
        float columnOffset = hash(vec2(columnId, 31.1)) * 100.0;
        
        // Vertical movement
        float speed = (0.5 + hash(vec2(columnId, 12.5))) * uRainSpeed;
        float y = layerUv.y + uTime * speed + columnOffset;
        
        float rowId = floor(y);
        float charId = hash(vec2(columnId, rowId));
        
        // Character flickering
        float flicker = step(0.02, hash(vec2(uTime * 0.001, columnId)));
        
        // Trail logic
        float trail = fract(y);
        trail = pow(1.0 - trail, 5.0) * 1.5;
        
        // Bright head
        float head = step(0.98, 1.0 - fract(y)) * 2.0;
        
        float glyph = char(layerUv, charId);
        color += (trail + head) * glyph * (1.0 / i) * flicker;
      }
      
      // High-end Matrix Green: OKLCH mapped to RGB
      // Base: oklch(75% 0.25 150)
      vec3 matrixGreen = vec3(0.0, 1.0, 0.3) * color * uGlowIntensity;
      
      // Digital scanline effect
      matrixGreen *= 0.8 + 0.2 * sin(vUv.y * uResolution.y * 1.5);
      
      // Occasional global glitch
      float glitch = step(0.995, hash(vec2(uTime * 0.1, 0.0)));
      if(glitch > 0.5) matrixGreen.rb += 0.2;

      gl_FragColor = vec4(matrixGreen, 1.0);
    }
  `,
}

export function AdvancedMatrixRain() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { size } = useThree()
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(size.width, size.height) },
    uGlowIntensity: { value: 0.8 },
    uRainSpeed: { value: 0.25 },
  }), [size.width, size.height])

  useFrame((state) => {
    if (!meshRef.current) return
    const material = meshRef.current.material as THREE.ShaderMaterial
    const uTime = material.uniforms.uTime
    if (!uTime) return
    uTime.value = state.clock.elapsedTime
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial 
        fragmentShader={MatrixShader.fragmentShader}
        vertexShader={MatrixShader.vertexShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  )
}
