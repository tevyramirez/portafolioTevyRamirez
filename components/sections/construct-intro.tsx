"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { PillMode } from "@/types/experience"

interface ConstructIntroProps {
  onSelect: (mode: PillMode) => void
}

export function ConstructIntro({ onSelect }: ConstructIntroProps) {
  const [selectedPill, setSelectedPill] = useState<"red" | "blue" | null>(null)

  const handleSelection = (mode: PillMode) => {
    setSelectedPill(mode === "red-pill" ? "red" : "blue")
    setTimeout(() => onSelect(mode), 700)
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
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] bg-[#fafafa] flex flex-col items-center justify-center select-none overflow-hidden"
    >
      <div className="sr-only">
        <h1>Portafolio interactivo de Sebastián Ramírez - Fullstack Engineer</h1>
        <p>Desarrollador de software a medida, especializado en arquitecturas robustas y escalables con React, Node.js, Python y Docker.</p>
        <p>Simbología: La Píldora Azul representa la ilusión, el conformismo y la comodidad de la ignorancia dentro de la simulación. La Píldora Roja representa la verdad, el despertar y el compromiso con la realidad, por dura que sea.</p>
        <p>Selecciona una experiencia visual: La Píldora Roja para una experiencia inmersiva, o la Píldora Azul para un currículum sobrio y corporativo.</p>
      </div>

      <div className="relative z-10 w-full max-w-3xl px-8 flex flex-col items-center gap-16">
        <div className="font-mono text-[10px] text-neutral-400 tracking-[0.4em] uppercase">
          Sebastián Ramírez · Fullstack Engineer
        </div>

        <div className="text-center max-w-xl space-y-4">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 tracking-tight font-sans"
            style={{ letterSpacing: "-0.02em", lineHeight: 1.15 }}
          >
            ¿Cómo quieres ver mi trabajo?
          </h2>
          <p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed">
            Dos formas, dos mensajes. Elige el tono con el que prefieres entrar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 w-full max-w-2xl">
          <button
            onClick={() => handleSelection("blue-pill")}
            onMouseEnter={() => setSelectedPill("blue")}
            onMouseLeave={() => setSelectedPill(null)}
            aria-label="Píldora Azul: Portafolio corporativo sobrio"
            className="group relative flex flex-col items-start gap-4 p-8 bg-white border border-neutral-200 rounded-2xl text-left transition-all hover:border-blue-500 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafafa]"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Píldora Azul
              </span>
            </div>
            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2" style={{ letterSpacing: "-0.01em" }}>
                La ilusión estructurada
              </h3>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                Currículum sobrio, formato editorial. Resumen, casos de estudio, contacto. Sin distracciones.
              </p>
            </div>
            <span className="mt-2 text-xs font-mono text-neutral-400 group-hover:text-blue-600 transition-colors">
              Entrar →
            </span>
          </button>

          <button
            onClick={() => handleSelection("red-pill")}
            onMouseEnter={() => setSelectedPill("red")}
            onMouseLeave={() => setSelectedPill(null)}
            aria-label="Píldora Roja: Experiencia inmersiva"
            className="group relative flex flex-col items-start gap-4 p-8 bg-white border border-neutral-200 rounded-2xl text-left transition-all hover:border-red-500 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafafa]"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Píldora Roja
              </span>
            </div>
            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2" style={{ letterSpacing: "-0.01em" }}>
                El despertar
              </h3>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                Experiencia visual inmersiva. Partículas, shaders, cinemática. Para quienes quieren ver el proceso.
              </p>
            </div>
            <span className="mt-2 text-xs font-mono text-neutral-400 group-hover:text-red-600 transition-colors">
              Entrar →
            </span>
          </button>
        </div>

        <div className="text-[10px] font-mono text-neutral-400 tracking-widest">
          Autonavegación en 8 segundos
        </div>
      </div>

      <AnimatePresence>
        {selectedPill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-50 pointer-events-none ${
              selectedPill === "red" ? "bg-red-500" : "bg-blue-500"
            }`}
            style={{ opacity: 0.06 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
    </motion.section>
  )
}
