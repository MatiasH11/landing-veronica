"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { CheckCheck } from "lucide-react"
import type { Mensaje } from "@/lib/contenido"
import retrato from "@/public/veronica/retrato.jpg"

type Fase = "espera" | "escribiendo" | "respondido"

// El servidor la pinta completa: sin JS o con movimiento reducido se lee todo de entrada.
// Si arranca fuera de pantalla, la respuesta espera a que la veas y llega después de "escribiendo...".
export function Conversacion({ momento, cliente, veronica }: { momento: string; cliente: Mensaje; veronica: Mensaje }) {
  const raiz = useRef<HTMLDivElement>(null)
  const quieto = useReducedMotion()
  const [fase, setFase] = useState<Fase>("respondido")

  useEffect(() => {
    const el = raiz.current
    if (!el || quieto) return
    if (el.getBoundingClientRect().top < window.innerHeight) return

    setFase("espera")
    const timers: ReturnType<typeof setTimeout>[] = []
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        timers.push(setTimeout(() => setFase("escribiendo"), 450))
        timers.push(setTimeout(() => setFase("respondido"), 1700))
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      timers.forEach(clearTimeout)
    }
  }, [quieto])

  return (
    <div
      ref={raiz}
      role="group"
      aria-label={`Conversación de ejemplo: ${momento.toLowerCase()}`}
      className="overflow-hidden rounded-2xl border border-linea bg-fondo-suave shadow-[0_18px_40px_-28px_rgba(34,29,28,0.45)]"
    >
      <div className="flex items-center gap-3 border-b border-linea bg-white px-4 py-3">
        <Image src={retrato} alt="" sizes="36px" className="h-9 w-9 rounded-full object-cover object-top" />
        <div className="leading-tight">
          <p className="text-sm font-semibold text-tinta">Verónica Mercado</p>
          <p className="text-xs text-gris-texto">
            <span aria-hidden="true" className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-dorado align-middle" />
            en línea
          </p>
        </div>
      </div>

      <div className="flex min-h-[12rem] flex-col gap-2.5 px-4 py-5">
        <div className="max-w-[85%] self-start rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 text-[15px] leading-snug text-tinta shadow-sm">
          <p>{cliente.texto}</p>
          <p className="mt-1 text-right text-[11px] text-gris-texto">{cliente.hora}</p>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {fase === "escribiendo" && (
            <motion.div
              key="escribiendo"
              aria-hidden="true"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex gap-1 self-end rounded-2xl rounded-tr-sm bg-[#f5e3e5] px-4 py-3.5"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-bordo/60"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.12 }}
                />
              ))}
            </motion.div>
          )}
          {fase === "respondido" && (
            <motion.div
              key="respuesta"
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[85%] origin-bottom-right self-end rounded-2xl rounded-tr-sm bg-[#f5e3e5] px-4 py-2.5 text-[15px] leading-snug text-tinta"
            >
              <p>{veronica.texto}</p>
              <p className="mt-1 flex items-center justify-end gap-1 text-[11px] text-gris-texto">
                {veronica.hora}
                <CheckCheck className="h-3.5 w-3.5 text-dorado" aria-label="leído" />
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mientras la respuesta no se ve, los lectores de pantalla igual la reciben */}
        {fase !== "respondido" && <p className="sr-only">{veronica.texto}</p>}
      </div>
    </div>
  )
}
