"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"

interface TiltCardProps {
  children: ReactNode
  className?: string
  glowColor?: "primary" | "secondary" | "accent"
  tiltAmount?: number
}

export default function TiltCard({ children, className = "", glowColor = "primary", tiltAmount = 10 }: TiltCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const tiltX = ((y - centerY) / centerY) * tiltAmount
    const tiltY = ((centerX - x) / centerX) * tiltAmount

    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const glowClasses = {
    primary: "glow-border",
    secondary: "glow-border-secondary",
    accent: "glow-border-accent",
  }

  return (
    <motion.div
      ref={cardRef}
      className={`tilt-card interactive-element ${className} ${isHovered ? glowClasses[glowColor] : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <div className="tilt-card-content relative z-10">{children}</div>
      <div className="tilt-card-shine" />
    </motion.div>
  )
}
