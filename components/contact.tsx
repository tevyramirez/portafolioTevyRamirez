'use client'

import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useAudioInteraction } from '@/hooks/useAudioInteraction'
import { Button } from '@/components/ui/button'

const easeBrutal: [number, number, number, number] = [0.2, 0, 0, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeBrutal } },
}

const contactLinks = [
  {
    name: 'Email',
    value: 'seba.ram24@gmail.com',
    href: 'mailto:seba.ram24@gmail.com',
  },
  {
    name: 'GitHub',
    value: 'github.com/tevyramirez',
    href: 'https://github.com/tevyramirez',
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/sebastian-ramirez',
    href: 'https://www.linkedin.com/in/sebastian-ramirez-ramirez-b831b0244/',
  },
]

export function Contact() {
  const { playHover, playSuccess, playError } = useAudioInteraction()
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)
  const hoverThrottle = useRef(false)

  const throttledHover = useCallback(() => {
    if (hoverThrottle.current) return
    playHover(440)
    hoverThrottle.current = true
    setTimeout(() => { hoverThrottle.current = false }, 80)
  }, [playHover])

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = (formData.get('name') as string)?.trim()
    const email = (formData.get('email') as string)?.trim()
    const message = (formData.get('message') as string)?.trim()

    const newErrors: Record<string, string> = {}

    if (!name) newErrors.name = 'Ingresa tu nombre.'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) newErrors.email = 'Ingresa un email válido.'
    if (!message) newErrors.message = 'Cuéntame sobre tu proyecto.'

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      playError()
      const firstField = Object.keys(newErrors)[0]
      const input = form.querySelector<HTMLElement>(`[name="${firstField}"]`)
      input?.focus()
      return
    }

    playSuccess()
    setSubmitted(true)
    form.reset()
  }, [playError, playSuccess])

  return (
    <section id="contact" className="py-24 md:py-32 px-5 md:px-10 relative">
      <div className="max-w-container mx-auto">
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <span className="font-mono text-sm font-bold text-secondary">03.</span>
          <h2 className="font-display text-display-lg text-ink leading-none">Contacto</h2>
          <div className="flex-1 h-0.5 bg-ink-20" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            {submitted ? (
              <div className="border-6 border-ink bg-accent p-8 shadow-brutal-lg text-center">
                <p className="font-display text-display-md text-ink mb-3">¡Mensaje enviado!</p>
                <p className="font-body text-base text-ink-70">
                  Te responderé pronto. Mientras tanto, revisa mis proyectos.
                </p>
              </div>
            ) : (
              <form ref={formRef} noValidate onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="field-name" className="block font-ui font-semibold text-sm text-ink mb-2">
                    Nombre <span className="text-error text-xs ml-1">obligatorio</span>
                  </label>
                  <input
                    type="text"
                    id="field-name"
                    name="name"
                    placeholder="Tu nombre"
                    onMouseEnter={throttledHover}
                    className={`w-full bg-bg text-ink border-6 border-ink font-body text-base px-4 py-3 placeholder:text-ink-40 focus:border-accent focus:outline-none focus:shadow-brutal-sm transition-all duration-fast ease-brutal ${errors.name ? 'border-error focus:border-error focus:shadow-[3px_3px_0px_0px_#C8302C]' : ''}`}
                    aria-required="true"
                    aria-describedby={errors.name ? 'error-name' : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p id="error-name" className="font-body text-sm text-error mt-1 pl-2 border-l-3 border-error" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="field-email" className="block font-ui font-semibold text-sm text-ink mb-2">
                    Email <span className="text-error text-xs ml-1">obligatorio</span>
                  </label>
                  <input
                    type="email"
                    id="field-email"
                    name="email"
                    placeholder="tu@email.com"
                    onMouseEnter={throttledHover}
                    className={`w-full bg-bg text-ink border-6 border-ink font-body text-base px-4 py-3 placeholder:text-ink-40 focus:border-accent focus:outline-none focus:shadow-brutal-sm transition-all duration-fast ease-brutal ${errors.email ? 'border-error focus:border-error focus:shadow-[3px_3px_0px_0px_#C8302C]' : ''}`}
                    aria-required="true"
                    aria-describedby={errors.email ? 'error-email' : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p id="error-email" className="font-body text-sm text-error mt-1 pl-2 border-l-3 border-error" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="field-message" className="block font-ui font-semibold text-sm text-ink mb-2">
                    Mensaje <span className="text-error text-xs ml-1">obligatorio</span>
                  </label>
                  <textarea
                    id="field-message"
                    name="message"
                    rows={5}
                    placeholder="Cuéntame sobre tu proyecto..."
                    onMouseEnter={throttledHover}
                    className={`w-full bg-bg text-ink border-6 border-ink font-body text-base px-4 py-3 placeholder:text-ink-40 focus:border-accent focus:outline-none focus:shadow-brutal-sm transition-all duration-fast ease-brutal resize-vertical ${errors.message ? 'border-error focus:border-error focus:shadow-[3px_3px_0px_0px_#C8302C]' : ''}`}
                    aria-required="true"
                    aria-describedby={errors.message ? 'error-message' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p id="error-message" className="font-body text-sm text-error mt-1 pl-2 border-l-3 border-error" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  onMouseEnter={() => playHover(440)}
                  className="w-full"
                >
                  Enviar Mensaje
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact links + info */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  onMouseEnter={() => playHover(330)}
                  className="flex items-center gap-4 p-5 border-3 border-ink bg-bg shadow-brutal-sm hover:shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-fast ease-brutal no-underline group"
                >
                  <div className="flex-1">
                    <p className="font-ui font-semibold text-xs uppercase tracking-widest text-ink-50">
                      {link.name}
                    </p>
                    <p className="font-body text-sm text-ink font-medium">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-ink-50 group-hover:text-ink transition-colors" strokeWidth={3} />
                </Link>
              ))}
            </div>

            <div className="border-3 border-ink p-6 shadow-brutal bg-accent mt-8">
              <p className="font-mono text-sm font-bold text-ink mb-2">Tarifa de Referencia</p>
              <p className="font-display text-display-md text-ink leading-none mb-2">25&ndash;45 UF</p>
              <p className="font-body text-sm text-ink-70">
                Proyectos web a medida. Presupuesto según alcance técnico y requerimientos. Desde landing pages hasta plataformas multi-tenant complejas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t-3 border-ink-20 max-w-container mx-auto px-5 md:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-sm text-ink-50 text-center md:text-left">
            &copy; {new Date().getFullYear()} Tevy Ramírez &mdash; CREATIVE DEVELOPER / SOUND ARCHITECT
          </p>
          <p className="font-mono text-sm text-ink-30 text-center">
            Hecho con código y sonido en Talca, Maule
          </p>
        </div>
      </footer>
    </section>
  )
}
