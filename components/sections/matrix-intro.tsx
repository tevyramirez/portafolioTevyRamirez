"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { AdvancedMatrixRain } from "@/components/canvas/advanced-matrix-rain"

interface MatrixIntroProps {
  onComplete: () => void
}

const PHRASES = [
  "Wake up, Neo...",
  "The Matrix has you...",
  "Follow the white rabbit.",
  "Knock, knock."
]

export function MatrixIntro({ onComplete }: MatrixIntroProps) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [isGlitching, setIsGlitching] = useState(false)
  const timeoutRefs = useRef<Array<ReturnType<typeof setTimeout>>>([])
  const mainTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const deleteTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearAllTimeouts = useCallback(() => {
    timeoutRefs.current.forEach(clearTimeout)
    timeoutRefs.current = []
    if (mainTimerRef.current) clearTimeout(mainTimerRef.current)
    if (deleteTimerRef.current) clearTimeout(deleteTimerRef.current)
  }, [])

  const handleSkip = useCallback(() => {
    setIsGlitching(true)
    const t = setTimeout(() => onComplete(), 800)
    timeoutRefs.current.push(t)
  }, [onComplete])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleSkip()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleSkip])

useEffect(() => {
    if (isFinished || isGlitching) return

    const currentPhrase = PHRASES[phraseIndex]
    if (!currentPhrase) return
    const speed = isDeleting ? 30 : 80

    mainTimerRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1))
        
        if (displayText === currentPhrase) {
          if (phraseIndex === PHRASES.length - 1) {
            const t = setTimeout(() => {
              setIsFinished(true)
              handleSkip()
            }, 1500)
            timeoutRefs.current.push(t)
          } else {
            deleteTimerRef.current = setTimeout(() => setIsDeleting(true), 2500)
          }
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1))
        if (displayText === "") {
          setIsDeleting(false)
          setPhraseIndex((prev) => prev + 1)
        }
      }
    }, speed)

    return () => {
      if (mainTimerRef.current) clearTimeout(mainTimerRef.current)
    }
  }, [displayText, isDeleting, phraseIndex, isFinished, isGlitching, handleSkip])

  useEffect(() => {
    return () => clearAllTimeouts()
  }, [clearAllTimeouts])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-[#020617] flex items-center justify-center overflow-hidden"
    >
      {/* SOTA Matrix Rain - Shader based */}
      <div className="absolute inset-0 z-0 opacity-40" role="img" aria-label="Efecto visual de lluvia de código estilo Matrix">
        <Canvas camera={{ position: [0, 0, 1] }} aria-hidden="true">
          <AdvancedMatrixRain />
        </Canvas>
      </div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]" />

      {/* Terminal UI - Top Left */}
      <div className="absolute top-12 left-12 z-20 w-full max-w-2xl pointer-events-none">
        <AnimatePresence mode="wait">
          {!isGlitching && (
            <motion.div
              key={phraseIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, filter: "blur(8px)" }}
              className="font-mono text-xl md:text-2xl lg:text-3xl text-[#4ade80] tracking-tight"
              style={{
                textShadow: "0 0 10px rgba(74, 222, 128, 0.5)"
              }}
            >
              <span className="inline-block min-h-[1em]">{displayText}</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-1 inline-block w-[0.5em] h-[1em] bg-[#4ade80] align-middle"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Global Glitch Overlay */}
      <AnimatePresence>
        {isGlitching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-50 pointer-events-none bg-white mix-blend-difference"
            transition={{ duration: 0.1, repeat: 5, repeatType: "reverse" }}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-[60]">
        <button
          onClick={handleSkip}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 text-[#4ade80] border border-[#4ade80]/30 hover:border-[#4ade80]/60 rounded-lg text-sm font-mono transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:ring-offset-2 focus:ring-offset-[#020617]"
          aria-label="Saltar introducción"
        >
          Saltar intro [Esc]
        </button>
        <span className="text-[10px] font-mono text-[#4ade80]/40 uppercase tracking-[0.3em] pointer-events-none animate-pulse">
          System initialized
        </span>
      </div>
    </motion.div>
  )
}
