"use client"

import { useEffect, useRef } from "react"
import { animate, useInView, useReducedMotion } from "framer-motion"

// Cuenta de 0 al valor la primera vez que se ve. El servidor ya pinta el valor final.
export function Contador({ valor }: { valor: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const visto = useInView(ref, { once: true, margin: "0px 0px -15% 0px" })
  const quieto = useReducedMotion()
  const numero = Number.parseInt(valor, 10)
  const sufijo = valor.replace(/^\d+/, "")

  // Arranca en 0 apenas hidrata, así el conteo no salta desde el valor final
  useEffect(() => {
    if (!quieto && !Number.isNaN(numero) && ref.current && !visto) ref.current.textContent = `0${sufijo}`
  }, [])

  useEffect(() => {
    if (!visto || quieto || Number.isNaN(numero) || !ref.current) return
    const el = ref.current
    const control = animate(0, numero, {
      duration: numero > 50 ? 1.6 : 1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${sufijo}`
      },
    })
    return () => control.stop()
  }, [visto, quieto, numero, sufijo])

  return (
    <span ref={ref} className="tabular-nums">
      {valor}
    </span>
  )
}
