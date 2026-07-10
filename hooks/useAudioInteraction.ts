import { useRef, useCallback } from 'react'

export function useAudioInteraction() {
  const ctxRef = useRef<AudioContext | null>(null)

  const ensureContext = useCallback(() => {
    if (!ctxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      ctxRef.current = new AudioCtx()
    }
    if (ctxRef.current.state === 'suspended') {
      ctxRef.current.resume()
    }
    return ctxRef.current
  }, [])

  const playHover = useCallback((freq = 440) => {
    try {
      const ctx = ensureContext()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.value = freq
      gain.gain.setValueAtTime(0.08, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.15)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.15)
    } catch {
      // Audio not available
    }
  }, [ensureContext])

  const playClick = useCallback((freq = 220) => {
    try {
      const ctx = ensureContext()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'square'
      osc.frequency.setValueAtTime(freq, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, ctx.currentTime + 0.08)
      gain.gain.setValueAtTime(0.12, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.1)
    } catch {
      // Audio not available
    }
  }, [ensureContext])

  const playSuccess = useCallback(() => {
    try {
      const ctx = ensureContext()
      const notes = [261.63, 329.63, 392.00, 523.25]
      const duration = 0.8
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'triangle'
        osc.frequency.value = freq
        const startTime = ctx.currentTime + i * 0.08
        gain.gain.setValueAtTime(0, startTime)
        gain.gain.linearRampToValueAtTime(0.1, startTime + 0.02)
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start(startTime)
        osc.stop(startTime + duration)
      })
    } catch {
      // Audio not available
    }
  }, [ensureContext])

  const playError = useCallback(() => {
    try {
      const ctx = ensureContext()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(200, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2)
      gain.gain.setValueAtTime(0.1, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.25)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.25)
    } catch {
      // Audio not available
    }
  }, [ensureContext])

  return { playHover, playClick, playSuccess, playError }
}
