"use client"

import { Building2 } from "lucide-react"
import { motion } from "framer-motion"
import { sectionVariants, cardVariants, badgeVariants, viewport, duration, ease } from "@/lib/motion"

const projects = [
  {
    title: "ONE Consultores - Software a Medida",
    company: "ONE Consultores",
    year: "2025",
    problem: "Empresas requerían soluciones de software personalizadas con ciclos de desarrollo ágiles y despliegues continuos.",
    solution: "Desarrollo de software a medida bajo metodología SCRUM, con implementación de pipelines CI/CD y arquitectura containerizada para entregas consistentes.",
    technologies: ["Vue 3", "TypeScript", "Python", "Express.js", "PostgreSQL", "Docker"],
    decisions: [
      "Metodología SCRUM para entregas iterativas y feedback continuo",
      "Contenedores Docker para ambientes reproducibles",
      "Despliegues continuos con Jenkins",
    ],
  },
  {
    title: "Avisodecobro - Plataforma SaaS",
    company: "Avisodecobro",
    year: "2024",
    problem: "Administradores de edificios necesitaban una plataforma centralizada para gestionar gastos comunes de forma eficiente.",
    solution: "Plataforma web tipo SaaS para administración de gastos comunes, con participación completa en frontend y backend.",
    technologies: ["React", "TypeScript", "Django", "PostgreSQL"],
    decisions: [
      "Arquitectura SaaS multi-tenant para escalabilidad",
      "API REST con Django REST Framework",
      "Interfaz responsive con React y TypeScript",
    ],
  },
  {
    title: "Graba2.cl - Aplicación Web",
    company: "Graba2.cl",
    year: "2023",
    problem: "Cliente necesitaba una aplicación web para gestionar pedidos de impresión de stickers personalizados para vidrios de autos.",
    solution: "Desarrollo de aplicación web completa con trabajo directo con cliente y liderazgo de equipo pequeño.",
    technologies: ["React", "Django", "SQL Server"],
    decisions: [
      "Comunicación directa con cliente para validar requerimientos",
      "Liderazgo técnico de equipo de desarrollo",
      "Stack React + Django para desarrollo fullstack eficiente",
    ],
  },
  {
    title: "DA5 - Dashboards y Visualización",
    company: "DA5",
    year: "2022-2024",
    problem: "Calmly.cl requería dashboards de visualización de datos con seguridad reforzada y múltiples integraciones.",
    solution: "Desarrollo de dashboards para visualización de datos, implementación de proxy inverso en Node.js para seguridad, y participación en PredictiveLab.",
    technologies: ["Node.js", "React", "WordPress", "Docker"],
    decisions: [
      "Proxy inverso en Node.js para capa de seguridad adicional",
      "Dashboards interactivos para visualización de métricas",
      "Migraciones y optimización de sitios WordPress",
    ],
  },
  {
    title: "Icono Marketing - Infraestructura Cloud",
    company: "Icono Marketing",
    year: "2022-2023",
    problem: "Necesidad de migrar y configurar servidores web en la nube con stack LAMP optimizado.",
    solution: "Levantamiento de servidores web, migración a Google Cloud Platform y configuración completa de stack Apache, PHP y MariaDB en Linux Debian.",
    technologies: ["Linux", "Apache", "PHP", "MariaDB", "GCP"],
    decisions: [
      "Migración a Google Cloud Platform para escalabilidad",
      "Configuración optimizada de Apache y PHP",
      "Administración de servidores Linux Debian",
    ],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-card/40 noise-bg">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionVariants.header}
        >
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">Proyectos destacados</h2>
          <motion.div
            className="flex-1 h-px bg-border/40"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: duration.slow, delay: 0.2, ease: ease.out }}
          />
        </motion.div>

        {/* Projects List */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants.entrance}
              transition={{ delay: index * 0.08 }}
            >
              <div className="space-y-6 p-6 -mx-6 rounded-xl transition-colors duration-300 hover:bg-secondary/15">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      <span className="text-primary font-mono text-xs">
                        {project.company} · {project.year}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Problem/Solution Block */}
                <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-6 space-y-5 border border-border/20">
                  <div>
                    <h4 className="text-xs font-mono text-primary mb-2 uppercase tracking-wider">
                      Problema
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-primary mb-2 uppercase tracking-wider">
                      Solución
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Technical Decisions */}
                <div>
                  <h4 className="text-xs font-mono text-primary mb-4 uppercase tracking-wider">
                    Decisiones técnicas
                  </h4>
                  <ul className="space-y-2.5">
                    {project.decisions.map((decision) => (
                      <li
                        key={decision}
                        className="flex items-start gap-3 text-muted-foreground text-sm group/item"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0 transition-transform duration-200 group-hover/item:scale-150" />
                        <span className="transition-colors duration-200 group-hover/item:text-foreground">
                          {decision}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <motion.div
                  className="flex flex-wrap gap-2 pt-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.03,
                        delayChildren: 0.1,
                      },
                    },
                  }}
                >
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={badgeVariants}
                      className="px-3 py-1.5 bg-secondary/40 text-secondary-foreground text-xs font-mono rounded-md transition-colors duration-200 hover:bg-secondary"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
