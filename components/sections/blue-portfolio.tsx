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
    <div className="min-h-screen bg-[#FBF9F4] text-[#1D1D1F] font-sans selection:bg-[#2FA46A]/20 selection:text-[#13502F] pb-20">
      
      {/* 1. Header Fijo Premium */}
      <header className="sticky top-0 z-40 bg-[#FBF9F4]/80 backdrop-blur-md border-b border-[#E2DDD2] px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="font-semibold tracking-tight text-[#1D1D1F] font-serif text-lg">
              Sebastián Ramírez
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 bg-[#E4F0E8] text-[#13502F] rounded">
              Fullstack · Talca
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6B6B66]">
            <a href="#prologue" className="hover:text-[#1D1D1F] transition-colors">Resumen</a>
            <a href="#projects-clean" className="hover:text-[#1D1D1F] transition-colors">Casos de Estudio</a>
            <a href="#specialties" className="hover:text-[#1D1D1F] transition-colors">Especialidades</a>
            <a href="#contact-clean" className="hover:text-[#1D1D1F] transition-colors">Contacto</a>
          </nav>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2FA46A]/30 bg-[#E4F0E8] text-[#13502F] text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#2FA46A] animate-pulse" />
              Blue Pill Mode
            </span>
            <button
              onClick={onSwitchBack}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2FA46A]/30 bg-[#E4F0E8] text-[#13502F] text-xs font-mono font-semibold transition-all hover:bg-[#2FA46A] hover:text-[#FBF9F4] hover:border-[#2FA46A] hover:shadow-[0_0_15px_rgba(47,164,106,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#2FA46A]" />
              Tomar Roja
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section - Estilo Editorial / Harvard Business Review */}
      <section id="prologue" className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bp-matrix-soft)] border border-[var(--bp-matrix)]/30 text-[var(--bp-matrix-ink)] text-[10px] font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Desarrollo Fullstack Profesional
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--bp-ink)] tracking-tight leading-[1.08] font-light">
              Desarrollo de aplicaciones web en producción y software a medida.
            </h1>
            <p className="text-lg text-[var(--bp-muted)] leading-relaxed font-sans max-w-2xl">
              Trabajo en la construcción de plataformas sólidas, abarcando frontend, backend, despliegues dockerizados y pipelines de CI/CD. Mi enfoque está centrado en entregar código mantenible, documentado y estrictamente alineado con las necesidades y requerimientos técnicos del negocio.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects-clean"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[var(--bp-matrix)] text-[var(--bp-on-accent)] font-medium rounded-lg text-sm transition-all hover:bg-[var(--bp-matrix-ink)]"
              >
                Ver Casos de Estudio
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contact-clean"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[var(--bp-surface-alt)] border border-[var(--bp-border)] text-[var(--bp-muted)] font-medium rounded-lg text-sm transition-all hover:bg-[var(--bp-surface)] hover:border-[var(--bp-border)]"
              >
                Contactar
              </a>
            </div>
          </div>

          {/* Core Focus Panel */}
          <div className="bg-[var(--bp-surface-alt)] border border-[var(--bp-border)]/80 rounded-2xl p-6 shadow-sm space-y-6">
            <h3 className="font-mono text-xs text-[var(--bp-muted)] uppercase tracking-widest border-b border-[var(--bp-border)] pb-3">
              Enfoque Operativo
            </h3>
            <div className="space-y-4 font-mono text-xs text-[var(--bp-muted)]">
              <div className="flex items-start gap-2">
                <span className="text-[var(--bp-matrix)]">✓</span>
                <p>Código Limpio y Tipado Estricto</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[var(--bp-matrix)]">✓</span>
                <p>Ambientes Reproducibles (Docker)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[var(--bp-matrix)]">✓</span>
                <p>Metodología SCRUM e Iteraciones Ágiles</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[var(--bp-matrix)]">✓</span>
                <p>Despliegues Seguros en la Nube</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Division Line */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[var(--bp-border)] w-full" />
      </div>

      {/* 4. Projects Section - Minimal Clean Grid */}
      <section id="projects-clean" className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[var(--bp-matrix)] uppercase tracking-widest">01 / Proyectos Reales</span>
            <h2 className="text-3xl font-serif text-[var(--bp-ink)] tracking-tight font-light">Casos de Estudio</h2>
          </div>
          <p className="text-sm text-[var(--bp-muted)] max-w-sm">
            Seleccione cualquier caso para ver el desglose técnico y las decisiones de arquitectura implementadas.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((p) => {
            const isActive = activeProject === p.id
            return (
              <div 
                key={p.id}
                className={`bg-[var(--bp-surface-alt)] border transition-all duration-300 rounded-2xl overflow-hidden ${
                  isActive 
                    ? "border-[var(--bp-matrix)] shadow-md ring-1 ring-[var(--bp-matrix)]/10" 
                    : "border-[var(--bp-border)]/80 hover:border-[var(--bp-border)] hover:shadow-sm"
                }`}
              >
                {/* Header de la Tarjeta */}
                <div 
                  onClick={() => setActiveProject(isActive ? null : p.id)}
                  className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer select-none"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-[var(--bp-matrix-soft)] border border-[var(--bp-matrix)]/30 text-[var(--bp-matrix)] rounded">
                        {p.category}
                      </span>
                      <span className="text-xs font-mono text-[var(--bp-muted)]">{p.year}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-light text-[var(--bp-ink)] mt-1">
                      {p.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6">
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-[var(--bp-muted)] hover:text-[var(--bp-matrix)] transition-colors"
                        aria-label={`Visitar ${new URL(p.url).hostname}`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        {new URL(p.url).hostname}
                      </a>
                    )}
                    <div className="w-8 h-8 rounded-full bg-[var(--bp-surface)] flex items-center justify-center text-[var(--bp-muted)] group-hover:bg-[var(--bp-border)] transition-colors">
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
                      className="border-t border-[var(--bp-border)] bg-[var(--bp-surface)]"
                    >
                      <div className="p-6 md:p-8 space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          
                          {/* Desglose Fáctico */}
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-xs font-mono text-[var(--bp-muted)] uppercase tracking-widest mb-1.5">El Problema</h4>
                              <p className="text-sm text-[var(--bp-muted)] leading-relaxed">{p.problem}</p>
                            </div>
                            <div>
                              <h4 className="text-xs font-mono text-[var(--bp-muted)] uppercase tracking-widest mb-1.5">La Solución</h4>
                              <p className="text-sm text-[var(--bp-muted)] leading-relaxed">{p.solution}</p>
                            </div>
                            <div>
                              <h4 className="text-xs font-mono text-[var(--bp-muted)] uppercase tracking-widest mb-2">Stack Tecnológico</h4>
                              <div className="flex flex-wrap gap-2">
                                {p.technologies.map(tech => (
                                  <span key={tech} className="text-xs font-mono px-2.5 py-1 bg-[var(--bp-surface-alt)] border border-[var(--bp-border)] text-[var(--bp-muted)] rounded-md shadow-2xs">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Decisiones de Arquitectura */}
                          <div className="bg-[var(--bp-surface-alt)] border border-[var(--bp-border)]/80 rounded-xl p-6 shadow-2xs flex flex-col justify-between">
                            <div className="space-y-4">
                              <h4 className="text-xs font-mono text-[var(--bp-muted)] uppercase tracking-widest flex items-center gap-1.5">
                                <Cpu className="w-3.5 h-3.5 text-[var(--bp-matrix)]" />
                                Decisiones Técnicas Clave
                              </h4>
                              <ul className="space-y-3 font-mono text-xs text-[var(--bp-muted)]">
                                {p.decisions.map((decision, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-[var(--bp-matrix)]">▸</span>
                                    <span>{decision}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-8 pt-4 border-t border-[var(--bp-border)] flex items-center gap-3">
                              <div className="p-2 bg-[var(--bp-matrix-soft)] text-[var(--bp-matrix)] rounded-lg">
                                <Cpu className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="text-[10px] font-mono text-[var(--bp-muted)] uppercase">Garantía Profesional</span>
                                <p className="text-xs text-[var(--bp-muted)] font-medium">Arquitectura contrastada con requerimientos reales.</p>
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
        <div className="h-px bg-[var(--bp-border)] w-full" />
      </div>

      {/* 6. Specialties Section */}
      <section id="specialties" className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-3xl space-y-12">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[var(--bp-matrix)] uppercase tracking-widest">02 / Especialización</span>
            <h2 className="text-3xl font-serif text-[var(--bp-ink)] tracking-tight font-light">Estructura & Desarrollo</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="p-2 bg-[var(--bp-matrix-soft)] text-[var(--bp-matrix)] rounded-lg w-fit">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-medium text-[var(--bp-ink)]">Ingeniería Frontend</h3>
              <p className="text-sm text-[var(--bp-muted)] leading-relaxed">
                Desarrollo de interfaces reactivas y rápidas utilizando Vue 3 (Composition API), React 19 y Next.js. Optimización del renderizado en cliente, accesibilidad y maquetación modular de alto nivel.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-2 bg-[var(--bp-matrix-soft)] text-[var(--bp-matrix)] rounded-lg w-fit">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-medium text-[var(--bp-ink)]">Sistemas & Backend</h3>
              <p className="text-sm text-[var(--bp-muted)] leading-relaxed">
                Diseño de APIs eficientes en Node.js, Python (Django) y Express. Modelado de bases de datos relacionales estructuradas (PostgreSQL, SQL Server) asegurando integridad referencial.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-2 bg-[var(--bp-matrix-soft)] text-[var(--bp-matrix)] rounded-lg w-fit">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-medium text-[var(--bp-ink)]">Infraestructura & DevOps</h3>
              <p className="text-sm text-[var(--bp-muted)] leading-relaxed">
                Despliegues en contenedores Docker y flujos de integración continua (CI/CD). Levantamiento y configuración de infraestructura cloud en Google Cloud Platform y administración de servidores Linux.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-2 bg-[var(--bp-matrix-soft)] text-[var(--bp-matrix)] rounded-lg w-fit">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-medium text-[var(--bp-ink)]">Estrategia Ágil</h3>
              <p className="text-sm text-[var(--bp-muted)] leading-relaxed">
                Planificación ágil bajo metodología SCRUM, liderazgo técnico en equipos pequeños y comunicación directa con clientes para traducir requerimientos de negocio en especificaciones funcionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Division Line */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[var(--bp-border)] w-full" />
      </div>

      {/* 8. Contact Section */}
      <section id="contact-clean" className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[var(--bp-matrix)] uppercase tracking-widest">03 / Contacto Directo</span>
              <h2 className="text-3xl font-serif text-[var(--bp-ink)] tracking-tight font-light">¿Desea conversar sobre un proyecto?</h2>
            </div>
            <p className="text-[var(--bp-muted)] leading-relaxed">
              Si busca un desarrollador fullstack con experiencia real en el ciclo completo de desarrollo de software, despliegues dockerizados y APIs seguras, conversemos.
            </p>
            <div className="space-y-4 pt-4">
              <a
                href="https://github.com/tevyramirez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[var(--bp-muted)] hover:text-[var(--bp-matrix)] transition-colors w-fit"
              >
                <Github className="w-5 h-5 text-[var(--bp-muted)]" />
                github.com/tevyramirez
              </a>
            </div>
          </div>

          {/* Direct Contact Links */}
          <div className="bg-[var(--bp-surface-alt)] border border-[var(--bp-border)]/80 rounded-2xl p-6 md:p-8 shadow-sm space-y-5">
            <h3 className="font-mono text-xs text-[var(--bp-muted)] uppercase tracking-widest border-b border-[var(--bp-border)] pb-3">
              Canales Directos
            </h3>
            <a
              href="mailto:seba.ram24@gmail.com"
              className="flex items-center gap-3 p-4 bg-[var(--bp-surface)] border border-[var(--bp-border)] rounded-lg hover:border-[var(--bp-matrix)] hover:bg-[var(--bp-surface-alt)] transition-colors group"
            >
              <Mail className="w-5 h-5 text-[var(--bp-muted)] group-hover:text-[var(--bp-matrix)] transition-colors" />
              <div>
                <span className="block text-[10px] font-mono text-[var(--bp-muted)] uppercase">Email</span>
                <span className="text-sm text-[var(--bp-muted)] group-hover:text-[var(--bp-matrix)] transition-colors">seba.ram24@gmail.com</span>
              </div>
            </a>
            <a
              href="https://wa.me/56937796611"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-[var(--bp-surface)] border border-[var(--bp-border)] rounded-lg hover:border-[var(--bp-matrix)] hover:bg-[var(--bp-surface-alt)] transition-colors group"
            >
              <svg className="w-5 h-5 text-[var(--bp-muted)] group-hover:text-[var(--bp-matrix)] transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <span className="block text-[10px] font-mono text-[var(--bp-muted)] uppercase">WhatsApp</span>
                <span className="text-sm text-[var(--bp-muted)] group-hover:text-[var(--bp-matrix)] transition-colors">+56 9 3779 6611</span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/sebastian-ramirez-ramirez-b831b0244/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-[var(--bp-surface)] border border-[var(--bp-border)] rounded-lg hover:border-[var(--bp-matrix)] hover:bg-[var(--bp-surface-alt)] transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-[var(--bp-muted)] group-hover:text-[var(--bp-matrix)] transition-colors" />
              <div>
                <span className="block text-[10px] font-mono text-[var(--bp-muted)] uppercase">LinkedIn</span>
                <span className="text-sm text-[var(--bp-muted)] group-hover:text-[var(--bp-matrix)] transition-colors">Sebastián Ramírez</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 9. Switch-back Footer floating label */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={onSwitchBack}
          className="flex items-center gap-2 px-4 py-2 bg-[var(--bp-matrix)] text-[var(--bp-on-accent)] rounded-full border border-[var(--bp-matrix-ink)] shadow-xl transition-all hover:scale-105 active:scale-95 text-xs font-mono"
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
