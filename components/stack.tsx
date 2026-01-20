"use client"

import { motion } from "framer-motion"
import { sectionVariants, viewport, duration, ease } from "@/lib/motion"

const stackCategories = [
  {
    title: "Frontend",
    items: [
      { name: "Vue 3", description: "Composition API, Pinia, Vue Router" },
      { name: "React", description: "Hooks, Context, Next.js" },
      { name: "TypeScript", description: "Types, Generics, Utility Types" },
      { name: "JavaScript", description: "ES6+, DOM, APIs" },
      { name: "HTML5 / CSS3", description: "Responsive, Flexbox, Grid" },
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      { name: "Node.js / Express", description: "REST APIs, Middleware" },
      { name: "Python / Django", description: "Django REST Framework" },
      { name: "PostgreSQL", description: "Queries, Migrations, Índices" },
      { name: "Oracle SQL", description: "PL/SQL, Procedures" },
      { name: "MongoDB", description: "Aggregations, Indexing" },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      { name: "Docker", description: "Compose, Multi-stage builds" },
      { name: "CI/CD (Jenkins)", description: "Pipelines, Deploys automatizados" },
      { name: "Linux", description: "Debian, Administración de servidores" },
      { name: "GCP", description: "Compute Engine, Cloud Storage" },
      { name: "Oracle Cloud", description: "Instancias, Networking" },
    ],
  },
]



const itemVariants = {
  hidden: { opacity: 0, x: -6 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration.base,
      ease: ease.out,
    },
  },
}

export function Stack() {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionVariants.header}
        >
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">Stack tecnológico</h2>
          <motion.div
            className="flex-1 h-px bg-border/40"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: duration.slow, delay: 0.2, ease: ease.out }}
          />
        </motion.div>

        {/* Stack Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {stackCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={sectionVariants.content}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-foreground border-b border-border/40 pb-3">
                {category.title}
              </h3>

              <motion.div
                className="space-y-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: categoryIndex * 0.1 + 0.2,
                    },
                  },
                }}
              >
                {category.items.map((item) => (
                  <motion.div
                    key={item.name}
                    className="group p-3 -mx-3 rounded-lg cursor-default transition-colors duration-200 hover:bg-secondary/20"
                    variants={itemVariants}
                  >
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-foreground font-medium transition-colors duration-200 group-hover:text-primary">
                        {item.name}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
