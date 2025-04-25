import Hero from "@/components/sections/hero"
import Problem from "@/components/sections/problem"
import Solution from "@/components/sections/solution"
import HowItWorks from "@/components/sections/how-it-works"
import Services from "@/components/sections/services"
import CTA from "@/components/sections/cta"
import CustomCursor from "@/components/ui/custom-cursor"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Services />
      <CTA />
    </main>
  )
}
