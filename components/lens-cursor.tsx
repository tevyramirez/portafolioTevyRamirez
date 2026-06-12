"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

const HOVER_SELECTOR = 'button, a, [role="button"], [tabindex]:not([tabindex="-1"]), .interactive'

export function LensCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [enabled, setEnabled] = useState(false)
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

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

    const checkTheme = () => {
      const section = document.elementFromPoint(lastX, lastY) as HTMLElement | null
      if (!section) return
      const bg = window.getComputedStyle(section).backgroundColor
      const brightness = parseBgBrightness(bg)
      setIsDark(brightness < 0.5)
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    document.addEventListener("pointerover", handlePointerOver, { passive: true })

    const themeInterval = setInterval(checkTheme, 250)

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      clearInterval(themeInterval)
      window.removeEventListener("pointermove", handlePointerMove)
      document.removeEventListener("pointerover", handlePointerOver)
      document.body.style.cursor = ""
    }
  }, [enabled, mouseX, mouseY])

  if (!enabled) return null

  return (
    <div
      aria-hidden="true"
      role="presentation"
      className="pointer-events-none fixed inset-0 z-[10000]"
    >
      <motion.div
        className="absolute"
        style={{ x, y, top: 0, left: 0 }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-16 h-16 rounded-full backdrop-blur-[6px] backdrop-saturate-150 relative overflow-hidden"
            animate={{
              scale: isHovered ? 1.5 : 1,
              backgroundColor: isHovered
                ? isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)"
                : "rgba(0, 0, 0, 0)",
              borderColor: isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)",
            }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            style={{ borderWidth: "1px", borderStyle: "solid" }}
          >
            <div
              className="absolute inset-0 opacity-50"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)"
                  : "linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 100%)",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full -translate-x-1/2 -translate-y-1/2"
              style={{ backgroundColor: isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

function parseBgBrightness(bg: string): number {
  const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
  if (!match) return 1
  const r = parseInt(match[1] ?? "255", 10)
  const g = parseInt(match[2] ?? "255", 10)
  const b = parseInt(match[3] ?? "255", 10)
  return (r * 0.299 + g * 0.587 + b * 0.114) / 255
}
