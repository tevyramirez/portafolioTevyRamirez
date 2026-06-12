"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

const HOVER_SELECTOR = 'button, a, [role="button"], .interactive'

export function LensCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const mql = window.matchMedia("(pointer: fine) and (min-width: 768px)")
    const update = () => setEnabled(mql.matches)
    update()
    mql.addEventListener("change", update)
    return () => mql.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (!enabled) {
      document.body.style.cursor = ""
      return
    }

    document.body.style.cursor = "none"

    let rafId: number | null = null
    let lastX = 0
    let lastY = 0

    const handlePointerMove = (e: PointerEvent) => {
      lastX = e.clientX
      lastY = e.clientY
      if (rafId !== null) return
      rafId = requestAnimationFrame(() => {
        mouseX.set(lastX)
        mouseY.set(lastY)
        rafId = null
      })
    }

    const handlePointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null
      setIsHovered(!!target?.closest(HOVER_SELECTOR))
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    document.addEventListener("pointerover", handlePointerOver, { passive: true })

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      window.removeEventListener("pointermove", handlePointerMove)
      document.removeEventListener("pointerover", handlePointerOver)
      document.body.style.cursor = ""
    }
  }, [enabled, mouseX, mouseY])

  if (!enabled) return null

  return (
<motion.div
      className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-[9999] hidden md:block"
      aria-hidden="true"
      role="presentation"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        className="w-full h-full rounded-full border border-white/20 backdrop-blur-[6px] backdrop-saturate-150 relative overflow-hidden"
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
      </motion.div>
    </motion.div>
  )
}
