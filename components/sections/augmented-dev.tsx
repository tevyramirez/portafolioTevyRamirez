"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { sectionVariants, viewport, duration, ease } from "@/lib/motion"
import { Terminal, Bot, Sparkles, Code2 } from "lucide-react"

const COMMANDS = [
  { text: 'gemini-cli "Analyze project requirements for ONE Consultores"', delay: 1000 },
  { text: '> Initializing agentic research...', delay: 2000 },
  { text: '> Found architecture pattern: Micro-SaaS with Docker isolation.', delay: 1500 },
  { text: 'opencode "Generate high-performance React component for data visualization"', delay: 2500 },
  { text: '> Optimizing bundle size...', delay: 1000 },
  { text: '> Done. Architecture validated at 98% efficiency.', delay: 2000 },
]

export function AugmentedDev() {
  const [visibleCommands, setVisibleCommands] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      const timers: ReturnType<typeof setTimeout>[] = []
      let currentDelay = 0
      COMMANDS.forEach((cmd, i) => {
        currentDelay += cmd.delay
        timers.push(
          setTimeout(() => {
            setVisibleCommands((prev) => [...prev, i])
          }, currentDelay)
        )
      })
      return () => {
        timers.forEach(clearTimeout)
      }
    }
  }, [isInView])

  return (
    <section id="augmented" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionVariants.header}
        >
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">Augmented Developer</h2>
          <motion.div 
            className="flex-1 h-px bg-border/40"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: duration.slow, delay: 0.2, ease: ease.out }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-2">
              <Sparkles className="w-3 h-3" />
              SOTA Workflow
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">AI as a Technical Force Multiplier</h3>
            <p className="text-muted-foreground leading-relaxed">
              No solo escribo código; orquesto agentes. Utilizo herramientas como <span className="text-primary font-medium">Gemini CLI</span> y <span className="text-foreground font-medium">OpenCode</span> para acelerar la investigación arquitectónica, optimizar el rendimiento y garantizar la mantenibilidad del software.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-border/40 glass">
                <Bot className="w-5 h-5 text-primary mb-2" />
                <h4 className="text-sm font-bold text-foreground">Investigación</h4>
                <p className="text-xs text-muted-foreground mt-1">Mapeo rápido de dependencias y patrones.</p>
              </div>
              <div className="p-4 rounded-xl border border-border/40 glass">
                <Code2 className="w-5 h-5 text-primary mb-2" />
                <h4 className="text-sm font-bold text-foreground">Calidad</h4>
                <p className="text-xs text-muted-foreground mt-1">Validación técnica y refactorización inteligente.</p>
              </div>
            </div>
          </motion.div>

          {/* Terminal Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: duration.slow }}
            className="glass rounded-xl border border-primary/20 shadow-2xl shadow-primary/5 overflow-hidden flex flex-col aspect-[4/3] md:aspect-square"
          >
            {/* Terminal Header */}
            <div className="bg-secondary/50 px-4 py-2 flex items-center justify-between border-b border-border/40">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-[10px] font-mono text-muted-foreground flex items-center gap-2">
                <Terminal className="w-3 h-3" />
                tevy@gemini-cli: ~/portfolio
              </div>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-6 font-mono text-xs md:text-sm overflow-y-auto custom-scrollbar">
              <div className="space-y-3">
                {visibleCommands.map((index) => {
                  const cmd = COMMANDS[index]
                  if (!cmd) return null
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={cmd.text.startsWith('>') ? "text-primary/70 italic ml-4" : "text-foreground"}
                    >
                      {cmd.text}
                    </motion.div>
                  )
                })}
                {isInView && visibleCommands.length < COMMANDS.length && (
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-4 bg-primary inline-block align-middle ml-1"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
