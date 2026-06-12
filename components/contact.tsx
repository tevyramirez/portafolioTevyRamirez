"use client"

import Link from "next/link"
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { sectionVariants, cardVariants, viewport, duration, ease } from "@/lib/motion"

const contactLinks = [
  {
    name: "Email",
    value: "seba.ram24@gmail.com",
    href: "mailto:seba.ram24@gmail.com",
    icon: Mail,
  },
  {
    name: "GitHub",
    value: "github.com/tevyramirez",
    href: "https://github.com/tevyramirez",
    icon: Github,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/sebastian-ramirez-ramirez-b831b0244",
    href: "https://www.linkedin.com/in/sebastian-ramirez-ramirez-b831b0244/",
    icon: Linkedin,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-card/40 noise-bg">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Section Number */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionVariants.header}
        >
          <motion.div
            className="flex-1 h-px bg-border/40 max-w-16"
            initial={{ scaleX: 0, originX: 1 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: duration.slow, delay: 0.1, ease: ease.out }}
          />
          <span className="text-primary font-mono text-sm">05.</span>
          <motion.div
            className="flex-1 h-px bg-border/40 max-w-16"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: duration.slow, delay: 0.1, ease: ease.out }}
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionVariants.content}
          transition={{ delay: 0.15 }}
        >
          Hablemos
        </motion.h2>

        {/* Description */}
        <motion.p
        className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={sectionVariants.content}
        transition={{ delay: 0.2 }}
        >
        ¿Tienes un desafío técnico o una idea que quieras convertir en realidad? 
        Ya sea que necesites una arquitectura robusta o una web que destaque, 
        estoy aquí para construirlo contigo. Hablemos.
        </motion.p>

        {/* Contact Cards */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {contactLinks.map((link) => (
            <motion.div
              key={link.name}
              variants={cardVariants.entrance}
            >
              <Link
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 px-6 py-4 bg-secondary/25 backdrop-blur-sm rounded-xl border border-border/20 transition-all duration-200 hover:bg-secondary/40 hover:border-border/40 w-full sm:w-auto active:scale-[0.98]"
              >
                <link.icon className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {link.name}
                  </p>
                  <p className="text-sm text-foreground font-medium">{link.value}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground ml-auto transition-all duration-200 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="pt-12 border-t border-border/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: duration.slow, delay: 0.5, ease: ease.out }}
        >
          <p className="text-muted-foreground text-sm">
            Diseñado y desarrollado con{" "}
            <span className="text-foreground">Next.js</span>,{" "}
            <span className="text-foreground">TypeScript</span> y{" "}
            <span className="text-foreground">Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
