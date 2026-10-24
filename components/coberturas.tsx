"use client"

import { useRef, useState, type KeyboardEvent } from "react"
import { AnimatePresence, motion, type Variants } from "framer-motion"
import {
  Bandage,
  Beef,
  Bike,
  Car,
  Flower2,
  HardHat,
  Heart,
  House,
  MessageCircle,
  Scale,
  Stethoscope,
  Store,
  Tractor,
  Truck,
  Users,
  Warehouse,
  Wheat,
  type LucideIcon,
} from "lucide-react"
import { COBERTURAS, PUBLICOS, whatsappUrl, type Cobertura, type Publico } from "@/lib/contenido"

const ICONOS: Record<string, LucideIcon> = {
  auto: Car,
  moto: Bike,
  hogar: House,
  vida: Heart,
  accidentes: Bandage,
  sepelio: Flower2,
  flota: Truck,
  comercio: Store,
  rc: Scale,
  "vida-colectivo": Users,
  trabajo: HardHat,
  salud: Stethoscope,
  cultivos: Wheat,
  maquinaria: Tractor,
  hacienda: Beef,
  "vehiculos-rurales": Truck,
  instalaciones: Warehouse,
  "personal-rural": Users,
}

// La cobertura protagonista de cada público va primero, en la tarjeta grande bordó
const DESTACADA: Record<Publico, string> = {
  personas: "Auto",
  empresas: "Integral de comercio",
  campo: "Cultivos",
}

// Bento de 6 columnas en escritorio: la grande ocupa 2×2 y las demás completan dos filas.
// El color va por posición para que cada pestaña tenga el mismo ritmo: bordó, rosa, blanco, pizarra, rosa, blanco.
const ICONO_ANCHA = "top-4 right-4 h-12 w-12 opacity-40 sm:top-5 sm:right-5 sm:h-20 sm:w-20"
const ICONO_ANGOSTA = "top-4 right-4 h-10 w-10 opacity-40 sm:h-12 sm:w-12"
// Angosta en mobile (una columna de dos) y ancha en escritorio (ocupa dos de seis)
const ICONO_CRECE = "top-4 right-4 h-10 w-10 opacity-40 lg:top-5 lg:right-5 lg:h-20 lg:w-20"
const TARJETAS = [
  {
    forma: "col-span-2 lg:row-span-2 min-h-[16rem] lg:min-h-[22rem]",
    tono: "bg-bordo text-white",
    icono: "-top-4 -right-4 h-40 w-40 opacity-25 sm:h-56 sm:w-56 lg:-top-6 lg:-right-6 lg:h-72 lg:w-72",
  },
  { forma: "col-span-2 min-h-[11rem] lg:min-h-[15rem]", tono: "bg-rosa text-bordo", icono: ICONO_ANCHA },
  { forma: "min-h-[11rem] lg:min-h-[15rem]", tono: "bg-white text-tinta ring-1 ring-linea", icono: ICONO_ANGOSTA },
  { forma: "min-h-[11rem] lg:min-h-[15rem]", tono: "bg-pizarra text-white", icono: ICONO_ANGOSTA },
  { forma: "lg:col-span-2 min-h-[11rem] lg:min-h-[15rem]", tono: "bg-rosa text-bordo", icono: ICONO_CRECE },
  { forma: "lg:col-span-2 min-h-[11rem] lg:min-h-[15rem]", tono: "bg-white text-tinta ring-1 ring-linea", icono: ICONO_CRECE },
]

const tarjeta: Variants = {
  oculto: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
}

function ordenar(publico: Publico): Cobertura[] {
  const lista = COBERTURAS[publico]
  const primera = lista.find((c) => c.nombre === DESTACADA[publico])
  return primera ? [primera, ...lista.filter((c) => c !== primera)] : lista
}

export function Coberturas() {
  const [activo, setActivo] = useState<Publico>("personas")
  const pestanas = useRef<(HTMLButtonElement | null)[]>([])

  // Flechas izquierda/derecha entre pestañas, como pide el patrón de tabs de ARIA
  const alTeclear = (e: KeyboardEvent, i: number) => {
    const paso = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0
    if (!paso) return
    e.preventDefault()
    const siguiente = (i + paso + PUBLICOS.length) % PUBLICOS.length
    setActivo(PUBLICOS[siguiente].id)
    pestanas.current[siguiente]?.focus()
  }

  return (
    <section id="coberturas" aria-labelledby="coberturas-titulo" className="bg-fondo-suave py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="coberturas-titulo" className="font-serif text-4xl leading-tight font-medium text-tinta lg:text-5xl">
            ¿Qué querés asegurar?
          </h2>

          <div
            role="tablist"
            aria-label="Para quién es el seguro"
            className="inline-flex w-full max-w-md self-start rounded-full border border-linea bg-white p-1 sm:w-auto sm:self-auto"
          >
            {PUBLICOS.map((p, i) => (
              <button
                key={p.id}
                ref={(el) => {
                  pestanas.current[i] = el
                }}
                role="tab"
                id={`tab-${p.id}`}
                aria-selected={activo === p.id}
                aria-controls="panel-coberturas"
                tabIndex={activo === p.id ? 0 : -1}
                onClick={() => setActivo(p.id)}
                onKeyDown={(e) => alTeclear(e, i)}
                className="relative flex-1 rounded-full px-5 py-2.5 text-sm font-semibold text-gris-texto transition-colors aria-selected:text-white sm:flex-none sm:px-7"
              >
                {activo === p.id && (
                  <motion.span
                    layoutId="pestana-activa"
                    className="absolute inset-0 rounded-full bg-bordo"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  />
                )}
                <span className="relative">{p.nombre}</span>
              </button>
            ))}
          </div>
        </div>

        <div id="panel-coberturas" role="tabpanel" aria-labelledby={`tab-${activo}`} className="mt-10">
          {/* Solo se anima al cambiar de pestaña: responde a lo que tocaste */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.ul
              key={activo}
              initial="oculto"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.12 } }}
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-6"
            >
              {ordenar(activo).map((c, i) => {
                const Icono = ICONOS[c.icono] ?? Heart
                const { forma, tono, icono } = TARJETAS[i % TARJETAS.length]
                const grande = i === 0
                return (
                  <motion.li key={c.nombre} variants={tarjeta} className={forma}>
                    <a
                      href={whatsappUrl(`Hola Verónica, quiero cotizar un seguro de ${c.nombre.toLowerCase()}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative flex h-full flex-col justify-end overflow-hidden rounded-3xl p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-7 ${tono}`}
                    >
                      <Icono
                        aria-hidden="true"
                        strokeWidth={1}
                        className={`absolute transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${icono}`}
                      />
                      <span
                        className={`relative block font-serif leading-none font-medium text-balance ${
                          grande ? "text-4xl sm:text-5xl lg:text-6xl" : "text-2xl sm:text-3xl"
                        }`}
                      >
                        {grande ? c.nombre : (c.etiqueta ?? c.nombre)}
                      </span>
                      <span className={`relative mt-2 block opacity-80 ${grande ? "text-base sm:text-lg" : "text-sm"}`}>{c.corto}</span>
                      <span className="relative mt-4 inline-flex items-center gap-2 text-sm font-semibold sm:mt-5">
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        Cotizar
                        <span className="sr-only"> {c.nombre} por WhatsApp</span>
                      </span>
                    </a>
                  </motion.li>
                )
              })}
            </motion.ul>
          </AnimatePresence>
        </div>

        <p className="mt-8 text-gris-texto">
          ¿No está la tuya?{" "}
          <a
            href={whatsappUrl("Hola Verónica, quiero consultar por un seguro")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-bordo underline underline-offset-4 hover:text-bordo-oscuro"
          >
            Escribime y lo vemos
          </a>
          .
        </p>
      </div>
    </section>
  )
}
