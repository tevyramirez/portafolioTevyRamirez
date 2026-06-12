"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useReducedMotion } from "framer-motion"
import { 
  ArrowUpRight, 
  Database, 
  Globe, 
  Server, 
  Cpu, 
  Mail, 
  Linkedin, 
  Github, 
  Sparkles 
} from "lucide-react"
import { projects } from "@/data/projects"

export function BluePortfolio({ onSwitchBack }: BluePortfolioProps) {
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const [formStatus, setFormStatus] = useState<"idle" | "sent">("idle")

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 font-sans selection:bg-blue-600 selection:text-white pb-20">
      
      {/* 1. Header Fijo Premium */}
      <header className="sticky top-0 z-40 bg-[#fafafa]/80 backdrop-blur-md border-b border-neutral-200/60 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="font-semibold tracking-tight text-neutral-900 font-serif text-lg">
              Sebastián Ramírez
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-200/60 text-neutral-600 rounded">
              Fullstack Division
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
            <a href="#prologue" className="hover:text-neutral-950 transition-colors">Resumen</a>
            <a href="#projects-clean" className="hover:text-neutral-950 transition-colors">Casos de Estudio</a>
            <a href="#specialties" className="hover:text-neutral-950 transition-colors">Especialidades</a>
            <a href="#contact-clean" className="hover:text-neutral-950 transition-colors">Contacto</a>
          </nav>
          <div className="flex items-center gap-3">
            {/* Red Pill Switch */}
            <button
              onClick={onSwitchBack}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-50 text-red-600 text-xs font-mono font-semibold transition-all hover:bg-red-500 hover:text-white hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse group-hover:bg-white" />
              Red Pill Mode
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section - Estilo Editorial / Harvard Business Review */}
      <section id="prologue" className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Desarrollo Fullstack Profesional
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 tracking-tight leading-[1.08] font-light">
              Desarrollo de aplicaciones web en producción y software a medida.
            </h1>
            <p className="text-lg text-neutral-500 leading-relaxed font-sans max-w-2xl">
              Trabajo en la construcción de plataformas sólidas, abarcando frontend, backend, despliegues dockerizados y pipelines de CI/CD. Mi enfoque está centrado en entregar código mantenible, documentado y estrictamente alineado con las necesidades y requerimientos técnicos del negocio.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects-clean"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-neutral-900 text-white font-medium rounded-lg text-sm transition-all hover:bg-neutral-800"
              >
                Ver Casos de Estudio
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contact-clean"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-white border border-neutral-300 text-neutral-700 font-medium rounded-lg text-sm transition-all hover:bg-neutral-50 hover:border-neutral-400"
              >
                Contactar
              </a>
            </div>
          </div>

          {/* Core Focus Panel */}
          <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-sm space-y-6">
            <h3 className="font-mono text-xs text-neutral-400 uppercase tracking-widest border-b border-neutral-100 pb-3">
              Enfoque Operativo
            </h3>
            <div className="space-y-4 font-mono text-xs text-neutral-600">
              <div className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <p>Código Limpio y Tipado Estricto</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <p>Ambientes Reproducibles (Docker)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <p>Metodología SCRUM e Iteraciones Ágiles</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <p>Despliegues Seguros en la Nube</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Division Line */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-neutral-200/80 w-full" />
      </div>

      {/* 4. Projects Section - Minimal Clean Grid */}
      <section id="projects-clean" className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs text-blue-600 uppercase tracking-widest">01 / Proyectos Reales</span>
            <h2 className="text-3xl font-serif text-neutral-900 tracking-tight font-light">Casos de Estudio</h2>
          </div>
          <p className="text-sm text-neutral-500 max-w-sm">
            Seleccione cualquier caso para ver el desglose técnico y las decisiones de arquitectura implementadas.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((p) => {
            const isActive = activeProject === p.id
            return (
              <div 
                key={p.id}
                className={`bg-white border transition-all duration-300 rounded-2xl overflow-hidden ${
                  isActive 
                    ? "border-blue-500 shadow-md ring-1 ring-blue-500/10" 
                    : "border-neutral-200/80 hover:border-neutral-300 hover:shadow-sm"
                }`}
              >
                {/* Header de la Tarjeta */}
                <div 
                  onClick={() => setActiveProject(isActive ? null : p.id)}
                  className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer select-none"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-blue-50 border border-blue-100 text-blue-600 rounded">
                        {p.category}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">{p.year}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-light text-neutral-900 mt-1">
                      {p.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-200 transition-colors">
                      <motion.span
                        animate={{ rotate: isActive ? 180 : 0 }}
                        className="text-lg font-light leading-none"
                      >
                        ↓
                      </motion.span>
                    </div>
                  </div>
                </div>

                {/* Contenido Expandido */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-neutral-100 bg-neutral-50/50"
                    >
                      <div className="p-6 md:p-8 space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          
                          {/* Desglose Fáctico */}
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1.5">El Problema</h4>
                              <p className="text-sm text-neutral-600 leading-relaxed">{p.problem}</p>
                            </div>
                            <div>
                              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1.5">La Solución</h4>
                              <p className="text-sm text-neutral-600 leading-relaxed">{p.solution}</p>
                            </div>
                            <div>
                              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">Stack Tecnológico</h4>
                              <div className="flex flex-wrap gap-2">
                                {p.technologies.map(tech => (
                                  <span key={tech} className="text-xs font-mono px-2.5 py-1 bg-white border border-neutral-200 text-neutral-700 rounded-md shadow-2xs">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Decisiones de Arquitectura */}
                          <div className="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-2xs flex flex-col justify-between">
                            <div className="space-y-4">
                              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                                <Cpu className="w-3.5 h-3.5 text-blue-600" />
                                Decisiones Técnicas Clave
                              </h4>
                              <ul className="space-y-3 font-mono text-xs text-neutral-600">
                                {p.decisions.map((decision, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-blue-600">▸</span>
                                    <span>{decision}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center gap-3">
                              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <Cpu className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="text-[10px] font-mono text-neutral-400 uppercase">Garantía Profesional</span>
                                <p className="text-xs text-neutral-600 font-medium">Arquitectura contrastada con requerimientos reales.</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </section>

      {/* 5. Division Line */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-neutral-200/80 w-full" />
      </div>

      {/* 6. Specialties Section */}
      <section id="specialties" className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-3xl space-y-12">
          <div className="space-y-2">
            <span className="font-mono text-xs text-blue-600 uppercase tracking-widest">02 / Especialización</span>
            <h2 className="text-3xl font-serif text-neutral-900 tracking-tight font-light">Estructura & Desarrollo</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg w-fit">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-medium text-neutral-950">Ingeniería Frontend</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Desarrollo de interfaces reactivas y rápidas utilizando Vue 3 (Composition API), React 19 y Next.js. Optimización del renderizado en cliente, accesibilidad y maquetación modular de alto nivel.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg w-fit">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-medium text-neutral-950">Sistemas & Backend</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Diseño de APIs eficientes en Node.js, Python (Django) y Express. Modelado de bases de datos relacionales estructuradas (PostgreSQL, SQL Server) asegurando integridad referencial.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg w-fit">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-medium text-neutral-950">Infraestructura & DevOps</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Despliegues en contenedores Docker y flujos de integración continua (CI/CD). Levantamiento y configuración de infraestructura cloud en Google Cloud Platform y administración de servidores Linux.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg w-fit">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-medium text-neutral-950">Estrategia Ágil</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Planificación ágil bajo metodología SCRUM, liderazgo técnico en equipos pequeños y comunicación directa con clientes para traducir requerimientos de negocio en especificaciones funcionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Division Line */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-neutral-200/80 w-full" />
      </div>

      {/* 8. Contact Section */}
      <section id="contact-clean" className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-blue-600 uppercase tracking-widest">03 / Contacto Directo</span>
              <h2 className="text-3xl font-serif text-neutral-900 tracking-tight font-light">¿Desea conversar sobre un proyecto?</h2>
            </div>
            <p className="text-neutral-500 leading-relaxed">
              Si busca un desarrollador fullstack con experiencia real en el ciclo completo de desarrollo de software, despliegues dockerizados y APIs seguras, conversemos.
            </p>
            <div className="space-y-4 pt-4">
              <a
                href="mailto:seba.ram24@gmail.com"
                className="flex items-center gap-3 text-neutral-600 hover:text-blue-600 transition-colors w-fit"
              >
                <Mail className="w-5 h-5 text-neutral-400" />
                seba.ram24@gmail.com
              </a>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/sebastian-ramirez-ramirez-b831b0244/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white border border-neutral-200 hover:border-neutral-300 text-neutral-600 hover:text-blue-600 rounded-lg shadow-2xs transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/tevyramirez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white border border-neutral-200 hover:border-neutral-300 text-neutral-600 hover:text-neutral-900 rounded-lg shadow-2xs transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setFormStatus("sent") }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="bp-name" className="text-[10px] font-mono text-neutral-400 uppercase">Nombre</label>
                  <input
                    id="bp-name"
                    type="text"
                    placeholder="Ej. Juan Pérez"
                    className="w-full text-sm px-3.5 py-2.5 bg-neutral-50/50 border border-neutral-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="bp-company" className="text-[10px] font-mono text-neutral-400 uppercase">Empresa</label>
                  <input
                    id="bp-company"
                    type="text"
                    placeholder="Ej. ONE Consultores"
                    className="w-full text-sm px-3.5 py-2.5 bg-neutral-50/50 border border-neutral-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="bp-email" className="text-[10px] font-mono text-neutral-400 uppercase">Correo de Contacto</label>
                <input
                  id="bp-email"
                  type="email"
                  placeholder="juan@empresa.com"
                  className="w-full text-sm px-3.5 py-2.5 bg-neutral-50/50 border border-neutral-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="bp-message" className="text-[10px] font-mono text-neutral-400 uppercase">Mensaje</label>
                <textarea
                  id="bp-message"
                  rows={4}
                  placeholder="Escriba aquí los requerimientos técnicos o la propuesta de proyecto..."
                  className="w-full text-sm px-3.5 py-2.5 bg-neutral-50/50 border border-neutral-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none"
                />
              </div>
              {formStatus === "sent" ? (
                <p className="text-sm text-blue-600 font-medium py-3 text-center" role="status">
                  Mensaje recibido. Por favor contactar directamente por email o LinkedIn.
                </p>
              ) : (
                <button
                  type="submit"
                  className="w-full text-sm py-3 bg-blue-600 text-white font-medium rounded-lg shadow-sm transition-all hover:bg-blue-700 active:scale-[0.99]"
                >
                  Enviar Mensaje
                </button>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* 9. Switch-back Footer floating label */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={onSwitchBack}
          className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-full border border-neutral-800 shadow-xl transition-all hover:scale-105 active:scale-95 text-xs font-mono"
        >
          <span>🔴 Tomar Pastilla Roja</span>
        </button>
      </div>

    </div>
  )
}

interface BluePortfolioProps {
  onSwitchBack: () => void
}
