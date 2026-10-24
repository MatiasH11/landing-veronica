"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion"
import { CheckCheck } from "lucide-react"
import { ACOMPANAMIENTO } from "@/lib/contenido"
import { Conversacion } from "@/components/conversacion"
import retrato from "@/public/veronica/retrato.jpg"

type Fase = "pregunta" | "escribiendo" | "respondido"
const ULTIMO = ACOMPANAMIENTO.length - 1

// Los pasos se leen con el scroll normal. En escritorio, un teléfono fijo al costado cuenta la misma historia como un
// chat que avanza con cada etapa. El servidor lo pinta completo; la animación arranca solo si la sección todavía no se vio.
export function Recorrido() {
  const lista = useRef<HTMLOListElement>(null)
  const pasos = useRef<(HTMLLIElement | null)[]>([])
  const quieto = useReducedMotion()
  const [activo, setActivo] = useState(ULTIMO)
  const [fase, setFase] = useState<Fase>("respondido")
  const anterior = useRef(ULTIMO)

  // El hilo dorado se llena a medida que la sección pasa por el centro de la pantalla
  const { scrollYProgress } = useScroll({ target: lista, offset: ["start 55%", "end 55%"] })
  const hilo = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 })

  useEffect(() => {
    if (quieto || !lista.current) return
    if (lista.current.getBoundingClientRect().top > window.innerHeight * 0.55) {
      anterior.current = -1
      setActivo(-1)
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const i = pasos.current.indexOf(e.target as HTMLLIElement)
          if (e.isIntersecting) setActivo(i)
          else if (i === 0 && e.boundingClientRect.top > window.innerHeight / 2) setActivo(-1)
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    )
    pasos.current.forEach((p) => p && io.observe(p))
    return () => io.disconnect()
  }, [quieto])

  // Al llegar a una etapa nueva: la pregunta, después "escribiendo..." y la respuesta
  useEffect(() => {
    const subio = activo > anterior.current
    anterior.current = activo
    if (!subio || quieto) {
      setFase("respondido")
      return
    }
    setFase("pregunta")
    const t1 = setTimeout(() => setFase("escribiendo"), 550)
    const t2 = setTimeout(() => setFase("respondido"), 1750)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [activo, quieto])

  const visibles = ACOMPANAMIENTO.slice(0, activo + 1)
  const ultimo = visibles.at(-1)
  const hora = !ultimo ? "09:41" : fase === "respondido" ? ultimo.chat.veronica.hora : ultimo.chat.cliente.hora

  return (
    <div className="relative mt-14 grid gap-16 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-20 xl:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
      <div className="relative">
        <div aria-hidden="true" className="absolute top-5 bottom-5 left-5 hidden w-px bg-linea lg:block" />
        <motion.div
          aria-hidden="true"
          style={{ scaleY: quieto ? 1 : hilo }}
          className="absolute top-5 bottom-5 left-5 hidden w-px origin-top bg-dorado lg:block"
        />
        <ol ref={lista} className="space-y-14 lg:space-y-0">
          {ACOMPANAMIENTO.map((paso, i) => {
            const alcanzado = i <= activo
            return (
              <li
                key={paso.momento}
                ref={(el) => {
                  pasos.current[i] = el
                }}
                className="relative lg:flex lg:min-h-[58vh] lg:items-center lg:pl-16"
              >
                <div>
                  <span
                    aria-hidden="true"
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-dorado font-serif text-lg transition-colors duration-500 lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-[3.25rem] ${
                      alcanzado ? "bg-dorado text-white" : "bg-white text-dorado"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <p className="mt-4 flex gap-3 text-sm lg:mt-0">
                    <span className="font-semibold text-dorado">{paso.momento}</span>
                    <span className="text-gris-texto">{paso.cuando}</span>
                  </p>
                  <h3 className="mt-1 font-serif text-3xl font-medium text-tinta lg:text-4xl">{paso.titulo}</h3>
                  <p className="mt-3 max-w-md text-lg leading-relaxed text-gris-texto">{paso.texto}</p>
                  <div className="mt-6 lg:hidden">
                    <Conversacion momento={paso.momento} cliente={paso.chat.cliente} veronica={paso.chat.veronica} />
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>

      <div className="hidden lg:block">
        <div className="sticky top-[calc(50vh-17.5rem)]">
          <Telefono activo={activo} fase={fase} hora={hora} />
        </div>
      </div>
    </div>
  )
}

function Telefono({ activo, fase, hora }: { activo: number; fase: Fase; hora: string }) {
  const visibles = ACOMPANAMIENTO.slice(0, activo + 1)
  return (
    <div
      role="group"
      aria-label="Conversaciones de ejemplo con Verónica en cada etapa"
      className="mx-auto w-full max-w-[22rem] rounded-[2.6rem] bg-tinta p-2.5 shadow-[0_40px_80px_-40px_rgba(34,29,28,0.7)]"
    >
      <div className="overflow-hidden rounded-[2.1rem] bg-fondo-suave">
        <div className="flex items-center justify-between px-6 pt-3 pb-1 text-xs font-semibold text-tinta tabular-nums">
          <span className="relative inline-flex h-4 w-10 overflow-hidden">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.span
                key={hora}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute"
              >
                {hora}
              </motion.span>
            </AnimatePresence>
          </span>
          <span aria-hidden="true" className="h-5 w-20 rounded-full bg-tinta" />
          <span aria-hidden="true" className="flex gap-0.5">
            <span className="h-2 w-1 rounded-sm bg-tinta/40" />
            <span className="h-2.5 w-1 rounded-sm bg-tinta/60" />
            <span className="h-3 w-1 rounded-sm bg-tinta" />
          </span>
        </div>

        <div className="flex items-center gap-3 border-b border-linea bg-white px-4 py-3">
          <Image src={retrato} alt="" sizes="36px" className="h-9 w-9 rounded-full object-cover object-top" />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-tinta">Verónica Mercado</p>
            <p className="relative h-4 text-xs text-gris-texto">
              <AnimatePresence initial={false} mode="wait">
                <motion.span
                  key={fase === "escribiendo" ? "escribiendo" : "linea"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className={fase === "escribiendo" ? "text-dorado" : ""}
                >
                  {fase === "escribiendo" ? "escribiendo…" : "en línea"}
                </motion.span>
              </AnimatePresence>
            </p>
          </div>
        </div>

        {/* Alto fijo y contenido pegado abajo: los mensajes nuevos empujan a los viejos, como en un chat */}
        <div className="flex h-[25rem] flex-col justify-end gap-2.5 overflow-hidden px-3.5 py-4">
          {activo < 0 && (
            <p className="mx-auto mb-auto mt-auto max-w-[14rem] text-center text-sm text-gris-texto">
              Bajá para ver cómo te acompaño en cada etapa.
            </p>
          )}
          <AnimatePresence initial={false}>
            {visibles.map((paso, i) => {
              const actual = i === activo
              const respondido = !actual || fase === "respondido"
              return [
                <motion.p
                  layout
                  key={`${paso.momento}-cuando`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="mx-auto rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-gris-texto shadow-sm"
                >
                  {paso.cuando}
                </motion.p>,
                <motion.div
                  layout
                  key={`${paso.momento}-cliente`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-[85%] self-start rounded-2xl rounded-tl-sm bg-white px-3.5 py-2 text-sm leading-snug text-tinta shadow-sm"
                >
                  {paso.chat.cliente.texto}
                  <span className="mt-0.5 block text-right text-[10px] text-gris-texto">{paso.chat.cliente.hora}</span>
                </motion.div>,
                actual && fase === "escribiendo" ? (
                  <motion.div
                    layout
                    key={`${paso.momento}-escribiendo`}
                    aria-hidden="true"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    className="flex gap-1 self-end rounded-2xl rounded-tr-sm bg-[#f5e3e5] px-4 py-3"
                  >
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-bordo/60"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.12 }}
                      />
                    ))}
                  </motion.div>
                ) : null,
                respondido ? (
                  <motion.div
                    layout
                    key={`${paso.momento}-respuesta`}
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-[85%] origin-bottom-right self-end rounded-2xl rounded-tr-sm bg-[#f5e3e5] px-3.5 py-2 text-sm leading-snug text-tinta"
                  >
                    {paso.chat.veronica.texto}
                    <span className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-gris-texto">
                      {paso.chat.veronica.hora}
                      <CheckCheck className="h-3 w-3 text-dorado" aria-label="leído" />
                    </span>
                  </motion.div>
                ) : null,
              ]
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
