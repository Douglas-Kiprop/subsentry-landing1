"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  alpha: number
  decreasing: boolean
}

interface ParticleBackgroundProps {
  particleCount?: number
  particleColors?: string[]
  interactive?: boolean
}

export default function ParticleBackground({
  particleCount = 50,
  particleColors = ["#00AAFF", "#00FF88", "#AA00FF"],
  interactive = true,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          alpha: Math.random() * 0.5 + 0.1,
          decreasing: Math.random() > 0.5,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle, index) => {
        // Update alpha
        if (particle.decreasing) {
          particle.alpha -= 0.005
          if (particle.alpha <= 0.1) {
            particle.decreasing = false
          }
        } else {
          particle.alpha += 0.005
          if (particle.alpha >= 0.6) {
            particle.decreasing = true
          }
        }

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }

        // Interactive behavior
        if (interactive) {
          const dx = mouseRef.current.x - particle.x
          const dy = mouseRef.current.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const angle = Math.atan2(dy, dx)
            const force = (100 - distance) / 1500

            particle.speedX -= Math.cos(angle) * force
            particle.speedY -= Math.sin(angle) * force
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle =
          particle.color +
          Math.floor(particle.alpha * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    handleResize()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [particleCount, particleColors, interactive])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
