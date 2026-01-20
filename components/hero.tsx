"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { heroVariants, badgeVariants, duration, ease } from "@/lib/motion"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  
  // Subtle parallax on scroll - barely perceptible
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })
  
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 40])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      <motion.div 
        className="max-w-3xl mx-auto relative z-10"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={heroVariants.container}
        >
          {/* Label - appears first, anchor */}
          <motion.p
            className="text-primary font-mono text-sm tracking-wide"
            variants={heroVariants.label}
          >
            Desarrollador Fullstack / Analista Programador
          </motion.p>

          {/* Name - the hero of the page */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance tracking-tight"
            variants={heroVariants.name}
          >
            Sebastián Ramírez
          </motion.h1>

          {/* Description - supporting cast */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            variants={heroVariants.description}
          >
            Desarrollo aplicaciones web en producción, software a medida y plataformas SaaS.
            Trabajo en frontend, backend, despliegues dockerizados y CI/CD con enfoque en
            código mantenible y alineado a necesidades de negocio.
          </motion.p>

          {/* CTAs - final reveal */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            variants={heroVariants.cta}
          >
            <Link
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
            >
              Ver proyectos
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border/60 text-foreground font-medium rounded-lg transition-all duration-200 hover:bg-secondary/50 hover:border-border active:scale-[0.98]"
            >
              Contactar
            </Link>
          </motion.div>
        </motion.div>

        {/* Stack section - delayed reveal */}
        <motion.div
          className="mt-20 pt-12 border-t border-border/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: duration.cinematic, 
            delay: 0.9, 
            ease: ease.out 
          }}
        >
          <p className="text-sm text-muted-foreground mb-6 font-mono uppercase tracking-wider">
            Stack Principal
          </p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 1.0,
                },
              },
            }}
          >
            {["Vue 3", "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker"].map((tech) => (
              <motion.span
                key={tech}
                variants={badgeVariants}
                className="px-4 py-2 bg-secondary/50 text-secondary-foreground text-sm font-medium rounded-lg transition-colors duration-200 hover:bg-secondary"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
