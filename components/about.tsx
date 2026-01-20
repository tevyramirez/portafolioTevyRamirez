"use client"

import { motion } from "framer-motion"
import { sectionVariants, viewport, duration, ease } from "@/lib/motion"

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionVariants.header}
        >
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">Sobre mí</h2>
          <motion.div 
            className="flex-1 h-px bg-border/40"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: duration.slow, delay: 0.2, ease: ease.out }}
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.15,
                },
              },
            }}
          >
            <motion.p
              className="text-muted-foreground leading-relaxed"
              variants={sectionVariants.content}
            >
              Desarrollador Fullstack con experiencia en aplicaciones web en producción,
              software a medida y plataformas tipo SaaS. He trabajado tanto en frontend
              como en backend, despliegues dockerizados, CI/CD y metodologías ágiles.
            </motion.p>

            <motion.p
              className="text-muted-foreground leading-relaxed"
              variants={sectionVariants.content}
            >
              Trabajo con <span className="text-foreground font-medium">Vue 3</span> y{" "}
              <span className="text-foreground font-medium">React</span> en el frontend,{" "}
              <span className="text-foreground font-medium">Node.js</span>,{" "}
              <span className="text-foreground font-medium">Express</span> y{" "}
              <span className="text-foreground font-medium">Django</span> en el backend,
              con bases de datos <span className="text-foreground font-medium">PostgreSQL</span>,{" "}
              <span className="text-foreground font-medium">Oracle</span> y{" "}
              <span className="text-foreground font-medium">MongoDB</span>.
            </motion.p>

            <motion.p
              className="text-muted-foreground leading-relaxed"
              variants={sectionVariants.content}
            >
              Me enfoco en construir software mantenible, claro y alineado a las
              necesidades del negocio. Colaboro con equipos técnicos y clientes
              para entregar soluciones que funcionen en producción.
            </motion.p>
          </motion.div>

          {/* Expertise List */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={sectionVariants.content}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
              Áreas de expertise
            </h3>
            <motion.ul 
              className="space-y-3"
              variants={sectionVariants.list}
            >
              {[
                "Aplicaciones SaaS",
                "Software a medida",
                "APIs REST",
                "DevOps & CI/CD",
                "Metodología SCRUM",
                "Despliegues Docker",
              ].map((skill, index) => (
                <motion.li
                  key={skill}
                  className="flex items-center gap-3 text-muted-foreground text-sm group cursor-default"
                  variants={sectionVariants.listItem}
                  custom={index}
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full transition-transform duration-200 group-hover:scale-150" />
                  <span className="transition-colors duration-200 group-hover:text-foreground">
                    {skill}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
