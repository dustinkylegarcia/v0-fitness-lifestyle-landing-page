import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { Philosophy } from "@/components/sections/philosophy"
import { Movement } from "@/components/sections/movement"
import { Nourish } from "@/components/sections/nourish"
import { Community } from "@/components/sections/community"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <Philosophy />
      <Movement />
      <Nourish />
      <Community />
      <CTA />
      <Footer />
    </main>
  )
}
