"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Building2, X, Maximize2, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { ExplodedStack } from "./canvas/exploded-stack"
import { PostProcessing } from "./canvas/post-processing"
import { sectionVariants, cardVariants, viewport, duration, ease } from "@/lib/motion"
import { ArchitectureBlueprint } from "./projects/architecture-blueprint"
import { projects, type Project } from "@/data/projects"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [viewMode, setViewMode] = useState<"visual" | "technical">("visual")
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const handleClose = useCallback(() => {
    setSelectedProject(null)
    setViewMode("visual")
  }, [])

  useEffect(() => {
    if (!selectedProject) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose()
        return
      }
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length < 2) return
        const first = focusable[0]!
        const last = focusable[focusable.length - 1]!
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    closeButtonRef.current?.focus()
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [selectedProject, handleClose])

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionVariants.header}
        >
          <span className="text-primary font-mono text-sm tracking-widest">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">The Workshop</h2>
          <motion.div 
            className="flex-1 h-px bg-border/40"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: duration.slow, delay: 0.2, ease: ease.out }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setSelectedProject(project)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Ver detalles de ${project.title}`}
              className="glass group relative overflow-hidden rounded-xl border border-border/40 cursor-pointer hover:border-primary/40 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={cardVariants.entrance}
              whileHover="hover"
            >
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {project.problem}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-0.5 bg-secondary/50 text-secondary-foreground rounded border border-border/40">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3" />
                    Ver Blueprint
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Visitar ${new URL(project.url).hostname}`}
                    >
                      <ExternalLink className="w-3 h-3" />
                      {new URL(project.url).hostname}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-[60] cursor-zoom-out"
              aria-hidden="true"
            />
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-label={`Detalles de ${selectedProject.title}`}
              className="fixed inset-4 md:inset-10 lg:inset-20 z-[70] glass rounded-2xl overflow-hidden border border-primary/20 flex flex-col"
            >
              <div className="p-6 border-b border-border/40 flex justify-between items-center bg-background/40">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-mono text-xs uppercase tracking-widest">{selectedProject.company}</span>
                    <span className="w-1 h-1 bg-border rounded-full" />
                    <span className="text-muted-foreground font-mono text-xs">{selectedProject.year}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                </div>
                <button 
                  ref={closeButtonRef}
                  onClick={handleClose}
                  aria-label="Cerrar detalles del proyecto"
                  className="p-2 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="px-6 py-4 bg-background/20 flex justify-center border-b border-border/20" role="tablist">
                <div className="bg-secondary/50 p-1 rounded-lg flex gap-1 border border-border/40">
                  <button
                    onClick={() => setViewMode("visual")}
                    role="tab"
                    aria-selected={viewMode === "visual"}
                    className={`px-4 py-1.5 text-xs font-mono rounded-md transition-all ${
                      viewMode === "visual" 
                        ? "bg-primary text-primary-foreground shadow-lg" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Visual Preview
                  </button>
                  <button
                    onClick={() => setViewMode("technical")}
                    role="tab"
                    aria-selected={viewMode === "technical"}
                    className={`px-4 py-1.5 text-xs font-mono rounded-md transition-all ${
                      viewMode === "technical" 
                        ? "bg-primary text-primary-foreground shadow-lg" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Technical Blueprint
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar" role="tabpanel">
                <AnimatePresence mode="wait">
                  {viewMode === "visual" ? (
                    <motion.div
                      key="visual"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-12 h-full"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-2">Problem</h4>
                            <p className="text-muted-foreground leading-relaxed">{selectedProject.problem}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-2">Solution</h4>
                            <p className="text-muted-foreground leading-relaxed">{selectedProject.solution}</p>
                          </div>
                        </div>
                        <div className="bg-secondary/30 rounded-xl min-h-[300px] border border-border/40 relative overflow-hidden" role="img" aria-label="Visualización 3D de la arquitectura del proyecto">
                          <Canvas camera={{ position: [0, 0, 10], fov: 40 }} aria-hidden="true">
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} intensity={1} color="#4ade80" />
                            <PostProcessing />
                            <ExplodedStack progress={1} project={selectedProject} />
                          </Canvas>
                          <div className="absolute bottom-4 right-4 text-[10px] font-mono text-primary/60 uppercase tracking-widest pointer-events-none">
                            Live Stack Rendering
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="technical"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <ArchitectureBlueprint project={selectedProject} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}