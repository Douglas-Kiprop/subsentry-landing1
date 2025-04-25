"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import TiltCard from "@/components/ui/tilt-card"
import { Info } from "lucide-react"

const services = [
  {
    name: "OpenRouter",
    description:
      '$5/month for AI model credits. Mocked credits shown in dApp (e.g., "Credits: 5"). Real-world: USDC to OpenRouter\'s wallet with API integration.',
    color: "primary",
    mockUI: "Credits: 5",
  },
  {
    name: "Lens Protocol",
    description:
      '$3/month for premium social content. Mocked as "Premium Access" in UI. Real-world: Smart contract event-based activation.',
    color: "secondary",
    mockUI: "Premium Access",
  },
  {
    name: "Mirror.xyz",
    description:
      "$4/month for exclusive writings. Mocked premium access in dApp. Real-world: USDC transfers with webhook.",
    color: "accent",
    mockUI: "Exclusive Access",
  },
  {
    name: "Gitcoin",
    description:
      '$2/month to fund open-source projects. Mocked as "Supporter Status" in UI. Real-world: Recurring USDC donations.',
    color: "primary",
    mockUI: "Supporter Status",
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  return (
    <section ref={sectionRef} className="relative py-20 px-4 overflow-hidden">
      <div className="container max-w-6xl mx-auto z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6 text-center glow-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Subscribe to Top Web3 Services with Ease
        </motion.h2>

        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          SubSentry supports any Web3 service with a USDC wallet. Our demo mocks activations for the hackathon, but
          real-world setups use events or APIs for seamless integration.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="perspective"
            >
              <div
                className={`relative transition-transform duration-500 transform-style-3d ${flippedCard === index ? "rotate-y-180" : ""}`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCard === index ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front of card */}
                <TiltCard
                  className="bg-black border border-gray-800 rounded-xl p-6 h-full backface-hidden"
                  glowColor={service.color as "primary" | "secondary" | "accent"}
                  tiltAmount={5}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-xl font-bold text-${service.color}`}>{service.name}</h3>
                    <button
                      onClick={() => setFlippedCard(index)}
                      className={`w-8 h-8 rounded-full bg-${service.color}/20 flex items-center justify-center text-${service.color}`}
                    >
                      <Info size={16} />
                    </button>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-1">Monthly Cost:</div>
                    <div className={`text-lg font-bold text-${service.color}`}>
                      {service.name === "OpenRouter" && "$5 USDC"}
                      {service.name === "Lens Protocol" && "$3 USDC"}
                      {service.name === "Mirror.xyz" && "$4 USDC"}
                      {service.name === "Gitcoin" && "$2 USDC"}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-1">Status:</div>
                    <div
                      className={`inline-block px-3 py-1 rounded-full bg-${service.color}/20 text-${service.color} text-sm`}
                    >
                      Active
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-400 mb-1">Benefit:</div>
                    <div
                      className={`p-3 bg-${service.color}/10 border border-${service.color}/30 rounded-lg text-${service.color} text-sm`}
                    >
                      {service.mockUI}
                    </div>
                  </div>
                </TiltCard>

                {/* Back of card */}
                <div
                  className="absolute inset-0 bg-black border border-gray-800 rounded-xl p-6 backface-hidden rotate-y-180"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-xl font-bold text-${service.color}`}>{service.name}</h3>
                    <button
                      onClick={() => setFlippedCard(null)}
                      className={`w-8 h-8 rounded-full bg-${service.color}/20 flex items-center justify-center text-${service.color}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="text-sm text-gray-300 h-full flex flex-col">
                    <p className="mb-4">{service.description}</p>

                    <div className="mt-auto">
                      <div className="text-xs text-gray-400 mb-1">Mock UI Preview:</div>
                      <div
                        className={`p-3 bg-${service.color}/10 border border-${service.color}/30 rounded-lg text-${service.color} text-sm`}
                      >
                        {service.mockUI}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
