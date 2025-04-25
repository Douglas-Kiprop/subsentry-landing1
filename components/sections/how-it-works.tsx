"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wallet, Coins, Bot } from "lucide-react"

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const steps = [
    {
      title: "Connect & Choose",
      description:
        "Connect your wallet (MetaMask, Coinbase Wallet) using CDP SDK. Browse Web3 services like OpenRouter, Lens Protocol, Mirror.xyz, or Gitcoin and pick a plan (e.g., $5/month for AI credits).",
      icon: <Wallet className="w-8 h-8" />,
      color: "primary",
    },
    {
      title: "Subscribe with USDC",
      description:
        "Approve USDC payments on Base Sepolia. Our smart contract registers your subscription and sends USDC to the service's wallet, triggering benefits like credits or premium access.",
      icon: <Coins className="w-8 h-8" />,
      color: "secondary",
    },
    {
      title: "AI-Powered Automation",
      description:
        'Our AI agent monitors subscriptions, pays when gas is low, follows your preferences (e.g., "Pay weekly"), suggests new services, and retries failed payments. See instant updates like "Credits: 5" for OpenRouter.',
      icon: <Bot className="w-8 h-8" />,
      color: "accent",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-black to-gray-900/20"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 text-center glow-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          How SubSentry Works in 3 Simple Steps
        </motion.h2>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          <div className="space-y-16 md:space-y-24 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className={`order-2 md:order-${index % 2 === 0 ? 2 : 1}`}>
                    <div
                      className={`p-6 bg-gradient-to-br from-${step.color}/20 to-transparent border border-${step.color}/30 rounded-xl`}
                    >
                      <h3 className={`text-2xl font-bold mb-4 text-${step.color}`}>
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>

                  <div className={`order-1 md:order-${index % 2 === 0 ? 1 : 2} relative`}>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 rounded-full bg-black border-2 border-gray-800 flex items-center justify-center z-10 md:hidden">
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>

                    <div
                      className={`relative bg-black border border-${step.color}/50 rounded-xl p-8 aspect-video flex items-center justify-center`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-${step.color}/20 to-transparent opacity-50 rounded-xl`}
                      />

                      {index === 0 && (
                        <div className="relative z-10 w-full max-w-xs mx-auto">
                          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                            <div className="flex items-center gap-3 mb-4">
                              <div
                                className={`w-10 h-10 rounded-full bg-${step.color}/20 flex items-center justify-center text-${step.color}`}
                              >
                                {step.icon}
                              </div>
                              <div>
                                <div className="text-sm font-bold">Connect Wallet</div>
                                <div className="text-xs text-gray-400">Choose your provider</div>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-black rounded-md p-3 border border-gray-800 flex items-center justify-center">
                                <span className="text-sm">MetaMask</span>
                              </div>
                              <div className="bg-black rounded-md p-3 border border-gray-800 flex items-center justify-center">
                                <span className="text-sm">Coinbase</span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 bg-gray-900 rounded-lg p-4 border border-gray-800">
                            <div className="text-sm font-bold mb-2">Choose Service</div>
                            <div className="space-y-2">
                              <div className="bg-black rounded-md p-2 border border-primary/50 flex items-center justify-between">
                                <span className="text-sm">OpenRouter</span>
                                <span className="text-xs text-primary">$5/mo</span>
                              </div>
                              <div className="bg-black rounded-md p-2 border border-gray-800 flex items-center justify-between">
                                <span className="text-sm">Lens Protocol</span>
                                <span className="text-xs text-gray-400">$3/mo</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className="relative z-10 w-full max-w-xs mx-auto">
                          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                            <div className="text-sm font-bold mb-2">Approve USDC Payment</div>
                            <div className="bg-black rounded-md p-3 border border-secondary/50 mb-3">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm">Service:</span>
                                <span className="text-sm font-bold">OpenRouter</span>
                              </div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm">Amount:</span>
                                <span className="text-sm font-bold">5 USDC</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Frequency:</span>
                                <span className="text-sm font-bold">Monthly</span>
                              </div>
                            </div>

                            <div className="flex justify-center">
                              <div className="bg-secondary/20 text-secondary rounded-md px-4 py-2 text-sm font-bold">
                                Approve Transaction
                              </div>
                            </div>
                          </div>

                          <div className="mt-4">
                            <div className="relative">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-xs">
                                  1
                                </div>
                                <div className="text-xs">USDC sent to service wallet</div>
                              </div>
                              <svg className="w-full" height="40">
                                <path
                                  d="M10,10 L200,10"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeDasharray="4 2"
                                  className="text-secondary"
                                />
                                <circle cx="10" cy="10" r="5" fill="currentColor" className="text-secondary" />
                                <circle
                                  cx="200"
                                  cy="10"
                                  r="5"
                                  fill="currentColor"
                                  className="text-secondary animate-pulse"
                                />
                              </svg>
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                              <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-xs">
                                2
                              </div>
                              <div className="text-xs">Service activated: Credits +5</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className="relative z-10 w-full max-w-xs mx-auto">
                          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 mb-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div
                                className={`w-10 h-10 rounded-full bg-${step.color}/20 flex items-center justify-center text-${step.color}`}
                              >
                                {step.icon}
                              </div>
                              <div>
                                <div className="text-sm font-bold">AI Assistant</div>
                                <div className="text-xs text-gray-400">Managing your subscriptions</div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div className="bg-black rounded-md p-2 border border-accent/30 text-xs">
                                Gas prices are high right now. I'll wait for lower fees before renewing your OpenRouter
                                subscription.
                              </div>
                              <div className="bg-black rounded-md p-2 border border-accent/30 text-xs">
                                Your Lens Protocol payment is scheduled for tomorrow. Would you like to pay now instead?
                              </div>
                              <div className="bg-black rounded-md p-2 border border-accent/30 text-xs">
                                Based on your usage, you might like Mirror.xyz for exclusive content. Want to try it?
                              </div>
                            </div>
                          </div>

                          <div className="bg-gray-900 rounded-lg p-3 border border-gray-800">
                            <div className="text-xs font-bold mb-2">Service Status Updates</div>
                            <div className="space-y-2">
                              <div className="bg-black rounded-md p-2 border border-gray-800 flex items-center justify-between">
                                <span className="text-xs">OpenRouter</span>
                                <span className="text-xs text-accent">Credits: 5</span>
                              </div>
                              <div className="bg-black rounded-md p-2 border border-gray-800 flex items-center justify-between">
                                <span className="text-xs">Lens Protocol</span>
                                <span className="text-xs text-accent">Premium: Active</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Step indicator for desktop */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black border-2 border-gray-800 flex items-center justify-center z-10 hidden md:flex">
                  <span className="text-xl font-bold text-white">{index + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="bg-black/50 border border-gray-800 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <h4 className="text-lg font-bold mb-2">Integration Note</h4>
            <p className="text-gray-400 text-sm">
              For the hackathon, we mock service activations (e.g., OpenRouter credits, Lens Protocol access) in the
              dApp UI, as real APIs are mainnet-only. Real-world integrations use service APIs or smart contract events.
            </p>
          </div>

          <Button size="lg">
            Start Managing Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
