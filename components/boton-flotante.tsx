"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { MessageCircle, X } from "lucide-react"
import { whatsappUrl } from "@/lib/contenido"
import retrato from "@/public/veronica/retrato.jpg"

const CLAVE = "vm-globo-cerrado"
const SALUDO = "¡Hola! Soy Verónica. ¿Te ayudo a cotizar tu seguro?"

type Globo = "oculto" | "escribiendo" | "visible"

// Botón de WhatsApp siempre a mano. En escritorio aparece después del hero (arriba ya está el de la barra).
// Una vez por visita, Verónica "escribe" un saludo corto que se puede cerrar.
export function BotonFlotante() {
  const quieto = useReducedMotion()
  const [visible, setVisible] = useState(false)
  const [globo, setGlobo] = useState<Globo>("oculto")

  useEffect(() => {
    const actualizar = () => setVisible(window.innerWidth < 640 || window.scrollY > window.innerHeight * 0.6)
    actualizar()
    window.addEventListener("scroll", actualizar, { passive: true })
    window.addEventListener("resize", actualizar)
    return () => {
      window.removeEventListener("scroll", actualizar)
      window.removeEventListener("resize", actualizar)
    }
  }, [])

  useEffect(() => {
    let cerrado = false
    try {
      cerrado = sessionStorage.getItem(CLAVE) === "1"
    } catch {}
    if (cerrado) return
    const t1 = setTimeout(() => setGlobo(quieto ? "visible" : "escribiendo"), 9000)
    const t2 = setTimeout(() => setGlobo("visible"), quieto ? 9000 : 10400)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [quieto])

  const cerrar = () => {
    setGlobo("oculto")
    try {
      sessionStorage.setItem(CLAVE, "1")
    } catch {}
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
          className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6"
        >
          <AnimatePresence>
            {globo !== "oculto" && (
              <motion.div
                key="globo"
                role="status"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.97 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-[17rem] origin-bottom-right rounded-2xl rounded-br-sm border border-linea bg-white p-3.5 pr-9 shadow-[0_18px_40px_-20px_rgba(34,29,28,0.45)]"
              >
                <button
                  type="button"
                  onClick={cerrar}
                  aria-label="Cerrar mensaje"
                  className="absolute top-2 right-2 rounded-full p-1 text-gris-texto hover:bg-fondo-suave hover:text-tinta"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
                <div className="flex gap-3">
                  <Image src={retrato} alt="" sizes="36px" className="h-9 w-9 flex-none rounded-full object-cover object-top" />
                  {globo === "escribiendo" ? (
                    <span aria-label="Verónica está escribiendo" className="flex items-center gap-1 py-3">
                      {[0, 1, 2].map((d) => (
                        <motion.span
                          key={d}
                          className="h-1.5 w-1.5 rounded-full bg-bordo/60"
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.12 }}
                        />
                      ))}
                    </span>
                  ) : (
                    <a
                      href={whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={cerrar}
                      className="text-sm leading-snug text-tinta hover:text-bordo"
                    >
                      {SALUDO}
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={cerrar}
            aria-label="Cotizá por WhatsApp"
            className="group relative flex h-14 items-center rounded-full bg-bordo pr-4 pl-4 text-white shadow-[0_14px_30px_-10px_rgba(120,2,14,0.65)] transition-colors hover:bg-bordo-oscuro"
          >
            {/* Un pulso suave, tres veces, para que se note sin molestar */}
            <span aria-hidden="true" className="absolute inset-0 rounded-full bg-bordo motion-safe:animate-[pulso_2.4s_ease-out_1.2s_3]" />
            <MessageCircle className="relative h-6 w-6" aria-hidden="true" />
            <span className="relative grid grid-cols-[0fr] transition-[grid-template-columns] duration-300 ease-out group-hover:grid-cols-[1fr] group-focus-visible:grid-cols-[1fr]">
              <span className="overflow-hidden font-semibold whitespace-nowrap">
                <span className="pl-2">Cotizá por WhatsApp</span>
              </span>
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
