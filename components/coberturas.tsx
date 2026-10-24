"use client"

import { useRef, useState, type KeyboardEvent } from "react"
import Image from "next/image"
import { AnimatePresence, motion, type Variants } from "framer-motion"
import { Check, MessageCircle, Plus, X } from "lucide-react"
import { COBERTURAS, PUBLICOS, whatsappUrl, type Cobertura, type Publico } from "@/lib/contenido"
import { Aparecer } from "@/components/movimiento"
import retrato from "@/public/veronica/retrato.jpg"

const idDe = (publico: Publico, c: Cobertura) => `${publico}:${c.nombre}`

const enLista = (nombres: string[]) =>
  nombres.length < 2 ? nombres.join("") : `${nombres.slice(0, -1).join(", ")} y ${nombres.at(-1)}`

const fila: Variants = {
  oculto: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
}

// Una lista de preguntas, no un catálogo: lo memorable son las situaciones en serif; todo lo demás queda callado.
export function Coberturas() {
  const [activo, setActivo] = useState<Publico>("personas")
  const [elegidas, setElegidas] = useState<string[]>([])
  const pestanas = useRef<(HTMLButtonElement | null)[]>([])
  const publico = PUBLICOS.find((p) => p.id === activo)!

  const alternar = (id: string) =>
    setElegidas((actuales) => (actuales.includes(id) ? actuales.filter((x) => x !== id) : [...actuales, id]))

  // Flechas izquierda/derecha entre pestañas, como pide el patrón de tabs de ARIA
  const alTeclear = (e: KeyboardEvent, i: number) => {
    const paso = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0
    if (!paso) return
    e.preventDefault()
    const siguiente = (i + paso + PUBLICOS.length) % PUBLICOS.length
    setActivo(PUBLICOS[siguiente].id)
    pestanas.current[siguiente]?.focus()
  }

  const nombresElegidos = elegidas.map((id) => id.split(":")[1])
  const mensaje = `Hola Verónica, quiero consultar por: ${enLista(nombresElegidos.map((n) => n.toLowerCase()))}.`

  return (
    <section id="coberturas" aria-labelledby="coberturas-titulo" className="bg-fondo-suave py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Aparecer>
          <h2 id="coberturas-titulo" className="font-serif text-4xl leading-tight font-medium text-tinta lg:text-5xl">
            ¿Qué te preocupa?
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-pretty text-gris-texto">
            Marcá lo que te pueda pasar y mandámelo todo junto en un solo mensaje.
          </p>
        </Aparecer>

        <div
          role="tablist"
          aria-label="Para quién es el seguro"
          className="mt-10 inline-flex w-full max-w-md rounded-full border border-linea bg-white p-1 sm:w-auto"
        >
          {PUBLICOS.map((p, i) => {
            const marcadas = elegidas.filter((id) => id.startsWith(`${p.id}:`)).length
            return (
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
                <span className="relative inline-flex items-center gap-1.5">
                  {p.nombre}
                  {marcadas > 0 && (
                    <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-dorado px-1 text-[10px] text-white">
                      <span className="sr-only">, elegidas: </span>
                      {marcadas}
                    </span>
                  )}
                </span>
              </button>
            )
          })}
        </div>

        <div
          id="panel-coberturas"
          role="tabpanel"
          aria-labelledby={`tab-${activo}`}
          className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-20"
        >
          <AnimatePresence mode="wait">
            <motion.ul
              key={activo}
              initial="oculto"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              exit={{ opacity: 0, transition: { duration: 0.12 } }}
              variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
              className="border-y border-linea"
            >
              {COBERTURAS[activo].map((c) => {
                const id = idDe(activo, c)
                const elegida = elegidas.includes(id)
                return (
                  <motion.li key={c.nombre} variants={fila} className="border-b border-linea last:border-b-0">
                    <button
                      type="button"
                      aria-pressed={elegida}
                      onClick={() => alternar(id)}
                      className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span>
                        <span
                          className={`block font-serif text-2xl leading-snug font-medium transition-colors lg:text-[1.7rem] ${
                            elegida ? "text-bordo" : "text-tinta group-hover:text-bordo"
                          }`}
                        >
                          {c.situacion}
                        </span>
                        <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-gris-texto">
                          <span className="font-semibold text-tinta">{c.nombre}.</span>{" "}
                          {enLista(c.incluye.map((x, i) => (i === 0 ? x : x.charAt(0).toLowerCase() + x.slice(1))))}.
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className={`mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full border transition-colors ${
                          elegida ? "border-bordo bg-bordo text-white" : "border-linea text-tinta group-hover:border-bordo group-hover:text-bordo"
                        }`}
                      >
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.span
                            key={elegida ? "si" : "no"}
                            initial={{ scale: 0.4, rotate: -60, opacity: 0 }}
                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                            exit={{ scale: 0.4, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            className="inline-flex"
                          >
                            {elegida ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                          </motion.span>
                        </AnimatePresence>
                      </span>
                    </button>
                  </motion.li>
                )
              })}
            </motion.ul>
          </AnimatePresence>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <figure>
              <div className="flex items-center gap-3">
                <Image src={retrato} alt="" sizes="44px" className="h-11 w-11 rounded-full object-cover object-top" />
                <figcaption className="text-sm leading-tight text-gris-texto">
                  <span className="block font-semibold text-tinta">Un consejo</span>
                  de Verónica
                </figcaption>
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.blockquote
                  key={activo}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 font-serif text-lg leading-snug text-tinta italic"
                >
                  {publico.consejo}
                </motion.blockquote>
              </AnimatePresence>
            </figure>
            <p className="mt-8 text-sm leading-relaxed text-gris-texto">
              ¿No está lo que buscás?{" "}
              <a
                href={whatsappUrl("Hola Verónica, quiero consultar por un seguro")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-bordo underline underline-offset-4 hover:text-bordo-oscuro"
              >
                Contame qué necesitás
              </a>
              .
            </p>
          </aside>
        </div>

        {/* Bandeja: queda pegada abajo mientras recorrés la sección y junta todo en un solo mensaje */}
        <div aria-live="polite" className="sticky bottom-4 z-30 mr-[4.5rem] sm:mr-0">
          <AnimatePresence>
            {elegidas.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className="mt-8 flex items-center gap-3 rounded-2xl bg-tinta p-2.5 pl-4 text-white shadow-[0_20px_40px_-20px_rgba(34,29,28,0.8)] sm:mx-auto sm:max-w-2xl sm:gap-4"
              >
                <motion.span
                  key={elegidas.length}
                  initial={{ scale: 1.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 18 }}
                  className="flex h-7 min-w-7 flex-none items-center justify-center rounded-full bg-dorado px-2 text-sm font-semibold"
                >
                  {elegidas.length}
                </motion.span>
                <p className="min-w-0 flex-1 text-sm leading-tight">
                  <span className="sm:hidden">{elegidas.length === 1 ? "elegida" : "elegidas"}</span>
                  <span className="hidden text-white/60 sm:inline">Te interesa: </span>
                  <span className="hidden sm:line-clamp-1">{enLista(nombresElegidos)}</span>
                </p>
                <button
                  type="button"
                  onClick={() => setElegidas([])}
                  aria-label="Vaciar la selección"
                  className="flex-none rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
                <a
                  href={whatsappUrl(mensaje)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-none items-center gap-2 rounded-xl bg-bordo px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-bordo-oscuro"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span className="sm:hidden">Consultar</span>
                  <span className="hidden sm:inline">Consultar por WhatsApp</span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
