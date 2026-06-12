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
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-50 text-blue-600 text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Blue Pill Mode
            </span>
            <button
              onClick={onSwitchBack}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-50 text-red-600 text-xs font-mono font-semibold transition-all hover:bg-red-500 hover:text-white hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Tomar Roja
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
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-neutral-400 hover:text-blue-600 transition-colors"
                        aria-label={`Visitar ${new URL(p.url).hostname}`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        {new URL(p.url).hostname}
                      </a>
                    )}
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
                href="https://github.com/tevyramirez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-600 hover:text-blue-600 transition-colors w-fit"
              >
                <Github className="w-5 h-5 text-neutral-400" />
                github.com/tevyramirez
              </a>
            </div>
          </div>

          {/* Direct Contact Links */}
          <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 md:p-8 shadow-sm space-y-5">
            <h3 className="font-mono text-xs text-neutral-400 uppercase tracking-widest border-b border-neutral-100 pb-3">
              Canales Directos
            </h3>
            <a
              href="mailto:seba.ram24@gmail.com"
              className="flex items-center gap-3 p-4 bg-neutral-50/50 border border-neutral-200 rounded-lg hover:border-blue-500 hover:bg-white transition-colors group"
            >
              <Mail className="w-5 h-5 text-neutral-400 group-hover:text-blue-600 transition-colors" />
              <div>
                <span className="block text-[10px] font-mono text-neutral-400 uppercase">Email</span>
                <span className="text-sm text-neutral-700 group-hover:text-blue-600 transition-colors">seba.ram24@gmail.com</span>
              </div>
            </a>
            <a
              href="https://wa.me/56937796611"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-neutral-50/50 border border-neutral-200 rounded-lg hover:border-blue-500 hover:bg-white transition-colors group"
            >
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-blue-600 transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <span className="block text-[10px] font-mono text-neutral-400 uppercase">WhatsApp</span>
                <span className="text-sm text-neutral-700 group-hover:text-blue-600 transition-colors">+56 9 3779 6611</span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/sebastian-ramirez-ramirez-b831b0244/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-neutral-50/50 border border-neutral-200 rounded-lg hover:border-blue-500 hover:bg-white transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-blue-600 transition-colors" />
              <div>
                <span className="block text-[10px] font-mono text-neutral-400 uppercase">LinkedIn</span>
                <span className="text-sm text-neutral-700 group-hover:text-blue-600 transition-colors">Sebastián Ramírez</span>
              </div>
            </a>
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
