"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"

interface InteractiveElementProps {
  children: ReactNode
  className?: string
  glowColor?: "primary" | "secondary" | "accent"
  scale?: number
  emitParticles?: boolean
}

export default function InteractiveElement({
  children,
  className = "",
  glowColor = "primary",
  scale = 1.05,
  emitParticles = false,
}: InteractiveElementProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const elementRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const glowClasses = {
    primary: "glow-border",
    secondary: "glow-border-secondary",
    accent: "glow-border-accent",
  }

  return (
    <motion.div
      ref={elementRef}
      className={`interactive-element relative overflow-hidden ${className} ${isHovered ? glowClasses[glowColor] : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}

      {isHovered && emitParticles && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className={`w-8 h-8 rounded-full bg-${glowColor} mix-blend-screen`}
          />
        </div>
      )}

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--${glowColor === "primary" ? "primary" : glowColor === "secondary" ? "secondary" : "accent"}-rgb), 0.15), transparent 8rem)`
            : "none",
        }}
      />
    </motion.div>
  )
}
