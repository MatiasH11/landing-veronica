"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Dueña de PyME",
    insurance: "Seguro Empresarial",
    rating: 5,
    text: "Verónica me ayudó a encontrar la cobertura perfecta para mi negocio. Su asesoramiento personalizado fue excepcional.",
    initials: "MG",
  },
  {
    name: "Carlos Rodríguez",
    role: "Padre de familia",
    insurance: "Seguro de Vida",
    rating: 5,
    text: "El proceso fue muy simple. Me explicó todas las opciones claramente y encontramos la mejor solución para mi familia.",
    initials: "CR",
  },
  {
    name: "Laura Martínez",
    role: "Propietaria de vehículo",
    insurance: "Seguro de Auto",
    rating: 5,
    text: "Después de un accidente, Verónica me guió en todo el proceso. Su respaldo hizo que todo fuera mucho más fácil.",
    initials: "LM",
  },
  {
    name: "Roberto Fernández",
    role: "Motociclista",
    insurance: "Seguro de Moto",
    rating: 5,
    text: "Encontré la mejor cobertura para mi moto. Me presentó varias opciones de compañías líderes. Excelente servicio.",
    initials: "RF",
  },
  {
    name: "Ana Sánchez",
    role: "Propietaria de hogar",
    insurance: "Combinado Familiar",
    rating: 5,
    text: "El seguro combinado cubre todo lo que necesito. Verónica fue muy profesional y me dio la confianza que buscaba.",
    initials: "AS",
  },
  {
    name: "Diego Pérez",
    role: "Empresario",
    insurance: "Múltiples Seguros",
    rating: 5,
    text: "Trabajo con Verónica hace más de 3 años. Su atención es impecable, siempre disponible. Una profesional de primer nivel.",
    initials: "DP",
  },
  {
    name: "Sofía Torres",
    role: "Freelancer",
    insurance: "Seguro de Salud",
    rating: 5,
    text: "Como trabajadora independiente, necesitaba un seguro accesible. Verónica encontró la opción perfecta para mí.",
    initials: "ST",
  },
  {
    name: "Javier Morales",
    role: "Conductor de Uber",
    insurance: "Seguro de Auto",
    rating: 5,
    text: "Necesitaba cobertura especial para mi trabajo. Verónica conoce el mercado y consiguió el mejor precio.",
    initials: "JM",
  },
  {
    name: "Patricia Ruiz",
    role: "Jubilada",
    insurance: "Seguro de Vida",
    rating: 5,
    text: "Me asesoró con paciencia y claridad. Ahora mis hijos están protegidos. Muy agradecida por su dedicación.",
    initials: "PR",
  },
  {
    name: "Martín Silva",
    role: "Dueño de local",
    insurance: "Seguro Comercial",
    rating: 5,
    text: "Proteger mi local era fundamental. Verónica me consiguió una póliza completa a un precio justo.",
    initials: "MS",
  },
  {
    name: "Gabriela Vega",
    role: "Madre de 3",
    insurance: "Combinado Familiar",
    rating: 5,
    text: "Con tres hijos, necesitaba protección integral. Verónica armó un paquete perfecto para nuestra familia.",
    initials: "GV",
  },
  {
    name: "Fernando Castro",
    role: "Arquitecto",
    insurance: "Responsabilidad Civil",
    rating: 5,
    text: "El seguro de responsabilidad profesional era complejo. Verónica lo simplificó y encontró la mejor opción.",
    initials: "FC",
  },
]

const firstRow = testimonials.slice(0, 6)
const secondRow = testimonials.slice(6, 12)

export function Testimonials() {
  return (
    <section id="testimonios" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Lo que dicen mis clientes</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            La confianza de mis clientes es mi mayor logro. Lee sus experiencias y descubre por qué eligen mi
            asesoramiento.
          </p>
        </motion.div>

        <div className="relative mb-8 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...firstRow, ...firstRow, ...firstRow].map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [-1920, 0],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...secondRow, ...secondRow, ...secondRow].map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 px-4"
        >
          <p className="text-slate-300 text-lg mb-6">¿Querés ser parte de estas historias de éxito?</p>
          <a
            href="https://wa.me/5492236011753?text=Hola! Me gustaría obtener una cotización de seguros"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold rounded-lg transition-colors duration-300"
          >
            Comenzar ahora
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <article className="flex-shrink-0 w-[380px] group">
      <div className="relative h-full p-6 rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10">
        {/* Quote icon */}
        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
          <Quote className="w-12 h-12 text-yellow-500" />
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          ))}
        </div>

        {/* Testimonial text */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">{testimonial.text}</p>

        {/* Author info */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
          {/* Avatar with initials */}
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
            <span className="text-slate-900 font-bold text-sm">{testimonial.initials}</span>
          </div>

          {/* Name and role */}
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-sm truncate">{testimonial.name}</h3>
            <p className="text-slate-400 text-xs truncate">{testimonial.role}</p>
            <p className="text-yellow-500 text-xs truncate">{testimonial.insurance}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
