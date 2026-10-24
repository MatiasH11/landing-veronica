import { Hero } from "@/components/hero"
import { Acompanamiento } from "@/components/acompanamiento"
import { Coberturas } from "@/components/coberturas"
import { AboutMe } from "@/components/about-me"
import { Testimonials } from "@/components/testimonials"
import { EducacionVial } from "@/components/educacion-vial"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { BotonFlotante } from "@/components/boton-flotante"

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Acompanamiento />
        <Coberturas />
        <AboutMe />
        <Testimonials />
        <EducacionVial />
        <ContactForm />
      </main>
      <Footer />
      <BotonFlotante />
    </>
  )
}
