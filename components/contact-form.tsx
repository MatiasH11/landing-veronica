"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle2, AlertCircle, MessageCircle, Phone, Mail } from "lucide-react"
import emailjs from "@emailjs/browser"
import { EMAIL, TELEFONO_VISIBLE, WHATSAPP_NUMERO, whatsappUrl } from "@/lib/contenido"
import { Aparecer } from "@/components/movimiento"

const TIPOS = [
  { value: "auto", label: "Auto o moto" },
  { value: "hogar", label: "Hogar" },
  { value: "vida", label: "Vida" },
  { value: "accidentes", label: "Accidentes personales" },
  { value: "pyme", label: "Empresa o comercio" },
  { value: "campo", label: "Campo" },
  { value: "otro", label: "Otro" },
]

const campo =
  "w-full rounded-xl border bg-white px-4 py-3 text-tinta transition-colors placeholder:text-gris-texto/60 focus:border-bordo focus:ring-2 focus:ring-bordo/15 focus:outline-none"

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
  const [isError, setIsError] = useState(false)

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
    setIsError(false)

    try {
      // Preparar los datos del template para EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        insurance_type: formData.insuranceType,
        message: formData.message,
        to_email: EMAIL,
      }

      // Enviar email usando EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )

      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: "", phone: "", email: "", insuranceType: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error("Error al enviar email:", error)
      setIsSubmitting(false)
      setIsError(true)

      // Reset error message after 5 seconds
      setTimeout(() => setIsError(false), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const borde = (name: string) => (errors[name] ? "border-destructive" : "border-linea")

  const MensajeError = ({ name }: { name: string }) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-1.5 text-sm text-destructive">
        {errors[name]}
      </p>
    ) : null

  const describe = (name: string) => (errors[name] ? `${name}-error` : undefined)

  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="bg-fondo-suave py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[5fr_7fr] lg:gap-20 lg:px-8">
        <Aparecer>
          <h2 id="contacto-titulo" className="font-serif text-4xl leading-tight font-medium text-tinta lg:text-5xl">
            Hablemos de tu seguro
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-gris-texto">
            La consulta no tiene costo. Lo más rápido es WhatsApp.
          </p>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center gap-4 rounded-2xl bg-bordo p-5 text-white transition-colors hover:bg-bordo-oscuro"
          >
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white/15">
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-semibold">Escribime por WhatsApp</span>
              <span className="block text-sm text-white/80">{TELEFONO_VISIBLE}</span>
            </span>
          </a>

          <ul className="mt-6 space-y-3 text-tinta">
            <li>
              <a href={`tel:+${WHATSAPP_NUMERO}`} className="inline-flex items-center gap-3 hover:text-bordo">
                <Phone className="h-5 w-5 text-dorado" aria-hidden="true" />
                {TELEFONO_VISIBLE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-3 break-all hover:text-bordo">
                <Mail className="h-5 w-5 flex-none text-dorado" aria-hidden="true" />
                {EMAIL}
              </a>
            </li>
          </ul>
        </Aparecer>

        <Aparecer demora={0.08}>
          <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-linea bg-white p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-tinta">
                  Nombre y apellido
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={describe("name")}
                  className={`${campo} ${borde("name")}`}
                />
                <MensajeError name="name" />
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-tinta">
                  Teléfono o WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-invalid={!!errors.phone}
                  aria-describedby={describe("phone")}
                  className={`${campo} ${borde("phone")}`}
                />
                <MensajeError name="phone" />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-tinta">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={describe("email")}
                  className={`${campo} ${borde("email")}`}
                />
                <MensajeError name="email" />
              </div>

              <div>
                <label htmlFor="insuranceType" className="mb-1.5 block text-sm font-medium text-tinta">
                  ¿Qué querés asegurar?
                </label>
                <select
                  id="insuranceType"
                  name="insuranceType"
                  value={formData.insuranceType}
                  onChange={handleChange}
                  aria-invalid={!!errors.insuranceType}
                  aria-describedby={describe("insuranceType")}
                  className={`${campo} ${borde("insuranceType")} cursor-pointer`}
                >
                  <option value="" disabled>
                    Elegí una opción
                  </option>
                  {TIPOS.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
                <MensajeError name="insuranceType" />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-tinta">
                  Contame tu caso
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={describe("message")}
                  className={`${campo} ${borde("message")} resize-none`}
                />
                <MensajeError name="message" />
              </div>
            </div>

            <div aria-live="polite">
              {isSuccess && (
                <p className="mt-5 flex items-start gap-2 rounded-xl bg-green-50 p-4 text-green-900">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true" />
                  Mensaje enviado. Te respondo a la brevedad.
                </p>
              )}
              {isError && (
                <p className="mt-5 flex items-start gap-2 rounded-xl bg-red-50 p-4 text-red-900">
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true" />
                  <span>
                    No se pudo enviar el mensaje. Probá de nuevo o{" "}
                    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                      escribime por WhatsApp
                    </a>
                    .
                  </span>
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-bordo px-6 py-4 font-semibold text-white transition-colors hover:bg-bordo-oscuro disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
              {isSubmitting ? "Enviando..." : "Pedir mi cotización"}
            </button>
            <p className="mt-3 text-center text-sm text-gris-texto">Todos los campos son obligatorios.</p>
          </form>
        </Aparecer>
      </div>
    </section>
  )
}
