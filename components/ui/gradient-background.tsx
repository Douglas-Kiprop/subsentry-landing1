"use client"

import type React from "react"

import { useEffect, useRef } from "react"

export default function GradientBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100

      container.style.setProperty("--x", `${x}%`)
      container.style.setProperty("--y", `${y}%`)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 gradient-bg pointer-events-none z-0"
      style={{ "--x": "50%", "--y": "50%" } as React.CSSProperties}
    />
  )
}
