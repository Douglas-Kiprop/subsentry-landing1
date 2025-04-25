"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import GradientBackground from "@/components/ui/gradient-background"
import ParticleBackground from "@/components/ui/particle-background"
import { ArrowRight, Play } from "lucide-react"

const serviceLogos = [
  { name: "OpenRouter", color: "#00AAFF", tooltip: "OpenRouter: AI Credits" },
  { name: "Lens Protocol", color: "#00FF88", tooltip: "Lens Protocol: Social Content" },
  { name: "Mirror.xyz", color: "#AA00FF', tooltip:   tooltip: 'Lens Protocol: Social Content" },
  { name: "Mirror.xyz", color: "#AA00FF", tooltip: "Mirror.xyz: Exclusive Writings" },
  { name: "Gitcoin", color: "#FF8800", tooltip: "Gitcoin: Open Source Funding" },
]

export default function Hero() {
  const globeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const globe = globeRef.current
    if (!globe) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = globe.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const moveX = (e.clientX - centerX) / 20
      const moveY = (e.clientY - centerY) / 20

      globe.style.transform = `translate(${moveX}px, ${moveY}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      <GradientBackground />
      <ParticleBackground />

      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 glow-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              SubSentry: Your One-Stop Hub for Web3 Subscriptions
            </motion.h1>

            <motion.p
              className="text-xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Effortlessly manage subscriptions to Web3 services like OpenRouter, Lens Protocol, Mirror.xyz, and Gitcoin
              with USDC on the fast, low-cost Base blockchain. Powered by AI to save time and money.
            </motion.p>

            <motion.p
              className="text-lg mb-8 text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Tired of juggling Web3 subscriptions? SubSentry centralizes payments, automates renewals, and optimizes
              gas fees, all in one sleek platform.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg">
                Try SubSentry Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button variant="outline" size="lg">
                <Play className="mr-2 h-5 w-5" /> Watch Demo
              </Button>
            </motion.div>
          </div>

          <div className="relative">
            <div ref={globeRef} className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-black border border-gray-800 animate-pulse overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
              </div>

              {serviceLogos.map((logo, index) => {
                const angle = (index / serviceLogos.length) * Math.PI * 2
                const radius = 45
                const x = 50 + Math.cos(angle) * radius
                const y = 50 + Math.sin(angle) * radius

                return (
                  <motion.div
                    key={logo.name}
                    className="absolute w-16 h-16 rounded-full bg-black border-2 flex items-center justify-center cursor-pointer"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      borderColor: logo.color,
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                    }}
                    whileHover={{
                      scale: 1.2,
                      boxShadow: `0 0 15px ${logo.color}`,
                    }}
                  >
                    <span className="text-sm font-bold" style={{ color: logo.color }}>
                      {logo.name.split(".")[0]}
                    </span>

                    <motion.div
                      className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black border border-gray-800 rounded-md px-3 py-1 text-xs whitespace-nowrap"
                      initial={{ opacity: 0, y: -10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {logo.tooltip}
                    </motion.div>
                  </motion.div>
                )
              })}

              <motion.div
                className="absolute left-1/2 top-1/2 w-24 h-24 rounded-full bg-black border-2 border-primary flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
              >
                <span className="text-primary font-bold text-sm">SubSentry</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
