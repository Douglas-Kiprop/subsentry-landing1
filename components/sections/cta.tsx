"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Twitter } from "lucide-react"
import ParticleBackground from "@/components/ui/particle-background"

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 overflow-hidden bg-gradient-to-t from-black to-gray-900/20"
    >
      <ParticleBackground particleCount={30} />

      <div className="container max-w-6xl mx-auto z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 glow-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Join the Web3 Subscription Revolution
          </motion.h2>

          <motion.p
            className="text-xl mb-12 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Try SubSentry today and manage your Web3 subscriptions like a pro. Built for the Coinbase hackathon, powered
            by Base, USDC, and AgentKit.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg">
              Launch dApp <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button variant="outline" size="lg">
              <Play className="mr-2 h-5 w-5" /> Watch Demo
            </Button>

            <Button variant="secondary" size="lg">
              <Twitter className="mr-2 h-5 w-5" /> Share on X
            </Button>
          </motion.div>

          <motion.div
            className="relative mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-full aspect-video max-w-2xl mx-auto rounded-xl overflow-hidden border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 opacity-50" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-black/80 border border-white/20 flex items-center justify-center cursor-pointer">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <div className="text-lg font-bold">SubSentry Demo</div>
                <div className="text-sm text-gray-400">See how easy it is to manage your Web3 subscriptions</div>
              </div>
            </div>
          </motion.div>

          <motion.footer
            className="border-t border-gray-800 pt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <a href="https://github.com/subsentry" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://x.com/subsentry" className="text-gray-400 hover:text-white transition-colors">
                X / Twitter
              </a>
              <a href="mailto:team@subsentry.com" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>

            <div className="text-sm text-gray-500 mb-4">
              Built by Team SubSentry for Coinbase Hackathon 2025. Powered by Base, AgentKit, and USDC.
            </div>

            <div className="text-xs text-gray-600">
              SubSentry mocks service activations for demo purposes. Real-world integrations use service APIs or events.
            </div>
          </motion.footer>
        </div>
      </div>
    </section>
  )
}
