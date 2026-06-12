"use client"

import { useState, useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { AugmentedDev } from "@/components/sections/augmented-dev"
import { Stack } from "@/components/stack"
import { Contact } from "@/components/contact"
import { MatrixIntro } from "@/components/sections/matrix-intro"
import { CinematicStorytelling } from "@/components/canvas/cinematic-storytelling"
import { ConstructIntro } from "@/components/sections/construct-intro"
import { BluePortfolio } from "@/components/sections/blue-portfolio"
import type { ExperienceMode } from "@/types/experience"

const LensCursor = dynamic(() => import("@/components/lens-cursor").then(m => ({ default: m.LensCursor })), { ssr: false })

export default function HomeClient() {
  const [experienceMode, setExperienceMode] = useState<"construct" | "red-pill" | "blue-pill">("construct")
  const [showMatrixIntro, setShowMatrixIntro] = useState(true)
  const [canvasReady, setCanvasReady] = useState(false)
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setCanvasReady(true)
  }, [])

  const handleExperienceChange = (mode: "construct" | "red-pill" | "blue-pill") => {
    setExperienceMode(mode)
    setShowMatrixIntro(mode === "red-pill")
    requestAnimationFrame(() => {
      const main = document.getElementById("main-content") || mainRef.current
      if (main) main.focus({ preventScroll: true })
    })
  }

  const handleSwitchBack = () => {
    handleExperienceChange("construct")
  }

  return (
    <AnimatePresence mode="wait">
      <div aria-live="polite" className="sr-only">
        {experienceMode === "red-pill" && "Experiencia inmersiva activada"}
        {experienceMode === "blue-pill" && "Portafolio corporativo activado"}
      </div>
      {experienceMode === "construct" && (
        <ConstructIntro key="construct" onSelect={handleExperienceChange} />
      )}

      {experienceMode === "blue-pill" && (
        <motion.div
          key="blue-pill"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <BluePortfolio onSwitchBack={handleSwitchBack} />
        </motion.div>
      )}

      {experienceMode === "red-pill" && (
        <motion.div
          key="red-pill"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="noise-bg min-h-screen bg-background"
        >
          <LensCursor />
          <AnimatePresence mode="wait">
            {showMatrixIntro && (
              <MatrixIntro key="intro" onComplete={() => setShowMatrixIntro(false)} />
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showMatrixIntro ? 0 : 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <CinematicStorytelling />
            <Header />
            <main id="main-content" ref={mainRef} tabIndex={-1} className="relative z-10 outline-none" aria-label="Contenido principal">
              <Hero />
              <About />
              <Projects />
              <AugmentedDev />
              <Stack />
              <Contact />
            </main>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
