"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import TiltCard from "@/components/ui/tilt-card"

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section ref={sectionRef} className="relative py-20 px-4 overflow-hidden">
      <div className="container max-w-6xl mx-auto z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 text-center glow-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          The Web3 Subscription Struggle is Real
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TiltCard className="bg-gradient-to-br from-red-900/20 to-red-700/10 border border-red-900/30 rounded-xl p-6 h-full">
              <h3 className="text-2xl font-bold mb-4 text-red-400">The Problem</h3>

              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <div className="absolute inset-0 flex flex-wrap gap-3 p-3 chaos-container">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-black border border-red-900/50 rounded-md p-2 text-xs text-red-400 flex items-center gap-2 chaos-item"
                      initial={{ x: 0, y: 0, rotate: 0 }}
                      whileHover={{
                        scale: 1.1,
                        zIndex: 10,
                        boxShadow: "0 0 15px rgba(255, 0, 0, 0.3)",
                      }}
                      animate={
                        isInView
                          ? {
                              x: Math.random() * 30 - 15,
                              y: Math.random() * 30 - 15,
                              rotate: Math.random() * 20 - 10,
                              transition: {
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                                duration: 3 + Math.random() * 2,
                              },
                            }
                          : {}
                      }
                    >
                      {i % 4 === 0 && "High Gas Fee!"}
                      {i % 4 === 1 && "Renewal Failed!"}
                      {i % 4 === 2 && "Wrong Wallet!"}
                      {i % 4 === 3 && "Manual Renewal!"}
                    </motion.div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                <div className="absolute bottom-2 left-0 right-0 text-center text-red-500 font-bold text-xl z-20">
                  Chaos
                </div>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 text-xl">•</span>
                  <span>Multiple wallets for different services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 text-xl">•</span>
                  <span>High gas fees eating into your budget</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 text-xl">•</span>
                  <span>Manual renewals wasting your time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 text-xl">•</span>
                  <span>Missed payments causing service interruptions</span>
                </li>
              </ul>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TiltCard className="bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30 rounded-xl p-6 h-full">
              <h3 className="text-2xl font-bold mb-4 text-primary">The Solution</h3>

              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-black/50 flex flex-col p-4">
                  <div className="text-sm text-primary mb-2">SubSentry Dashboard</div>
                  <div className="flex-1 space-y-3">
                    {["OpenRouter", "Lens Protocol", "Mirror.xyz", "Gitcoin"].map((service, i) => (
                      <motion.div
                        key={service}
                        className="bg-black/80 border border-primary/30 rounded-md p-2 flex justify-between items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          isInView
                            ? {
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.5 + i * 0.1 },
                              }
                            : {}
                        }
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 0 10px rgba(0, 170, 255, 0.3)",
                        }}
                      >
                        <span className="text-sm">{service}</span>
                        <span className="text-xs text-primary">Active</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-2 left-0 right-0 text-center text-primary font-bold text-xl z-20">
                  Simplicity
                </div>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary text-xl">•</span>
                  <span>One platform for all your subscriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-xl">•</span>
                  <span>AI-powered gas optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-xl">•</span>
                  <span>Automated renewals on your schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-xl">•</span>
                  <span>Reliable payments with smart retries</span>
                </li>
              </ul>
            </TiltCard>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 p-6 bg-muted rounded-xl border border-gray-800 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-xl font-bold mb-2">
            <span className="text-primary">80%</span> of Web3 users juggle{" "}
            <span className="text-primary">3+ subscriptions</span> manually
          </p>
          <p className="text-gray-400">SubSentry saves you hours every month and prevents missed payments</p>
        </motion.div>
      </div>
    </section>
  )
}
