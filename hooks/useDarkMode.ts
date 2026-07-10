'use client'

import { useEffect, useState, useCallback } from 'react'
import { useAudioInteraction } from './useAudioInteraction'

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false)
  const { playHover } = useAudioInteraction()

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = stored === 'dark' || (!stored && prefersDark)
    setIsDark(dark)
    if (dark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggle = useCallback(() => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', next ? 'dark' : 'light')
    playHover(660)
  }, [isDark, playHover])

  return { isDark, toggle }
}
