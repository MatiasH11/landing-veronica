import { Hero } from "@/components/hero"
import { TrustBadges } from "@/components/trust-badges"
import { InsuranceServices } from "@/components/insurance-services"
import { HowIWork } from "@/components/how-i-work"
import { AboutMe } from "@/components/about-me"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBadges />
      <InsuranceServices />
      <HowIWork />
      <AboutMe />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
