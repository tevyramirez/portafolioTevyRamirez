'use client'

import { motion } from 'framer-motion'
import { SkillPatch } from '@/components/ui/skill-patch'

const easeBrutal: [number, number, number, number] = [0.2, 0, 0, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeBrutal } },
}

const skills = [
  { name: 'React / Next.js', freq: 440 },
  { name: 'TypeScript', freq: 550 },
  { name: 'Web Audio API', freq: 660 },
  { name: 'Node.js', freq: 330 },
  { name: 'Python', freq: 392 },
  { name: 'PostgreSQL', freq: 294 },
  { name: 'Docker', freq: 523 },
  { name: 'Three.js / R3F', freq: 587 },
  { name: 'Tailwind CSS', freq: 494 },
  { name: 'Framer Motion', freq: 440 },
  { name: 'GSAP', freq: 554 },
  { name: 'Git / CI/CD', freq: 370 },
]

const creativeRoles = [
  'Composición musical para teatro independiente (Maule)',
  'Dirección de documental industrial "Putú: Relatos de un pueblo de hierro"',
  'Guitarrista en Capatosta Club (rock afrolatinoamericano)',
  'Guitarrista en Beny Blues (blues)',
  'Actuación teatral',
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-5 md:px-10 relative overflow-hidden">
      <div className="max-w-container mx-auto">
        <motion.div
          className="grid grid-cols-12 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {/* Header */}
          <div className="col-span-12 flex items-center gap-4 mb-8">
            <span className="font-mono text-sm font-bold text-secondary">02.</span>
            <h2 className="font-display text-display-lg text-ink leading-none">El Manifiesto Sónico</h2>
            <div className="flex-1 h-0.5 bg-ink-20" />
          </div>

          {/* Left: narrative */}
          <div className="col-span-12 md:col-span-5 md:col-start-1">
            <motion.div variants={fadeUp} className="space-y-5">
              <p className="font-body text-lg text-ink-70 leading-relaxed">
                Tevy Ramírez fusiona ingeniería de software con composición musical incidental para teatro independiente de la Región del Maule, dirección de documentales industriales, actuación teatral y guitarra en agrupaciones de rock afrolatinoamericano y blues.
              </p>
              <p className="font-body text-lg text-ink-70 leading-relaxed">
                El código se concibe como medio físico: interfaces donde el sonido y la visión se estructuran de forma síncrona, aportando una dimensión táctil y humana al software web.
              </p>

              <div className="border-3 border-ink p-5 bg-accent shadow-brutal mt-8">
                <p className="font-ui font-semibold text-sm uppercase tracking-wider mb-3 text-ink">
                  Artes en vivo
                </p>
                <ul className="space-y-2">
                  {creativeRoles.map((role) => (
                    <li key={role} className="flex items-start gap-2 font-body text-sm text-ink-70">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-ink flex-shrink-0" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right: skill patches + manifesto */}
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <motion.div variants={fadeUp} className="space-y-6">
              <p className="font-ui font-semibold text-sm uppercase tracking-widest text-ink-50">
                Stack Interactivo
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillPatch key={skill.name}>
                    {skill.name}
                  </SkillPatch>
                ))}
              </div>

              <div className="border-3 border-ink p-6 shadow-brutal bg-bg mt-6">
                <p className="font-mono text-sm font-bold text-secondary mb-4">
                  const tevy = {'{'}
                </p>
                <div className="space-y-2 font-mono text-sm text-ink-70">
                  <p>  role: &ldquo;Creative Front-End Developer &amp; Sound Architect&rdquo;,</p>
                  <p>  location: &ldquo;Talca, Maule, Chile&rdquo;,</p>
                  <p>  askMeAbout: [&ldquo;interactive audio design&rdquo;, &ldquo;neo-brutalist web&rdquo;],</p>
                  <p>  arts: [&ldquo;Música incidental teatro&rdquo;, &ldquo;Documental&rdquo;, &ldquo;Guitarra blues/rock&rdquo;]</p>
                </div>
                <p className="font-mono text-sm font-bold text-secondary mt-2">{'}'}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
