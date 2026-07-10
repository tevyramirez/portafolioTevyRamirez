'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import { CardVinyl } from '@/components/ui/card-vinyl'
import { Badge } from '@/components/ui/badge'
import { ProjectSleeve } from '@/components/project-sleeve'
import { projects, type Project } from '@/data/projects'
import { useAudioInteraction } from '@/hooks/useAudioInteraction'

const easeBrutal: [number, number, number, number] = [0.2, 0, 0, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeBrutal } },
}

const featured = projects.filter((p) => p.featured)
const archive = projects.filter((p) => !p.featured)

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const { playClick, playHover } = useAudioInteraction()

  const handleOpen = useCallback((project: Project) => {
    setSelectedProject(project)
    playClick(440)
  }, [playClick])

  const handleClose = useCallback(() => {
    setSelectedProject(null)
    playHover(294)
  }, [playHover])

  useEffect(() => {
    if (!selectedProject) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
        return
      }
      if (e.key === 'Tab' && modalRef.current) {
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

    document.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedProject, handleClose])

  return (
    <section id="projects" className="py-24 md:py-32 px-5 md:px-10 relative">
      <div className="max-w-container mx-auto">
        {/* Featured header */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <span className="font-mono text-sm font-bold text-secondary">01.</span>
          <h2 className="font-display text-display-lg text-ink leading-none">Discografía Destacada</h2>
          <div className="flex-1 h-0.5 bg-ink-20" />
        </motion.div>

        {/* Featured grid — 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <AnimatePresence>
            {featured.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.2, 0, 0, 1] }}
                className={i === 0 ? 'md:row-span-1' : ''}
              >
                <CardVinyl
                  title={project.title}
                  tech={project.technologies}
                  trackNumber={i + 1}
                  sector={project.sector}
                  featured
                  onClick={() => handleOpen(project)}
                >
                  <ProjectSleeve projectId={project.id} />
                </CardVinyl>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Archive divider */}
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <div className="h-0.5 bg-ink-20 flex-1" />
          <span className="font-mono text-xs font-bold text-ink-40 uppercase tracking-widest">B-Sides / Archivo</span>
          <div className="h-0.5 bg-ink-20 flex-1" />
        </motion.div>

        {/* Archive grid — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {archive.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.2, 0, 0, 1] }}
              >
                <CardVinyl
                  title={project.title}
                  tech={project.technologies}
                  trackNumber={featured.length + i + 1}
                  sector={project.sector}
                  onClick={() => handleOpen(project)}
                >
                  <ProjectSleeve projectId={project.id} />
                </CardVinyl>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-ink-70 z-modal cursor-zoom-out"
              aria-hidden="true"
            />
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label={`Detalles de ${selectedProject.title}`}
              className="fixed inset-4 md:inset-10 lg:inset-20 z-modal bg-bg border-6 border-ink shadow-brutal-2xl flex flex-col overflow-hidden"
            >
              <div className="p-6 border-b-3 border-ink flex justify-between items-start bg-accent">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <Badge variant="default">{selectedProject.company}</Badge>
                    <span className="w-1 h-1 bg-ink-40" />
                    <span className="font-mono text-xs text-ink-50">{selectedProject.year}</span>
                  </div>
                  <h3 className="font-display text-display-md text-ink">{selectedProject.title}</h3>
                </div>
                <button
                  ref={closeButtonRef}
                  onClick={handleClose}
                  onMouseEnter={() => playHover(294)}
                  className="w-12 h-12 flex items-center justify-center bg-bg border-3 border-ink text-ink hover:bg-ink hover:text-bg transition-colors flex-shrink-0"
                  aria-label="Cerrar detalles del proyecto"
                >
                  <X className="w-5 h-5" strokeWidth={3} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-ui font-semibold text-xs uppercase tracking-widest text-secondary mb-2">Diagnóstico</h4>
                      <p className="font-body text-base text-ink-70 leading-relaxed">{selectedProject.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-ui font-semibold text-xs uppercase tracking-widest text-secondary mb-2">Solución</h4>
                      <p className="font-body text-base text-ink-70 leading-relaxed">{selectedProject.solution}</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-ui font-semibold text-xs uppercase tracking-widest text-secondary mb-3">Stack Tecnológico</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="accent">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-ui font-semibold text-xs uppercase tracking-widest text-secondary mb-3">Decisiones Técnicas</h4>
                      <ul className="space-y-2">
                        {selectedProject.decisions.map((decision, i) => (
                          <li key={i} className="flex items-start gap-2 font-body text-sm text-ink-70">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-secondary flex-shrink-0" />
                            {decision}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {selectedProject.url && (
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => playHover(440)}
                        className="inline-flex items-center gap-2 font-ui font-semibold text-sm text-ink border-3 border-ink px-5 py-3 bg-accent shadow-brutal-sm hover:shadow-brutal transition-shadow no-underline"
                      >
                        <ExternalLink className="w-4 h-4" strokeWidth={3} />
                        Visitar sitio
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
