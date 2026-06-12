"use client"

import { Effects } from "@react-three/drei"
import { extend } from "@react-three/fiber"
// @ts-ignore - Módulo ESM de three.js sin tipos declarados
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass"

extend({ UnrealBloomPass })

export function PostProcessing() {
  return (
    <Effects disableGamma>
      {/* @ts-ignore - Elemento extendido por R3F */}
      <unrealBloomPass 
        threshold={0.2} 
        strength={0.8} 
        radius={0.5} 
      />
    </Effects>
  )
}
