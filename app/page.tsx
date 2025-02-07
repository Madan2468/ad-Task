import { HeroSection } from "@/components/hero-section"
import { LogoCarousel } from "@/components/logo-carousel"
import FeatureCards from "@/components/feature-cards"
import { ServiceCards } from "@/components/service-cards"
import { PricingSection } from "@/components/pricing-section"
import  TestimonialsSection  from "@/components/testimonials-section"
import  ContactSection  from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { GlowEffect } from "@/components/glow-effect"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden w-[100%]  no-scrollbar">
      <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desktop%20-%201.jpg-w1KXK3LsedBZAq6QBa6J4LwKUh1t3p.jpeg')] bg-cover bg-center opacity-50 z-0"></div>
      {/* <GlowEffect /> */}
      <div className="relative z-10">
        <HeroSection />
        <LogoCarousel />
        <FeatureCards />
        <ServiceCards />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}

