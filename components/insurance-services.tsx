"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Car, Bike, Home, Heart, UserX, Users, ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type InsuranceType = "personas" | "empresas"

interface InsuranceCard {
  icon: React.ElementType
  title: string
  description: string
}

const insuranceData: Record<InsuranceType, InsuranceCard[]> = {
  personas: [
    {
      icon: Car,
      title: "Automóviles",
      description: "Cobertura completa para tu vehículo con RC, asistencia 24/7 y beneficios justos.",
    },
    {
      icon: Bike,
      title: "Motos",
      description: "Protección integral para tu motocicleta con coberturas adaptadas a tus necesidades.",
    },
    {
      icon: Home,
      title: "Combinado Familiar",
      description: "Seguridad para tu hogar y bienes personales contra múltiples riesgos.",
    },
    {
      icon: Heart,
      title: "Vida",
      description: "Protección financiera para tu familia con cobertura completa y flexible.",
    },
    {
      icon: UserX,
      title: "Accidentes Personales",
      description: "Cobertura ante accidentes con indemnización por muerte e invalidez.",
    },
    {
      icon: Users,
      title: "Sepelio",
      description: "Servicios funerarios completos para toda la familia con atención inmediata.",
    },
  ],
  empresas: [
    {
      icon: Car,
      title: "Flota Vehicular",
      description: "Protección integral para tu flota empresarial con gestión centralizada.",
    },
    {
      icon: Home,
      title: "Patrimonial",
      description: "Cobertura completa para instalaciones, equipos y activos empresariales.",
    },
    {
      icon: Users,
      title: "Responsabilidad Civil",
      description: "Protección ante reclamos de terceros por daños y perjuicios.",
    },
    {
      icon: Heart,
      title: "Vida Colectivo",
      description: "Beneficios de vida para tus colaboradores y sus familias.",
    },
    {
      icon: UserX,
      title: "Accidentes Laborales",
      description: "Protección para empleados ante accidentes en el trabajo.",
    },
    {
      icon: Users,
      title: "Salud Empresarial",
      description: "Planes de salud corporativos para el bienestar de tu equipo.",
    },
  ],
}

export function InsuranceServices() {
  const [activeType, setActiveType] = useState<InsuranceType>("personas")

  const currentInsuranceData = useMemo(() => insuranceData[activeType], [activeType])

  return (
    <section id="servicios" className="relative min-h-screen bg-gradient-to-br from-[#0f1419] via-[#1a1d2e] to-[#0f1419] py-20 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance tracking-tight">
            Seguros para cada necesidad
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto text-pretty leading-relaxed">
            Explora nuestras coberturas y encuentra la protección perfecta para ti o para tu empresa.
          </p>
        </motion.header>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
          role="tablist"
          aria-label="Tipo de seguro"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1.5">
            <button
              onClick={() => setActiveType("personas")}
              role="tab"
              aria-selected={activeType === "personas"}
              aria-controls="insurance-grid"
              className={cn(
                "px-8 py-3 rounded-full font-medium transition-all duration-300",
                activeType === "personas"
                  ? "bg-gold text-[#0f1419] shadow-lg shadow-gold/25"
                  : "text-gray-400 hover:text-white",
              )}
            >
              Para Personas
            </button>
            <button
              onClick={() => setActiveType("empresas")}
              role="tab"
              aria-selected={activeType === "empresas"}
              aria-controls="insurance-grid"
              className={cn(
                "px-8 py-3 rounded-full font-medium transition-all duration-300",
                activeType === "empresas"
                  ? "bg-gold text-[#0f1419] shadow-lg shadow-gold/25"
                  : "text-gray-400 hover:text-white",
              )}
            >
              Para Empresas
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            id="insurance-grid"
            role="tabpanel"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentInsuranceData.map((card, index) => (
              <InsuranceCard key={card.title} card={card} index={index} />
            ))}

            <MoreInsuranceCard index={currentInsuranceData.length} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

function InsuranceCard({ card, index }: { card: InsuranceCard; index: number }) {
  const Icon = card.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1">
        {/* Icon */}
        <div className="mb-5">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 transition-all duration-300 group-hover:bg-gold/20 group-hover:scale-105">
            <Icon className="w-7 h-7 text-gold" strokeWidth={1.5} aria-hidden="true" />
          </div>
        </div>

        {/* Content */}
        <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
          {card.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">{card.description}</p>

        {/* Button */}
        <Button
          variant="outline"
          className="w-full border-gold/30 text-gold hover:bg-gold hover:text-[#0f1419] hover:border-gold transition-all duration-300 bg-transparent group/btn"
          aria-label={`Más información sobre ${card.title}`}
        >
          <span>Más información</span>
          <ArrowRight
            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
            aria-hidden="true"
          />
        </Button>
      </div>
    </motion.article>
  )
}

function MoreInsuranceCard({ index }: { index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-gradient-to-br from-gold/5 to-gold/[0.02] backdrop-blur-md border-2 border-dashed border-gold/30 rounded-2xl p-6 transition-all duration-300 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-1 h-full flex flex-col justify-between">
        {/* Icon */}
        <div className="mb-5">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 transition-all duration-300 group-hover:bg-gold/20 group-hover:scale-105">
            <MessageCircle className="w-7 h-7 text-gold" strokeWidth={1.5} aria-hidden="true" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
            ¿Buscas algo más?
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Ofrecemos muchos más tipos de seguros personalizados. Contáctanos para encontrar la solución perfecta.
          </p>
        </div>

        {/* Button */}
        <Button
          variant="outline"
          className="w-full border-gold/30 text-gold hover:bg-gold hover:text-[#0f1419] hover:border-gold transition-all duration-300 bg-transparent group/btn"
          aria-label="Contactar para más seguros"
          asChild
        >
          <a
            href="https://wa.me/5492236011753?text=Hola! Me gustaría obtener una cotización de seguros"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <span>Contáctanos</span>
            <ArrowRight
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </Button>
      </div>
    </motion.article>
  )
}
