"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import TiltCard from "@/components/ui/tilt-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const features = [
  {
    title: "Gas Savings",
    description: "Our AI monitors gas prices and executes transactions when fees are lowest",
    example: "Saved $0.02 on OpenRouter",
    icon: "💰",
    color: "primary",
  },
  {
    title: "Smart Preferences",
    description: "Tell our AI your preferences in plain English and it handles the rest",
    example: "Pay when gas is low",
    icon: "🧠",
    color: "secondary",
  },
  {
    title: "Service Suggestions",
    description: "Get personalized recommendations based on your subscription patterns",
    example: "Try Lens Protocol",
    icon: "💡",
    color: "accent",
  },
  {
    title: "Reliable Payments",
    description: "Smart retry mechanism ensures your subscriptions never lapse",
    example: "Retried failed payment",
    icon: "✅",
    color: "primary",
  },
]

export default function Solution() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const [activeIndex, setActiveIndex] = useState(0)

  const nextFeature = () => {
    setActiveIndex((prev) => (prev + 1) % features.length)
  }

  const prevFeature = () => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <section ref={sectionRef} className="relative py-20 px-4 overflow-hidden">
      <div className="container max-w-6xl mx-auto z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6 text-center glow-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          SubSentry: Simplify, Automate, Save
        </motion.h2>

        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          SubSentry is the first AI-powered dApp to centralize Web3 subscriptions, using USDC on Base for seamless
          payments and renewals.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="col-span-1 md:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TiltCard className="bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">Our Unique Value</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M9 9h.01" />
                        <path d="M15 9h.01" />
                        <path d="M9 15h.01" />
                        <path d="M15 15h.01" />
                      </svg>
                    </div>
                    <h4 className="font-bold">Centralized Management</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Manage all your subscriptions—OpenRouter, Lens Protocol, Mirror.xyz, Gitcoin—in one sleek dashboard.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                    </div>
                    <h4 className="font-bold">AI-Powered Automation</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Our AI agent saves gas, interprets your preferences (e.g., 'Pay weekly'), suggests services, and
                    ensures reliable payments.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <h4 className="font-bold">Seamless UX</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    One wallet, one platform, instant updates—no more manual renewals or juggling multiple services.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-black/50 rounded-lg border border-gray-800">
                <p className="text-gray-300 text-sm">
                  Built on Base Sepolia for low fees and powered by AgentKit, SubSentry is your Web3 subscription
                  superhero.
                </p>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-8 text-center">Key Features</h3>

          <div className="relative flex justify-center mb-8">
            <button
              onClick={prevFeature}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-colors z-20"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="w-full max-w-md overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="w-full flex-shrink-0 px-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <TiltCard
                      className="bg-black border border-gray-800 rounded-xl p-6 h-full"
                      glowColor={feature.color as "primary" | "secondary" | "accent"}
                    >
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h4 className={`text-xl font-bold mb-2 text-${feature.color}`}>{feature.title}</h4>
                      <p className="text-gray-400 mb-4">{feature.description}</p>
                      <div
                        className={`p-3 bg-${feature.color}/10 border border-${feature.color}/30 rounded-lg text-${feature.color} text-sm`}
                      >
                        Example: {feature.example}
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </div>

            <button
              onClick={nextFeature}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-colors z-20"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-primary" : "bg-gray-700"}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
