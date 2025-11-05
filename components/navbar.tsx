"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Cómo Funciona", href: "#como-funciona" },
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Detect active section
      const sections = navItems.map((item) => item.href.substring(1))
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("#inicio")
            }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-yellow-500 font-heading leading-tight">
                Verónica Mercado
              </span>
              <span className="text-xs text-slate-400 tracking-wide">Seguros</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className={cn(
                  "px-3 lg:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  activeSection === item.href.substring(1)
                    ? "text-yellow-500 bg-yellow-500/10"
                    : "text-slate-300 hover:text-yellow-500 hover:bg-slate-800/50"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              variant="ghost"
              className="text-slate-300 hover:text-yellow-500 hover:bg-slate-800"
              asChild
            >
              <a href="tel:+541234567890" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">Llamar</span>
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold"
              asChild
            >
              <a
                href="https://wa.me/541234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Cotizá ahora
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:bg-slate-800"
                aria-label="Abrir menú"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-slate-900 border-slate-800 p-0"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="p-6 border-b border-slate-800">
                  <h2 className="text-2xl font-bold text-yellow-500 font-heading">
                    Verónica Mercado
                  </h2>
                  <p className="text-sm text-slate-400 mt-1">Seguros</p>
                </div>

                {/* Mobile Nav Items */}
                <nav className="flex-1 px-4 py-6">
                  <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <SheetClose key={item.name} asChild>
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault()
                            scrollToSection(item.href)
                          }}
                          className={cn(
                            "px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                            activeSection === item.href.substring(1)
                              ? "text-yellow-500 bg-yellow-500/10"
                              : "text-slate-300 hover:text-yellow-500 hover:bg-slate-800/50"
                          )}
                        >
                          {item.name}
                        </a>
                      </SheetClose>
                    ))}
                  </div>
                </nav>

                {/* Mobile CTA */}
                <div className="p-4 border-t border-slate-800 space-y-3">
                  <Button
                    size="lg"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold"
                    asChild
                  >
                    <a
                      href="https://wa.me/541234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Cotizá ahora
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-slate-700 text-slate-300 hover:bg-slate-800"
                    asChild
                  >
                    <a href="tel:+541234567890" className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      Llamar ahora
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  )
}

