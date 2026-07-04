"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"

interface MatrixIntroProps {
  onComplete: () => void
}

const MESSAGE = "Esto es solo una simulación."
const SUBMESSAGE = "Pero lo que vas a ver después, no."

export function MatrixIntro({ onComplete }: MatrixIntroProps) {
  const [phase, setPhase] = useState<"typing" | "fading">("typing")
  const [displayText, setDisplayText] = useState("")
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleSkip = useCallback(() => {
    setPhase("fading")
    timerRef.current = setTimeout(() => onComplete(), 400)
  }, [onComplete])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleSkip()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleSkip])

  useEffect(() => {
    if (phase !== "typing") return
    if (displayText.length < MESSAGE.length) {
      timerRef.current = setTimeout(() => {
        setDisplayText(MESSAGE.substring(0, displayText.length + 1))
      }, 45)
    } else {
      timerRef.current = setTimeout(() => {
        setPhase("fading")
        setTimeout(() => onComplete(), 900)
      }, 1800)
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [displayText, phase, onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: phase === "fading" ? 0 : 1 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[9999] bg-[#fafafa] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="sr-only">
        <p>Introducción al portafolio de Sebastián Ramírez. Mensaje: {MESSAGE} {SUBMESSAGE}</p>
      </div>

      <div className="relative z-10 max-w-2xl px-6 text-center">
        <div className="font-mono text-[10px] text-neutral-400 tracking-[0.4em] uppercase mb-8">
          PORTFOLIO · 2026
        </div>
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-light text-neutral-900 tracking-tight leading-[1.1] font-sans min-h-[1.1em]"
          style={{ letterSpacing: "-0.02em" }}
        >
          {displayText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.9 }}
            className="inline-block w-[0.04em] h-[0.9em] bg-neutral-900 align-middle ml-1"
          />
        </h1>
        {phase === "fading" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-sm md:text-base text-neutral-500 font-light"
          >
            {SUBMESSAGE}
          </motion.p>
        )}
      </div>

      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
        <button
          onClick={handleSkip}
          className="px-4 py-2 text-neutral-500 hover:text-neutral-900 text-xs font-mono transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafafa] rounded"
          aria-label="Saltar introducción"
        >
          Saltar [Esc]
        </button>
      </div>
    </motion.div>
  )
}
