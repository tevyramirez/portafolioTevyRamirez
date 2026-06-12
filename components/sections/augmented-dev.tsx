"use client"

import { motion } from "framer-motion"
import { sectionVariants, viewport, duration, ease } from "@/lib/motion"
import { Bot, Sparkles, Code2, Workflow } from "lucide-react"

const CAPABILITIES = [
  {
    icon: Bot,
    title: "IA Asistida",
    description: "Uso herramientas como Gemini CLI y OpenCode para investigar, generar y revisar código. La IA acelera tareas repetitivas; las decisiones de arquitectura siguen siendo mías.",
  },
  {
    icon: Workflow,
    title: "Automatización",
    description: "Pipelines CI/CD, scripts de despliegue y tareas de mantenimiento. Reduzco trabajo manual repetitivo en cada proyecto donde opero.",
  },
  {
    icon: Code2,
    title: "Investigación Técnica",
    description: "Levantamiento de dependencias, evaluación de librerías y prototipado rápido antes de comprometer un stack. Menos guesswork, más evidencia.",
  },
]

export function AugmentedDev() {
  return (
    <section id="augmented" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
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

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
              <Sparkles className="w-3 h-3" />
              Workflow
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">IA como multiplicador, no como sustituto</h3>
            <p className="text-muted-foreground leading-relaxed">
              Integro herramientas de IA en mi flujo diario para escribir, investigar y documentar con mayor velocidad. La propuesta de valor sigue siendo la ingeniería: entender el problema, elegir la tecnología correcta y entregar software mantenible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: duration.slow, delay: i * 0.1 }}
                className="p-6 rounded-xl border border-border/40 glass space-y-3"
              >
                <div className="p-2 bg-primary/10 rounded-lg text-primary w-fit">
                  <cap.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-foreground">{cap.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
