"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Step {
  number: number
  title: string
  description: string
  image: string
}

const steps: Step[] = [
  {
    number: 1,
    title: "Análisis Gratuito de Riesgo",
    description:
      "Analizamos tu actividad empresarial o independiente para identificar riesgos específicos y evaluar tus coberturas actuales.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/step-1-Rq2eMSV5jaYqITLPHDmwQ5JA2RFdu5.svg",
  },
  {
    number: 2,
    title: "Propuesta Personalizada",
    description:
      "Te presento las mejores opciones del mercado adaptadas a tu perfil empresarial, con atención online y personalizada.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/step-2-yIKVz4xiGGcWP7i6dP6taBEUQGs3HY.svg",
  },
  {
    number: 3,
    title: "Implementación y Seguimiento",
    description:
      "Sin compromiso de contratación. Si decidís avanzar, te acompaño en la implementación y seguimiento continuo.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/step-3-pSQrEwtVnx2Cgtps6qNE0SHsIhRKaK.svg",
  },
]

export function HowIWork() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#1a1d2e] via-[#0f1419] to-[#1a1d2e] py-20 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-40 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance tracking-tight">
            Cómo trabajo
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto text-pretty leading-relaxed">
            Mi proceso es simple, personalizado y sin compromiso. Te acompaño desde el análisis hasta la implementación.
          </p>
        </motion.header>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Connecting line (hidden on mobile, shown on desktop between cards) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-32 left-full w-full h-0.5 bg-gradient-to-r from-gold/40 via-gold/20 to-transparent -z-10"
                  aria-hidden="true"
                />
              )}

              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2">
                {/* Step Number Badge */}
                <div className="absolute -top-5 left-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold/80 shadow-lg shadow-gold/30 border-4 border-[#1a1d2e] transition-transform duration-300 group-hover:scale-110">
                    <span className="font-heading text-xl font-bold text-[#0f1419]">{step.number}</span>
                  </div>
                </div>

                {/* Illustration */}
                <div className="mb-8 mt-4 flex justify-center">
                  <div className="relative w-full h-48 transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={`Ilustración de ${step.title}`}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-heading text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300 text-balance">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-pretty">{step.description}</p>
                </div>

                {/* Decorative corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-gold/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg mb-6">¿Listo para proteger lo que más importa?</p>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-[#0f1419] font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 hover:scale-105">
            <span>Comenzar ahora</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
