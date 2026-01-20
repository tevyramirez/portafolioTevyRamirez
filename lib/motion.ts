/**
 * Motion Philosophy:
 * 1. GRAVITY - Every element has weight. Movement respects physics.
 * 2. BREATH - The interface breathes. Elements emerge, never pop.
 * 3. SILENCE - Motion supports content. When in doubt, don't animate.
 *
 * Emotions: confidence, focus, precision, calm, silent power.
 */

// ═══════════════════════════════════════════════════════════════════════════
// DURATION TOKENS
// ═══════════════════════════════════════════════════════════════════════════
export const duration = {
  instant: 0.1,    // Micro-feedback only
  fast: 0.2,       // Hover states, micro-interactions
  base: 0.4,       // Standard transitions
  slow: 0.6,       // Entrances, reveals
  cinematic: 0.8,  // Hero, major reveals
} as const

// ═══════════════════════════════════════════════════════════════════════════
// EASING TOKENS (cubic-bezier)
// ═══════════════════════════════════════════════════════════════════════════
export const ease = {
  // Apple signature - smooth deceleration, no bounce
  out: [0.16, 1, 0.3, 1] as const,
  
  // Subtle entrance - barely perceptible acceleration
  in: [0.4, 0, 1, 1] as const,
  
  // Balanced - for reversible transitions
  inOut: [0.4, 0, 0.2, 1] as const,
  
  // Editorial - dramatic slow start, confident finish
  editorial: [0.22, 1, 0.36, 1] as const,
  
  // Precision - linear with soft ends (data, technical)
  precision: [0.25, 0.1, 0.25, 1] as const,
} as const

// ═══════════════════════════════════════════════════════════════════════════
// SPRING PRESETS
// ═══════════════════════════════════════════════════════════════════════════
export const spring = {
  // Snappy - buttons, indicators (no overshoot)
  snappy: { stiffness: 400, damping: 30, mass: 1 },
  
  // Smooth - general purpose
  smooth: { stiffness: 300, damping: 30, mass: 1 },
  
  // Heavy - cards, large elements (feels weighted)
  heavy: { stiffness: 200, damping: 30, mass: 1.2 },
  
  // Gentle - background elements
  gentle: { stiffness: 150, damping: 25, mass: 1 },
} as const

// ═══════════════════════════════════════════════════════════════════════════
// TRANSFORM VALUES (kept minimal for elegance)
// ═══════════════════════════════════════════════════════════════════════════
export const transform = {
  y: {
    micro: 4,      // Barely visible lift
    small: 8,      // Standard entrance
    medium: 16,    // Emphasized entrance
    large: 24,     // Hero elements
  },
  scale: {
    subtle: 0.98,  // Press state
    card: 0.985,   // Card hover
    entrance: 0.96 // Entrance scale
  },
  blur: {
    subtle: 4,
    medium: 8,
    heavy: 12,
  }
} as const

// ═══════════════════════════════════════════════════════════════════════════
// HERO VARIANTS - Cinematic entrance sequence
// ═══════════════════════════════════════════════════════════════════════════
export const heroVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  },
  // Label appears first - anchor point
  label: {
    hidden: { 
      opacity: 0, 
      y: transform.y.small,
      filter: `blur(${transform.blur.subtle}px)`,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: duration.cinematic,
        ease: ease.editorial,
      },
    },
  },
  // Name - the hero, leads the scene
  name: {
    hidden: { 
      opacity: 0, 
      y: transform.y.large,
      filter: `blur(${transform.blur.medium}px)`,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: duration.cinematic,
        ease: ease.editorial,
      },
    },
  },
  // Description - follows name
  description: {
    hidden: { 
      opacity: 0, 
      y: transform.y.medium,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: duration.slow,
        ease: ease.out,
      },
    },
  },
  // CTAs - final reveal
  cta: {
    hidden: { 
      opacity: 0, 
      y: transform.y.small,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: duration.base,
        ease: ease.out,
      },
    },
  },
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION VARIANTS - Scroll-triggered, anchored feel
// ═══════════════════════════════════════════════════════════════════════════
export const sectionVariants = {
  // Header with line - establishes section
  header: {
    hidden: { 
      opacity: 0, 
      x: -12,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: duration.slow,
        ease: ease.out,
      },
    },
  },
  // Content blocks - subtle vertical rise
  content: {
    hidden: { 
      opacity: 0, 
      y: transform.y.medium,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: duration.slow,
        ease: ease.out,
      },
    },
  },
  // Staggered list items
  list: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  },
  listItem: {
    hidden: { 
      opacity: 0, 
      x: -8,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: duration.base,
        ease: ease.out,
      },
    },
  },
}

// ═══════════════════════════════════════════════════════════════════════════
// CARD VARIANTS - Weight and physicality
// ═══════════════════════════════════════════════════════════════════════════
export const cardVariants = {
  // Entrance - feels like settling into place
  entrance: {
    hidden: { 
      opacity: 0, 
      y: transform.y.medium,
      scale: transform.scale.entrance,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: duration.slow,
        ease: ease.out,
      },
    },
  },
  // Hover - subtle lift, implies interactivity
  hover: {
    y: -2,
    transition: {
      duration: duration.fast,
      ease: ease.out,
    },
  },
  // Tap - physical press
  tap: {
    scale: transform.scale.subtle,
    transition: {
      duration: duration.instant,
      ease: ease.out,
    },
  },
}

// ═══════════════════════════════════════════════════════════════════════════
// BADGE VARIANTS - Tech tags, pills
// ═══════════════════════════════════════════════════════════════════════════
export const badgeVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: duration.base,
      ease: ease.out,
    },
  },
}

// ═══════════════════════════════════════════════════════════════════════════
// VIEWPORT CONFIG - Consistent trigger points
// ═══════════════════════════════════════════════════════════════════════════
export const viewport = {
  once: true,
  margin: "-80px",  // Trigger slightly before fully in view
} as const

export const viewportEarly = {
  once: true,
  margin: "-120px",
} as const
