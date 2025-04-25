"use client"

import type React from "react"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import InteractiveElement from "./interactive-element"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  interactive?: boolean
  emitParticles?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", interactive = true, emitParticles = true, children, ...props },
    ref,
  ) => {
    const baseStyles = cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50",
      {
        "bg-primary text-primary-foreground hover:bg-primary/90": variant === "primary",
        "bg-secondary text-secondary-foreground hover:bg-secondary/90": variant === "secondary",
        "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground": variant === "outline",
        "bg-transparent text-foreground hover:bg-muted": variant === "ghost",
        "h-9 px-3 text-sm": size === "sm",
        "h-10 px-4 py-2": size === "md",
        "h-11 px-8 text-lg": size === "lg",
      },
      className,
    )

    const glowColor = variant === "primary" ? "primary" : variant === "secondary" ? "secondary" : "accent"

    if (!interactive) {
      return (
        <button className={baseStyles} ref={ref} {...props}>
          {children}
        </button>
      )
    }

    return (
      <InteractiveElement glowColor={glowColor} emitParticles={emitParticles} className={baseStyles}>
        <motion.button ref={ref} className="w-full h-full" whileTap={{ scale: 0.97 }} {...props}>
          {children}
        </motion.button>
      </InteractiveElement>
    )
  },
)

Button.displayName = "Button"

export { Button }
