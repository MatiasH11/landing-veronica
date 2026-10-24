"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, MessageCircle } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { SECCIONES, whatsappUrl } from "@/lib/contenido"

function Marca() {
  return (
    <a href="#inicio" className="flex items-center gap-3">
      <Image src="/veronica/monograma.webp" alt="" width={34} height={36} priority className="h-9 w-auto" />
      <span className="flex flex-col leading-tight">
        <span className="font-serif text-lg font-semibold text-tinta">Verónica Mercado</span>
        <span className="text-xs text-gris-texto">Productora asesora de seguros</span>
      </span>
    </a>
  )
}

export function Navbar() {
  const [bajo, setBajo] = useState(false)

  useEffect(() => {
    const actualizar = () => setBajo(window.scrollY > 8)
    actualizar()
    window.addEventListener("scroll", actualizar, { passive: true })
    return () => window.removeEventListener("scroll", actualizar)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-[box-shadow,border-color] duration-300 supports-[backdrop-filter]:bg-white/85 ${
        bajo ? "border-transparent shadow-[0_8px_24px_-16px_rgba(34,29,28,0.35)]" : "border-linea"
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-6 px-4 lg:px-8">
        <Marca />

        <ul className="hidden items-center gap-1 lg:flex">
          {SECCIONES.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-gris-texto transition-colors hover:text-bordo"
              >
                {s.nombre}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-bordo px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-bordo-oscuro sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Cotizá por WhatsApp
          </a>

          <Sheet>
            <SheetTrigger
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-tinta hover:bg-fondo-suave lg:hidden"
              aria-label="Abrir menú"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white p-0">
              <SheetTitle className="border-b border-linea p-6 font-serif text-xl text-tinta">Verónica Mercado</SheetTitle>
              <ul className="flex flex-col gap-1 px-4 py-6">
                {SECCIONES.map((s) => (
                  <li key={s.href}>
                    <SheetClose asChild>
                      <a href={s.href} className="block rounded-md px-4 py-3 text-base font-medium text-tinta hover:bg-fondo-suave">
                        {s.nombre}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
