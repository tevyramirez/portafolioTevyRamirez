'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'

export default function HomeClient() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {showIntro ? (
        <motion.div
          key="intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg noise-bg"
        >
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 border-6 border-ink flex items-center justify-center shadow-brutal-lg">
              <div className="w-8 h-8 border-3 border-ink" />
            </div>
            <p className="font-display text-display-lg text-ink leading-none mb-2">TR</p>
            <p className="font-mono text-sm text-ink-50">Interactive Sound Architect</p>
            <div className="mt-6 flex justify-center">
              <div className="spinner-brutal" aria-label="Cargando" />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Header />
          <main id="main-content" tabIndex={-1} className="outline-none" aria-label="Contenido principal">
            <Hero />
            <Projects />
            <About />
            <Contact />
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
