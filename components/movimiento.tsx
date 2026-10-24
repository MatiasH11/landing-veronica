"use client"

import type { ReactNode } from "react"
import { MotionConfig, motion } from "framer-motion"

// Respeta prefers-reduced-motion en toda la página: con "user", framer-motion omite transforms y deja solo la opacidad
export function Movimiento({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

// Aparición corta y única al entrar en pantalla. No se usa en el hero, que tiene que pintarse sin esperar a JS.
export function Aparecer({
  children,
  demora = 0,
  className,
  as = "div",
}: {
  children: ReactNode
  demora?: number
  className?: string
  as?: "div" | "li" | "article"
}) {
  const Componente = motion[as]
  return (
    <Componente
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.55, delay: demora, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Componente>
  )
}
