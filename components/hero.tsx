'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Oscilloscope } from '@/components/oscilloscope'
import { useAudioInteraction } from '@/hooks/useAudioInteraction'
import { useCallback, useRef } from 'react'

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const easeBrutal: [number, number, number, number] = [0.2, 0, 0, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeBrutal },
  },
}

const fadeUpDelay = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeBrutal, delay: 0.6 },
  },
}

export function Hero() {
  const { playClick } = useAudioInteraction()
  const hoverThrottle = useRef(false)

  const throttledHover = useCallback(() => {
    if (hoverThrottle.current) return
    hoverThrottle.current = true
    setTimeout(() => { hoverThrottle.current = false }, 80)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-container mx-auto px-5 md:px-10 w-full">
        <motion.div
          className="grid grid-cols-12 gap-5"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Tagline asimétrico */}
          <div className="col-span-12 md:col-span-10 lg:col-span-8 md:col-start-2">
            <motion.p
              variants={fadeUp}
              className="font-ui font-semibold text-sm uppercase tracking-widest text-ink-50 mb-4"
            >
              Interactive Sound Architect
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display font-black leading-[0.85] tracking-tighter text-ink"
              style={{ fontSize: 'clamp(3.5rem, 12vw, 10rem)' }}
            >
              Tevy
              <br />
              Ramírez
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-body text-lg md:text-xl text-ink-70 leading-relaxed max-w-xl mt-6"
            >
              I Code High-Performance Interfaces and Compose Soundscapes
            </motion.p>

            <motion.div variants={fadeUpDelay} className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="#projects"
                onClick={() => playClick()}
                onMouseEnter={throttledHover}
                className="inline-flex items-center justify-center gap-2 bg-accent text-ink border-3 border-ink px-8 py-4 font-ui font-semibold text-base no-underline shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm active:translate-x-1.5 active:translate-y-1.5 active:shadow-none transition-all duration-fast ease-brutal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="square">
                  <path d="M12 5v14M5 12h14" />
                </svg>
                Ver Proyectos
              </Link>
              <Link
                href="#contact"
                onClick={() => playClick(330)}
                onMouseEnter={throttledHover}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-ink border-3 border-ink px-8 py-4 font-ui font-semibold text-base no-underline shadow-brutal hover:bg-ink hover:text-bg hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm active:translate-x-1.5 active:translate-y-1.5 active:shadow-none transition-all duration-fast ease-brutal"
              >
                Contáctame
              </Link>
            </motion.div>
          </div>

          {/* Osciloscopio */}
          <motion.div
            variants={fadeUpDelay}
            className="col-span-12 md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8 mt-8 md:mt-0"
          >
            <div className="border-6 border-ink shadow-brutal-xl bg-bg">
              <Oscilloscope className="w-full h-48 md:h-64" />
            </div>
            <p className="font-mono text-xs text-ink-50 mt-2 uppercase tracking-wider text-right">
              Osciloscopio interactivo — mueve el mouse sobre el canvas
            </p>
          </motion.div>
        </motion.div>

        {/* Stack badges */}
        <motion.div
          className="mt-16 pt-8 border-t-3 border-ink-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2, ease: [0.2, 0, 0, 1] }}
        >
          <p className="font-ui font-semibold text-xs uppercase tracking-widest text-ink-50 mb-4">
            Stack Principal
          </p>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'Web Audio API', 'Three.js', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-4 py-2 bg-accent border-3 border-ink font-ui font-semibold text-xs uppercase tracking-wider text-ink shadow-brutal-sm transition-all duration-fast ease-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="font-mono text-xs text-ink-40 uppercase tracking-widest">Scroll</span>
          <div className="w-0.5 h-8 bg-ink relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-1/3 bg-accent"
              animate={{ y: ['-100%', '300%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: [0.2, 0, 0, 1] }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
