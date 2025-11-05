"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const benefits = [
  "Asesoramiento 100% personalizado",
  "Comparamos todas las opciones del mercado",
  "Sin costo de consulta",
]

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/business-handshake-trust-professional-insurance-ag.jpg" alt="Protección y confianza" className="w-full h-full object-cover" />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
            Protege tu patrimonio con respaldo y confianza
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed text-pretty max-w-2xl mx-auto">
            Asesoramiento personalizado en seguros para personas y PyMEs. 100% online, rápido y seguro.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-6 text-base"
            >
              Cotizá ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-400 hover:border-yellow-500 hover:bg-yellow-500/10 text-white px-8 py-6 text-base bg-transparent"
            >
              Ver Coberturas
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2"
      >
        <div className="w-2 h-2 rounded-full bg-yellow-500" />
        <div className="w-2 h-2 rounded-full bg-slate-500" />
        <div className="w-2 h-2 rounded-full bg-slate-500" />
        <div className="w-2 h-2 rounded-full bg-slate-500" />
      </motion.div>
    </section>
  )
}
