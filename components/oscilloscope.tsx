'use client'

import { useEffect, useRef, useCallback } from 'react'

interface OscilloscopeProps {
  className?: string
}

export function Oscilloscope({ className }: OscilloscopeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const animRef = useRef<number>(0)

  const initAudio = useCallback(() => {
    if (audioCtxRef.current) return audioCtxRef.current
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    const ctx = new AudioCtx()
    audioCtxRef.current = ctx
    return ctx
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const parent = canvas.parentElement
    if (!parent) return

    const resize = () => {
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const ctx2d = canvas.getContext('2d')
    if (!ctx2d) return

    let mouseX = 0.5
    let mouseY = 0.5
    let osc: OscillatorNode | null = null
    let gain: GainNode | null = null
    let analyser: AnalyserNode | null = null
    const dataArray = new Uint8Array(128)

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = (e.clientX - rect.left) / rect.width
      mouseY = (e.clientY - rect.top) / rect.height

      if (osc && gain && audioCtxRef.current) {
        try {
          osc.frequency.setValueAtTime(200 + mouseX * 800, audioCtxRef.current.currentTime)
          gain.gain.setValueAtTime(0.01 + (1 - mouseY) * 0.08, audioCtxRef.current.currentTime)
        } catch {
          // context might be closed
        }
      }
    })

    const startAudio = () => {
      try {
        const audioCtx = initAudio()
        if (audioCtx.state === 'suspended') audioCtx.resume()
        osc = audioCtx.createOscillator()
        gain = audioCtx.createGain()
        analyser = audioCtx.createAnalyser()
        analyser.fftSize = 256
        osc.type = 'sine'
        osc.frequency.value = 440
        gain.gain.value = 0
        osc.connect(gain)
        gain.connect(analyser)
        analyser.connect(audioCtx.destination)
        osc.start()
      } catch {
        // audio not available
      }
    }

    const draw = () => {
      animRef.current = requestAnimationFrame(draw)
      const w = canvas.width
      const h = canvas.height

      ctx2d.fillStyle = '#FFFDD0'
      ctx2d.fillRect(0, 0, w, h)

      if (analyser) {
        analyser.getByteTimeDomainData(dataArray)
        ctx2d.lineWidth = 3
        ctx2d.strokeStyle = '#000000'
        ctx2d.beginPath()
        const sliceWidth = w / dataArray.length
        let x = 0
        for (let i = 0; i < dataArray.length; i++) {
          const v = (dataArray[i] ?? 128) / 128.0
          const y = (v * h) / 2
          if (i === 0) ctx2d.moveTo(x, y)
          else ctx2d.lineTo(x, y)
          x += sliceWidth
        }
        ctx2d.lineTo(w, h / 2)
        ctx2d.stroke()
      } else {
        ctx2d.strokeStyle = '#000000'
        ctx2d.lineWidth = 1
        ctx2d.setLineDash([4, 4])
        ctx2d.beginPath()
        ctx2d.moveTo(0, h / 2)
        ctx2d.lineTo(w, h / 2)
        ctx2d.stroke()
        ctx2d.setLineDash([])
      }
    }

    const handleInteraction = () => {
      startAudio()
      draw()
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
    }

    document.addEventListener('click', handleInteraction)
    document.addEventListener('touchstart', handleInteraction)

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
      cancelAnimationFrame(animRef.current)
      if (osc) {
        try { osc.stop() } catch { /* already stopped */ }
        try { osc.disconnect() } catch { /* already disconnected */ }
      }
      if (gain) {
        try { gain.disconnect() } catch { /* already disconnected */ }
      }
      if (analyser) {
        try { analyser.disconnect() } catch { /* already disconnected */ }
      }
      if (audioCtxRef.current) {
        try { audioCtxRef.current.close() } catch { /* already closed */ }
        audioCtxRef.current = null
      }
    }
  }, [initAudio])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-label="Osciloscopio interactivo"
      role="img"
    />
  )
}
