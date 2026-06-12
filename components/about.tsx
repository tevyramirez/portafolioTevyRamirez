"use client"

import { motion } from "framer-motion"
import { sectionVariants, viewport, duration, ease } from "@/lib/motion"
import { Terminal } from "lucide-react"

const experience = [
  {
    year: "2025",
    role: "Desarrollo de Software a Medida & DevOps",
    company: "ONE Consultores",
    tech: ["Vue 3", "Python", "Express.js", "Docker"],
    desc: "Implementación de arquitectura containerizada y despliegues continuos bajo SCRUM."
  },
  {
    year: "2024",
    role: "Ingeniero Fullstack",
    company: "Avisodecobro (SaaS)",
    tech: ["React", "TypeScript", "Django", "PostgreSQL"],
    desc: "Desarrollo de plataforma SaaS multi-tenant para administración centralizada de gastos."
  },
  {
    year: "2022-2024",
    role: "Desarrollo & Seguridad",
    company: "DA5",
    tech: ["Node.js", "React", "Docker"],
    desc: "Creación de dashboards de datos y capa de seguridad con proxy inverso en Node.js."
  },
  {
    year: "2022-2023",
    role: "Administrador de Infraestructura Cloud",
    company: "Icono Marketing",
    tech: ["Linux", "Apache", "GCP"],
    desc: "Migración a GCP y optimización de stack LAMP en servidores Debian."
  }
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background kanji */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] text-[20vw] font-black text-matrix-green pointer-events-none select-none" aria-hidden="true" style={{ fontFamily: 'sans-serif' }}>
        システム
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionVariants.header}
        >
          <span className="text-matrix-green font-mono text-sm shadow-matrix-green/50 drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]">01.</span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight flex items-end gap-3">
            Currículum
            <span className="text-xl text-matrix-green font-light opacity-80" style={{ fontFamily: 'sans-serif' }}>/ 履歴書</span>
          </h2>
          <motion.div 
            className="flex-1 h-px bg-matrix-green/20 relative"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: duration.slow, delay: 0.2, ease: ease.out }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-matrix-green shadow-[0_0_10px_var(--matrix-green)]" />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          {/* Timeline Experience */}
          <motion.div
            className="flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {experience.map((item, i) => (
              <motion.div 
                key={i}
                variants={sectionVariants.content}
                className="group relative pl-8 md:pl-0"
              >
                {/* Timeline Line (Mobile mostly, or left side) */}
                <div className="md:hidden absolute left-[11px] top-2 bottom-[-32px] w-px bg-matrix-green/20 group-last:bg-transparent" />
                <div className="md:hidden absolute left-0 top-2 w-[24px] h-[24px] rounded-full bg-background border border-matrix-green/50 flex items-center justify-center shadow-[0_0_10px_rgba(57,255,20,0.2)]">
                  <div className="w-1.5 h-1.5 bg-matrix-green rounded-full" />
                </div>

                <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-8 items-start">
                  {/* Date & Decorative */}
                  <div className="hidden md:flex flex-col items-end pt-1">
                    <span className="font-mono text-sm text-matrix-green drop-shadow-[0_0_5px_rgba(57,255,20,0.5)]">
                      {item.year}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-mono mt-1 opacity-50 uppercase tracking-widest">
                      [ データ ]
                    </span>
                  </div>

                  {/* Mobile Date */}
                  <div className="md:hidden mb-1">
                    <span className="font-mono text-sm text-matrix-green drop-shadow-[0_0_5px_rgba(57,255,20,0.5)]">
                      {item.year}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className="bg-card/40 backdrop-blur-sm border border-border/50 p-6 rounded-lg transition-all duration-300 hover:border-matrix-green/40 hover:bg-matrix-green/[0.02] hover:shadow-[0_0_20px_rgba(57,255,20,0.05)] relative overflow-hidden group-hover:-translate-y-1">
                    <div className="absolute top-0 left-0 w-1 h-full bg-matrix-green/20 group-hover:bg-matrix-green transition-colors shadow-[0_0_10px_var(--matrix-green)]" />
                    
                    <h3 className="text-xl font-bold text-foreground group-hover:text-matrix-green transition-colors">{item.role}</h3>
                    <div className="text-sm text-muted-foreground font-mono mt-1 mb-4">{item.company}</div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tech.map(t => (
                        <span key={t} className="px-2.5 py-1.5 bg-background/50 border border-matrix-green/20 text-matrix-green text-xs font-mono rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side Stats / Specs */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={sectionVariants.content}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-card/40 border border-matrix-green/20 p-6 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Terminal className="w-24 h-24 text-matrix-green" />
              </div>
              <h3 className="text-sm font-mono text-matrix-green mb-6 uppercase tracking-widest drop-shadow-[0_0_5px_rgba(57,255,20,0.5)]">
                Core Systems
              </h3>
              
              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-foreground">Frontend Arch</span>
                    <span className="text-matrix-green">React/Vue</span>
                  </div>
                  <div className="h-1 w-full bg-background rounded overflow-hidden border border-border/50" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} aria-label="Frontend Architecture: 90%">
                    <div className="h-full bg-matrix-green shadow-[0_0_8px_var(--matrix-green)]" style={{ width: '90%' }} />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-foreground">Backend & APIs</span>
                    <span className="text-matrix-green">Node/Python</span>
                  </div>
                  <div className="h-1 w-full bg-background rounded overflow-hidden border border-border/50" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} aria-label="Backend & APIs: 85%">
                    <div className="h-full bg-matrix-green shadow-[0_0_8px_var(--matrix-green)]" style={{ width: '85%' }} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-foreground">Cloud & DevOps</span>
                    <span className="text-matrix-green">Docker/GCP</span>
                  </div>
                  <div className="h-1 w-full bg-background rounded overflow-hidden border border-border/50" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} aria-label="Cloud & DevOps: 80%">
                    <div className="h-full bg-matrix-green shadow-[0_0_8px_var(--matrix-green)]" style={{ width: '80%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border/50 p-6 rounded-lg bg-background/50 backdrop-blur-sm relative group overflow-hidden">
              <div className="absolute inset-0 bg-matrix-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-[10px] font-mono text-matrix-green uppercase tracking-widest mb-4 flex justify-between">
                <span>Status Report</span>
                <span className="animate-pulse">_</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                Especializado en transformar requerimientos de negocio complejos en arquitecturas estables y de alto rendimiento. Enfoque implacable en la entrega continua, metodologías ágiles y el rigor técnico.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
