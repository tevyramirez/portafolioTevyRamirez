"use client"

import { motion } from "framer-motion"

interface ArchitectureBlueprintProps {
  project: {
    title: string
    technologies: string[]
    decisions: string[]
  }
}

export function ArchitectureBlueprint({ project }: ArchitectureBlueprintProps) {
  return (
    <div className="space-y-8 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Simplified ER/Flow Diagram Placeholder */}
        <div className="bg-background/50 rounded-lg p-6 border border-primary/20 aspect-video flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)]" />
          <svg className="w-full h-full text-primary/40" viewBox="0 0 400 200">
            {/* Database Node */}
            <rect x="160" y="140" width="80" height="40" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
            <text x="200" y="165" textAnchor="middle" fill="currentColor" fontSize="10" className="font-mono">DB</text>
            
            {/* API Node */}
            <rect x="160" y="80" width="80" height="40" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
            <text x="200" y="105" textAnchor="middle" fill="currentColor" fontSize="10" className="font-mono">API</text>
            
            {/* UI Node */}
            <rect x="160" y="20" width="80" height="40" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
            <text x="200" y="45" textAnchor="middle" fill="currentColor" fontSize="10" className="font-mono">UI</text>
            
            {/* Connections */}
            <path d="M200 60 L200 80 M200 120 L200 140" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
          <div className="absolute top-4 right-4 text-[10px] font-mono text-primary/60 uppercase tracking-widest">
            Architecture Blueprint v1.0
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-3">Core Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded border border-primary/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-3">Architectural Decisions</h4>
            <ul className="space-y-3">
              {project.decisions.map((decision, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-mono">
                  <span className="text-primary mt-1">▸</span>
                  {decision}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
