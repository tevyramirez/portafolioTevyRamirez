interface ProjectSleeveProps {
  projectId: string
}

export function ProjectSleeve({ projectId }: ProjectSleeveProps) {
  switch (projectId) {
    case 'avisodecobro':
      return <SleeveAvisodecobro />
    case 'datametrik':
      return <SleeveDatametrik />
    case 'beny-blues':
      return <SleeveBenyBlues />
    case 'guitartab':
      return <SleeveGuitarTab />
    default:
      return <SleeveArchive projectId={projectId} />
  }
}

function SleeveAvisodecobro() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect x="8" y="8" width="224" height="100" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="64" y1="8" x2="64" y2="108" stroke="currentColor" strokeWidth="1.5" />
      <line x1="120" y1="8" x2="120" y2="108" stroke="currentColor" strokeWidth="1.5" />
      <line x1="176" y1="8" x2="176" y2="108" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="41.3" x2="232" y2="41.3" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="74.6" x2="232" y2="74.6" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="10" width="52" height="29" fill="var(--color-accent)" />
      <rect x="122" y="43" width="52" height="29" fill="var(--color-secondary)" />
      <rect x="66" y="76" width="52" height="29" fill="var(--color-accent)" />
      <path d="M40 118 L40 138" stroke="var(--color-accent)" strokeWidth="2.5" />
      <path d="M120 118 L120 138" stroke="var(--color-accent)" strokeWidth="2.5" />
      <path d="M200 118 L200 138" stroke="var(--color-secondary)" strokeWidth="2.5" />
      <line x1="40" y1="138" x2="200" y2="138" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
      <polygon points="200,134 210,138 200,142" fill="currentColor" />
    </svg>
  )
}

function SleeveDatametrik() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect x="15" y="70" width="40" height="50" fill="var(--color-accent)" />
      <rect x="70" y="40" width="40" height="80" fill="currentColor" opacity="0.3" />
      <rect x="125" y="55" width="40" height="65" fill="var(--color-secondary)" />
      <rect x="180" y="25" width="40" height="95" fill="var(--color-accent)" />
      <circle cx="35" cy="20" r="5" fill="currentColor" />
      <circle cx="90" cy="20" r="5" fill="var(--color-accent)" />
      <circle cx="145" cy="20" r="5" fill="currentColor" />
      <circle cx="200" cy="20" r="5" fill="var(--color-secondary)" />
      <line x1="35" y1="20" x2="90" y2="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="90" y1="20" x2="145" y2="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="145" y1="20" x2="200" y2="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
    </svg>
  )
}

function SleeveBenyBlues() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <path d="M0 100 C 30 60, 50 120, 80 80 S 130 120, 160 70 S 200 110, 240 80" fill="none" stroke="var(--color-accent)" strokeWidth="3" opacity="0.9" />
      <path d="M0 120 C 40 90, 60 140, 100 100 S 150 130, 180 90 S 210 120, 240 100" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <path d="M0 80 C 20 50, 40 90, 70 60 S 110 100, 140 50 S 180 90, 240 60" fill="none" stroke="var(--color-secondary)" strokeWidth="2" opacity="0.6" />
      {[20, 50, 80, 110, 140, 170, 200, 230].map((x) => (
        <line key={x} x1={x} y1={10} x2={x} y2={150} stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      ))}
    </svg>
  )
}

function SleeveGuitarTab() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <path d="M0 30 Q 30 10, 60 30 T 120 30 T 180 30 T 240 30" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" />
      {[50, 60, 70, 80, 90, 100].map((y, i) => (
        <line key={i} x1={15} y1={y} x2={225} y2={y} stroke="currentColor" strokeWidth="1.5" opacity={i === 0 ? 0.5 : 0.25} />
      ))}
      <text x="30" y="55" fontSize="10" fontWeight="bold" fill="var(--color-accent)" fontFamily="monospace">0</text>
      <text x="45" y="55" fontSize="10" fontWeight="bold" fill="var(--color-accent)" fontFamily="monospace">3</text>
      <text x="60" y="55" fontSize="10" fontWeight="bold" fill="var(--color-accent)" fontFamily="monospace">5</text>
      <text x="90" y="65" fontSize="10" fontWeight="bold" fill="var(--color-secondary)" fontFamily="monospace">0</text>
      <text x="105" y="65" fontSize="10" fontWeight="bold" fill="var(--color-secondary)" fontFamily="monospace">3</text>
      <text x="120" y="65" fontSize="10" fontWeight="bold" fill="var(--color-secondary)" fontFamily="monospace">5</text>
      <rect x="20" y="118" width="55" height="24" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="31" y="134" fontSize="8" fontWeight="bold" fill="currentColor" fontFamily="monospace">SEP</text>
      <line x1="79" y1="130" x2="90" y2="130" stroke="currentColor" strokeWidth="2" />
      <rect x="94" y="118" width="55" height="24" fill="var(--color-accent)" />
      <text x="103" y="134" fontSize="8" fontWeight="bold" fill="#000" fontFamily="monospace">TRANS</text>
      <line x1="153" y1="130" x2="164" y2="130" stroke="currentColor" strokeWidth="2" />
      <rect x="168" y="118" width="55" height="24" fill="var(--color-secondary)" />
      <text x="182" y="134" fontSize="8" fontWeight="bold" fill="#000" fontFamily="monospace">SYNTH</text>
    </svg>
  )
}

const archivePatterns: Record<string, string> = {
  asprotex: "AX",
  micasaya: "MC",
  "evaluador-docente": "ED",
  mondaca: "MN",
  proyectopetorca: "PP",
  "one-consultores": "OC",
  graba2: "G2",
}

function SleeveArchive({ projectId }: { projectId: string }) {
  const label = archivePatterns[projectId] || "•"
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect x="15" y="15" width="210" height="130" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="22" y="22" width="196" height="116" fill="none" stroke="var(--color-accent)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
      <text x="120" y="96" textAnchor="middle" fontSize="48" fontWeight="bold" fill="var(--color-accent)" fontFamily="monospace" opacity="0.8">
        {label}
      </text>
    </svg>
  )
}
