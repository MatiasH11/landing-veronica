"use client"

import { motion } from "framer-motion"
import { Shield, Award, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    icon: Shield,
    text: "Asesoramiento 100% personalizado",
  },
  {
    icon: Clock,
    text: "Atención online y flexible",
  },
  {
    icon: Users,
    text: "Trato directo y humano",
  },
  {
    icon: Award,
    text: "Respaldo de compañías líderes",
  },
]

const stats = [
  { value: "5+", label: "Años de experiencia" },
  { value: "500+", label: "Clientes satisfechos" },
  { value: "100%", label: "Dedicación" },
]

export function AboutMe() {
  return (
    <section id="sobre-mi" className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20"
            >
              <Shield className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-yellow-500">Productora Asesora de Seguros - Mat 101463</span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-white"
              >
                Sobre mí
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-4 text-slate-300 leading-relaxed"
              >
                <p>
                  Soy Verónica Mercado, Productora Asesora de Seguros. Mi misión es asesorar y acompañar a personas y
                  empresas para que encuentren la cobertura que realmente necesitan.
                </p>
                <p>
                  Trabajo de forma independiente, con el respaldo de brokers y aseguradoras líderes, lo que me permite
                  acercarte la mejor opción para cada situación. Creo en la importancia social de mi profesión:
                  informar, orientar y dar tranquilidad a quienes confían en mí.
                </p>
              </motion.div>
            </div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                    <highlight.icon className="w-5 h-5 text-yellow-500" />
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed pt-2">{highlight.text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-3 gap-6 py-6 border-y border-slate-800"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8">
                Contactame
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 text-white hover:bg-slate-800 bg-transparent"
              >
                Ver Servicios
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-yellow-500/20 z-10" />

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-3xl blur-2xl" />

              {/* Image */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/asesora-7xGkEXVd6ffUaIzqjWmbN8azMKcajI.jpg"
                alt="Verónica Mercado - Productora Asesora de Seguros"
                className="relative w-full h-full object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Certificada por AMPAS</div>
                    <div className="text-xs text-slate-400">Asociación Marplatense de Productores</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 w-24 h-24 grid grid-cols-4 gap-2 opacity-20">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
