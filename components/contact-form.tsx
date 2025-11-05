"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    insuranceType: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.insuranceType) {
      newErrors.insuranceType = "Seleccioná un tipo de seguro"
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({ name: "", phone: "", email: "", insuranceType: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Querés una cotización o más información?</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-2">
            Completá tus datos y te responderé a la brevedad.
          </p>
          <p className="text-base text-slate-400">Atención personalizada, rápida y 100% online.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-8 md:p-10 shadow-2xl">
            {/* Success message */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm rounded-3xl flex items-center justify-center z-10"
              >
                <div className="text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}>
                    <CheckCircle2 className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                  <p className="text-slate-300">Te responderé a la brevedad.</p>
                </div>
              </motion.div>
            )}

            <p className="text-sm text-slate-400 mb-6 text-center">Todos los campos son obligatorios</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                {/* Name field */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className={`peer w-full px-4 py-3.5 bg-slate-900/40 border ${
                      errors.name ? "border-red-500/50" : "border-slate-600/30"
                    } rounded-xl text-white placeholder-transparent focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300`}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-2.5 bg-slate-900 px-2 text-sm text-slate-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-slate-500 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-yellow-500"
                  >
                    Nombre y Apellido
                  </label>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1.5 text-sm text-red-400"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Phone field */}
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=" "
                    className={`peer w-full px-4 py-3.5 bg-slate-900/40 border ${
                      errors.phone ? "border-red-500/50" : "border-slate-600/30"
                    } rounded-xl text-white placeholder-transparent focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300`}
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-4 -top-2.5 bg-slate-900 px-2 text-sm text-slate-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-slate-500 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-yellow-500"
                  >
                    Teléfono o WhatsApp
                  </label>
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1.5 text-sm text-red-400"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Email field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className={`peer w-full px-4 py-3.5 bg-slate-900/40 border ${
                    errors.email ? "border-red-500/50" : "border-slate-600/30"
                  } rounded-xl text-white placeholder-transparent focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300`}
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-2.5 bg-slate-900 px-2 text-sm text-slate-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-slate-500 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-yellow-500"
                >
                  Email
                </label>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-sm text-red-400"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Insurance type dropdown */}
              <div className="relative">
                <select
                  id="insuranceType"
                  name="insuranceType"
                  value={formData.insuranceType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 bg-slate-900/40 border ${
                    errors.insuranceType ? "border-red-500/50" : "border-slate-600/30"
                  } rounded-xl text-white focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 appearance-none cursor-pointer ${
                    !formData.insuranceType && "text-slate-500"
                  }`}
                >
                  <option value="" disabled>
                    Tipo de seguro de interés
                  </option>
                  <option value="auto" className="bg-slate-900 text-white">
                    Auto
                  </option>
                  <option value="hogar" className="bg-slate-900 text-white">
                    Hogar
                  </option>
                  <option value="vida" className="bg-slate-900 text-white">
                    Vida
                  </option>
                  <option value="accidentes" className="bg-slate-900 text-white">
                    Accidentes Personales
                  </option>
                  <option value="pyme" className="bg-slate-900 text-white">
                    PyME
                  </option>
                  <option value="otro" className="bg-slate-900 text-white">
                    Otro
                  </option>
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {errors.insuranceType && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-sm text-red-400"
                  >
                    {errors.insuranceType}
                  </motion.p>
                )}
              </div>

              {/* Message field */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  rows={4}
                  className={`peer w-full px-4 py-3.5 bg-slate-900/40 border ${
                    errors.message ? "border-red-500/50" : "border-slate-600/30"
                  } rounded-xl text-white placeholder-transparent focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 resize-none`}
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-2.5 bg-slate-900 px-2 text-sm text-slate-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-slate-500 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-yellow-500"
                >
                  Mensaje
                </label>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-sm text-red-400"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Quiero mi cotización
                  </span>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
