"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { PillMode } from "@/types/experience"

interface ConstructIntroProps {
  onSelect: (mode: PillMode) => void
}

export function ConstructIntro({ onSelect }: ConstructIntroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedPill, setSelectedPill] = useState<"red" | "blue" | null>(null)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Handle Resize
    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    // Track Mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX
      mouseRef.current.targetY = e.clientY
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Setup offscreen canvas for sampling
    const offscreen = document.createElement("canvas")
    const offscreenCtx = offscreen.getContext("2d")
    const size = 120
    offscreen.width = size
    offscreen.height = size

    const particles: { x: number; y: number; origX: number; origY: number; char: string }[] = []

    const sampleSilhouette = (ctx2d: CanvasRenderingContext2D) => {
      const imgData = ctx2d.getImageData(0, 0, size, size)
      const data = imgData.data
      const step = 2
      particles.length = 0 // clear existing

      for (let y = 0; y < size; y += step) {
        for (let x = 0; x < size; x += step) {
          const idx = (y * size + x) * 4
          const r = data[idx] ?? 0
          const a = data[idx + 3] ?? 0
          // If the pixel is dark and solid, add it as a particle
          if (r < 120 && a > 100) {
            const chars = ["0", "1", "NEO", "MATRIX", "RED", "BLUE", "[", "]", "MORPHEUS"]
            const char = chars[Math.floor(Math.random() * chars.length)] ?? "0"
            particles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              origX: x,
              origY: y,
              char: char.charAt(0),
            })
          }
        }
      }
    }

    // Default Fallback drawing: stylized digital representation of sunglasses and head
    const drawProceduralMorpheus = (ctx2d: CanvasRenderingContext2D) => {
      ctx2d.fillStyle = "white"
      ctx2d.fillRect(0, 0, size, size)

      ctx2d.fillStyle = "black"
      // Head (Oval)
      ctx2d.beginPath()
      ctx2d.ellipse(size / 2, size * 0.35, 18, 24, 0, 0, Math.PI * 2)
      ctx2d.fill()

      // Lentes / Sunglasses (white cutout, black inside)
      ctx2d.fillStyle = "white"
      ctx2d.beginPath()
      ctx2d.arc(size / 2 - 9, size * 0.35, 6, 0, Math.PI * 2)
      ctx2d.arc(size / 2 + 9, size * 0.35, 6, 0, Math.PI * 2)
      ctx2d.fill()

      ctx2d.fillStyle = "black"
      ctx2d.beginPath()
      ctx2d.arc(size / 2 - 9, size * 0.35, 5, 0, Math.PI * 2)
      ctx2d.arc(size / 2 + 9, size * 0.35, 5, 0, Math.PI * 2)
      ctx2d.fill()

      // Suit shoulders
      ctx2d.beginPath()
      ctx2d.moveTo(size / 2, size * 0.58)
      ctx2d.lineTo(size * 0.15, size * 0.98)
      ctx2d.lineTo(size * 0.85, size * 0.98)
      ctx2d.closePath()
      ctx2d.fill()
    }

    if (offscreenCtx) {
      drawProceduralMorpheus(offscreenCtx)
      sampleSilhouette(offscreenCtx)
    }

    let time = 0
    // Render loop
    const render = () => {
      time += 0.05
      ctx.fillStyle = "#fafafa"
      ctx.fillRect(0, 0, width, height)

      // Interpolate mouse coordinates smoothly
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08

      // Subtle grid
      ctx.strokeStyle = "rgba(0, 0, 0, 0.02)"
      ctx.lineWidth = 1
      const gridSize = 45
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      const centerX = width / 2
      const centerY = height / 2 - 30
      const scale = Math.min(width, height) * 0.0055

      particles.forEach((p, index) => {
        const targetX = centerX + (p.origX - size / 2) * scale
        const targetY = centerY + (p.origY - size / 2) * scale
        const wave = Math.sin(time + p.origY * 0.1 + p.origX * 0.05) * 4

        const dx = mouseRef.current.x - targetX
        const dy = mouseRef.current.y - (targetY + wave)
        const dist = Math.sqrt(dx * dx + dy * dy)
        let pushX = 0
        let pushY = 0

        if (dist < 100) {
          const force = (100 - dist) / 100
          const angle = Math.atan2(dy, dx)
          pushX = -Math.cos(angle) * force * 25
          pushY = -Math.sin(angle) * force * 25
        }

        p.x += (targetX + pushX - p.x) * 0.1
        p.y += (targetY + wave + pushY - p.y) * 0.1

        if (selectedPill === "red") {
          ctx.fillStyle = `rgba(239, 68, 68, ${0.1 + Math.abs(Math.sin(time + index)) * 0.6})`
        } else if (selectedPill === "blue") {
          ctx.fillStyle = `rgba(59, 130, 246, ${0.1 + Math.abs(Math.sin(time + index)) * 0.6})`
        } else {
          ctx.fillStyle = `rgba(23, 23, 23, ${0.1 + Math.abs(Math.sin(time + index * 0.01)) * 0.3})`
        }

        ctx.font = `${Math.max(8, scale * 1.5)}px monospace`
        ctx.fillText(p.char, p.x, p.y)
      })

      // Scanline overlay
      ctx.fillStyle = "rgba(0, 0, 0, 0.007)"
      for (let y = 0; y < height; y += 4) {
        ctx.fillRect(0, y, width, 1)
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [selectedPill])

  const handleSelection = (mode: "red-pill" | "blue-pill") => {
    setSelectedPill(mode === "red-pill" ? "red" : "blue")
    setTimeout(() => {
      onSelect(mode)
    }, 1200)
  }

  useEffect(() => {
    const t = setTimeout(() => {
      handleSelection("red-pill")
    }, 8000)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-[#fafafa] flex flex-col items-center justify-between select-none overflow-hidden"
    >
      {/* SEO & Accessibility Hidden Layer */}
      <div className="sr-only">
        <h1>Portafolio interactivo de Sebastián Ramírez - Fullstack Engineer</h1>
        <p>Desarrollador de software a medida, especializado en arquitecturas robustas y escalables con React, Node.js, Python y Docker.</p>
        <p>Simbología: La Píldora Azul representa la ilusión, el conformismo y la comodidad de la ignorancia dentro de la simulación. La Píldora Roja representa la verdad, el despertar y el compromiso con la realidad, por dura que sea.</p>
        <p>Selecciona una experiencia visual: La Píldora Roja para una experiencia inmersiva estilo Cyberpunk, o la Píldora Azul para un currículum sobrio y corporativo.</p>
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 w-full max-w-5xl px-8 pt-10 flex justify-between items-center">
        <div className="font-mono text-[10px] text-neutral-400 tracking-[0.4em] uppercase">
          PROJECT: SEBASTIAN RAMIREZ // CONSTRUCT
        </div>
        <div className="font-mono text-[10px] text-neutral-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#171717] rounded-full animate-pulse" />
          STATUS: AWAKE
        </div>
      </div>

      {/* Prompt */}
      <div className="relative z-10 text-center max-w-xl px-6 pointer-events-none">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl md:text-3xl font-light text-neutral-800 tracking-tight text-balance leading-normal font-sans"
        >
          Esta es tu última oportunidad. Después de esto, no hay marcha atrás.
        </motion.h2>
      </div>

      {/* Interactive Pills */}
      <div className="relative z-10 flex flex-col items-center gap-8 pb-20 w-full max-w-2xl px-6">
        <button
          onClick={() => handleSelection("red-pill")}
          className="group inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full text-sm font-medium transition-all hover:bg-neutral-800 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafafa]"
          aria-label="Ver portafolio completo"
        >
          Ver Portafolio
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </button>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-center justify-center w-full">
        
        {/* Blue Pill */}
        <button
          onClick={() => handleSelection("blue-pill")}
          onMouseEnter={() => setSelectedPill("blue")}
          onMouseLeave={() => setSelectedPill(null)}
          aria-label="Píldora Azul: Portafolio corporativo limpio"
          className="group relative flex flex-col items-center gap-4 bg-transparent border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafafa] rounded-lg"
        >
          <div className="relative w-36 h-14 rounded-full border border-blue-500/20 bg-blue-50/40 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-500/10 group-hover:scale-105 active:scale-95 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            <div className="w-16 h-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.5)] transform -rotate-12 transition-transform group-hover:rotate-0" />
          </div>
          <div className="text-center flex flex-col gap-1">
            <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
              Píldora Azul
            </span>
            <p className="text-[10px] font-mono text-neutral-400 max-w-[150px] leading-relaxed">
              La ilusión estructurada. Currículum corporativo sobrio, formato de Élite.
            </p>
          </div>
        </button>

        {/* Red Pill */}
        <button
          onClick={() => handleSelection("red-pill")}
          onMouseEnter={() => setSelectedPill("red")}
          onMouseLeave={() => setSelectedPill(null)}
          aria-label="Píldora Roja: Experiencia inmersiva estilo Matrix"
          className="group relative flex flex-col items-center gap-4 bg-transparent border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafafa] rounded-lg"
        >
          <div className="relative w-36 h-14 rounded-full border border-red-500/20 bg-red-50/40 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:border-red-500 group-hover:bg-red-500/10 group-hover:scale-105 active:scale-95 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">
            <div className="w-16 h-6 rounded-full bg-gradient-to-r from-red-400 to-red-600 shadow-[0_0_15px_rgba(239,68,68,0.5)] transform -rotate-12 transition-transform group-hover:rotate-0" />
          </div>
          <div className="text-center flex flex-col gap-1">
            <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-widest group-hover:text-red-600 transition-colors">
              Píldora Roja
            </span>
            <p className="text-[10px] font-mono text-neutral-400 max-w-[150px] leading-relaxed">
              El despertar. Verdad técnica cruda: lluvia de datos, WebGL, código en vivo.
            </p>
          </div>
        </button>

        </div>
      </div>

      {/* Global Transition Flash */}
      <AnimatePresence>
        {selectedPill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-50 pointer-events-none mix-blend-difference ${
              selectedPill === "red" ? "bg-red-500" : "bg-blue-500"
            }`}
            transition={{ duration: 0.1, repeat: 4, repeatType: "reverse" }}
          />
        )}
      </AnimatePresence>
    </motion.section>
  )
}
