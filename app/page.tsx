"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Shield,
  Car,
  Heart,
  Home,
  Plane,
  Star,
  Phone,
  Mail,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Menu,
  X,
  Search,
  Moon,
  Sun,
} from "lucide-react"
import { SeguroCard } from "@/components/SeguroCard"
import { useTheme } from "next-themes"
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

// Hook para animaciones de scroll
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return [ref, isVisible] as const
}

export default function VeronicaSegurosLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentService, setCurrentService] = useState(0)
  const [currentHeroImage, setCurrentHeroImage] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Referencias para animaciones
  const [statsRef, statsVisible] = useScrollAnimation()
  const [processRef, processVisible] = useScrollAnimation()
  const [servicesRef, servicesVisible] = useScrollAnimation()
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation()
  const [faqRef, faqVisible] = useScrollAnimation()
  const [contactRef, contactVisible] = useScrollAnimation()

  const heroImages = [
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  const services = [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "ART con reducción de alícuotas",
      description: "Cobertura de riesgos del trabajo con beneficios en alícuotas para PyMEs.",
    },
    {
      icon: <Home className="w-6 h-6 text-primary" />,
      title: "Seguro integral de comercio",
      description: "Protección completa para tu local, mercadería y equipamiento comercial.",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Responsabilidad civil",
      description: "Cobertura ante reclamos de terceros por daños en tu actividad profesional.",
    },
    {
      icon: <Car className="w-6 h-6 text-primary" />,
      title: "Seguro técnico / maquinaria",
      description: "Protección especializada para equipos y maquinaria de tu empresa.",
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Obra social para monotributistas",
      description: "Acceso a cobertura médica para trabajadores independientes.",
    },
    {
      icon: <Plane className="w-6 h-6 text-primary" />,
      title: "Seguro de vida obligatorio",
      description: "Cobertura de vida requerida para empleados en relación de dependencia.",
    },
  ]

  const testimonials = [
    {
      name: "María González",
      comment:
        "Verónica me ayudó a encontrar el seguro perfecto para mi auto. Su atención es excepcional y siempre está disponible para resolver mis dudas.",
    },
    {
      name: "Carlos Rodríguez",
      comment:
        "Gracias a Verónica pude asegurar mi casa con una cobertura integral a un precio muy conveniente. Recomiendo su asesoramiento 100%.",
    },
    {
      name: "Ana Martínez",
      comment:
        "Profesional, confiable y muy humana en su trato. Me acompañó en todo el proceso y me explicó cada detalle con paciencia.",
    },
    {
      name: "Roberto Silva",
      comment:
        "Llevo años trabajando con Verónica. Su seguimiento postventa es impecable y siempre encuentra las mejores opciones del mercado.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length)
  }

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("¡Gracias por tu consulta! Te contactaremos pronto.")
  }

  const openWhatsApp = () => {
    const phoneNumber = "5492235000000" // Reemplazar con el número real
    const message = "Hola Verónica, me interesa conocer más sobre tus servicios de seguros empresariales."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80 // Altura del navbar fijo
      const elementPosition = element.offsetTop - navbarHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
    setIsMenuOpen(false)
  }

  const segurosRowRef = useRef<HTMLDivElement>(null);
  const [showFade, setShowFade] = useState(false);

  // Eliminar test automático de scroll

  useEffect(() => {
    const checkOverflow = () => {
      if (segurosRowRef.current) {
        const hasOverflow = segurosRowRef.current.scrollWidth > segurosRowRef.current.clientWidth;
        setShowFade(hasOverflow);
      }
    };

    // Verificar overflow inicial
    checkOverflow();

    // Agregar listener para resize
    window.addEventListener('resize', checkOverflow);

    // Cleanup
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  const scrollSeguros = (dir: 'left' | 'right') => {
    if (segurosRowRef.current) {
      const container = segurosRowRef.current;
      const cardWidth = 300; // ancho de la card
      const gap = 32; // gap entre cards (8 * 4 = 32px)
      const scrollAmount = cardWidth + gap;
      
      const maxScroll = container.scrollWidth - container.clientWidth;
      const newScrollPosition = dir === 'left' 
        ? Math.max(0, container.scrollLeft - scrollAmount)
        : Math.min(maxScroll, container.scrollLeft + scrollAmount);
      
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToService = (index: number) => {
    if (segurosRowRef.current) {
      const container = segurosRowRef.current;
      const cardWidth = 320; // Ancho de la card
      const gap = 16; // Gap entre cards (8 * 2 = 16px)
      const scrollAmount = cardWidth + gap;

      const newScrollPosition = index * scrollAmount;
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
      setCurrentService(index);
    }
  };

  const [procesoRef, procesoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background shadow-sm" : "bg-background/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-primary mr-3" />
              <span className="text-2xl font-light">Verónica Mercado</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("proceso")}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Cómo funciona
              </button>
              <button
                onClick={() => scrollToSection("testimonios")}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Contacto
              </button>
                             <Button 
                 onClick={openWhatsApp}
                 className="bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-2 rounded-full"
               >
                 <MessageCircle className="w-4 h-4 mr-2" />
                 WhatsApp
               </Button>
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full hover:bg-accent"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full hover:bg-accent"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              )}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-background border-t border-border">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="block px-3 py-3 text-muted-foreground hover:text-primary w-full text-left font-medium"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="block px-3 py-3 text-muted-foreground hover:text-primary w-full text-left font-medium"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection("proceso")}
                  className="block px-3 py-3 text-muted-foreground hover:text-primary w-full text-left font-medium"
                >
                  Cómo funciona
                </button>
                <button
                  onClick={() => scrollToSection("testimonios")}
                  className="block px-3 py-3 text-muted-foreground hover:text-primary w-full text-left font-medium"
                >
                  Testimonios
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="block px-3 py-3 text-muted-foreground hover:text-primary w-full text-left font-medium"
                >
                  Contacto
                </button>
                                 <Button 
                   onClick={openWhatsApp}
                   className="w-full mt-4 bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-2 rounded-full"
                 >
                   <MessageCircle className="w-4 h-4 mr-2" />
                   WhatsApp
                 </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${heroImages[currentHeroImage]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'opacity 0.5s ease-in-out',
          }}
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Overlay más oscuro */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Protegé tu empresa y tu futuro profesional
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Asesoramiento profesional en seguros para empresas, emprendimientos y trabajadores independientes. Análisis gratuito de tu perfil de riesgo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full border-2 border-primary"
            >
              Análisis Gratuito
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("servicios")}
              className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
            >
              Ver Coberturas Empresariales
            </Button>
          </div>
        </div>

        {/* Hero Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroImage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentHeroImage ? "bg-primary border border-primary" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="section-alt py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Clientes satisfechos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Años de experiencia</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Atención disponible</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Compromiso</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" ref={servicesRef} className="services-section py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              ¿Qué seguros comercializo para tu empresa o actividad?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto px-6">
              Seguros especializados para PyMEs, emprendimientos y trabajadores independientes, con productos de compañías líderes del mercado.
            </p>
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">PyME / EMPRESA</h3>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">EMPLEADOS / INDIVIDUAL</h3>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
            </div>
          </div>
          <div className="relative px-12">
            {/* Fade izquierdo */}
            {showFade && (
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-20" />
            )}
            {/* Flecha izquierda */}
            {showFade && (
              <button
                type="button"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-card hover:bg-accent rounded-full w-10 h-10 flex items-center justify-center transition-colors border border-border"
                onClick={() => scrollSeguros('left')}
                aria-label="Ver anterior"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>
            )}
            {/* Contenedor del carrusel */}
            <div
              ref={segurosRowRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 px-2"
              style={{ scrollBehavior: 'smooth' }}
            >
              {services.map((service, index) => (
                <div key={index} className="snap-center flex-shrink-0 w-[320px]">
                  <SeguroCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    secondaryText={
                      index === 0 ? 'Consultar cotización' :
                      index === 1 ? 'Desde $10.000/mes' :
                      index === 2 ? 'Desde $8.000/mes' :
                      index === 3 ? 'Consultar cotización' :
                      index === 4 ? 'Desde $3.500/mes' :
                      index === 5 ? 'Desde $2.000/mes' : undefined
                    }
                  />
                </div>
              ))}
            </div>
            {/* Flecha derecha */}
            {showFade && (
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-card hover:bg-accent rounded-full w-10 h-10 flex items-center justify-center transition-colors border border-border"
                onClick={() => scrollSeguros('right')}
                aria-label="Ver siguiente"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>
            )}
            {/* Fade derecho */}
            {showFade && (
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-20" />
            )}
          </div>
          {/* Indicadores de página */}
          <div className="flex justify-center mt-8 gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentService ? 'bg-primary' : 'bg-foreground/20'
                }`}
                onClick={() => scrollToService(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" ref={processRef} className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cómo trabajo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mi proceso es simple, personalizado y sin compromiso. Te acompaño desde el análisis hasta la implementación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center flex flex-col items-center">
              <div className="relative w-full h-[200px] mb-4">
                <img
                  src="/images/step-1.svg"
                  alt="Análisis de Riesgo"
                  className="w-full h-full"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Análisis Gratuito de Riesgo</h3>
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto my-4">
                1
              </div>
              <p className="text-muted-foreground max-w-xs text-sm">
                Analizamos tu actividad empresarial o independiente para identificar riesgos específicos y evaluar tus coberturas actuales.
              </p>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="relative w-full h-[200px] mb-4">
                <img
                  src="/images/step-2.svg"
                  alt="Cotización Personalizada"
                  className="w-full h-full"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Propuesta Personalizada</h3>
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto my-4">
                2
              </div>
              <p className="text-muted-foreground max-w-xs text-sm">
                Te presento las mejores opciones del mercado adaptadas a tu perfil empresarial, con atención online y personalizada.
              </p>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="relative w-full h-[200px] mb-4">
                <img
                  src="/images/step-3.svg"
                  alt="Implementación y Seguimiento"
                  className="w-full h-full"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Implementación y Seguimiento</h3>
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto my-4">
                3
              </div>
              <p className="text-muted-foreground max-w-xs text-sm">
                Sin compromiso de contratación. Si decidís avanzar, te acompaño en la implementación y seguimiento continuo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" ref={testimonialsRef} className="testimonials-section py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              La confianza de nuestros clientes es nuestro mayor logro.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="text-center p-8 bg-card">
              <CardContent>
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-primary fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-card-foreground mb-6 italic">
                  "{testimonials[currentTestimonial].comment}"
                </blockquote>
                <div className="font-semibold text-lg text-card-foreground">
                  {testimonials[currentTestimonial].name}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-card rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="w-6 h-6 text-muted-foreground" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="bg-card rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="w-6 h-6 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="section-alt py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Resolvemos las dudas más comunes sobre nuestros servicios.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-foreground">
                ¿Qué tipos de seguros ofrecen?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Ofrecemos una amplia gama de seguros: hogar, auto, vida, salud, viaje y más. Cada uno adaptado a tus necesidades específicas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-foreground">
                ¿Cómo funciona el proceso de contratación?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Es muy simple: nos contactás, analizamos tus necesidades, te presentamos las mejores opciones y te acompañamos en todo el proceso.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-foreground">
                ¿Qué pasa si necesito hacer un reclamo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Te acompañamos en todo el proceso de reclamo. Estamos disponibles 24/7 para ayudarte y asegurar que recibas la cobertura que necesitás.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-foreground">
                ¿Pueden ayudarme a comparar diferentes aseguradoras?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                ¡Absolutamente! Trabajamos con las mejores aseguradoras del mercado y te ayudamos a encontrar la opción más conveniente para vos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Sobre mí Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:order-last">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/asesora.jpg"
                  alt="Verónica Mercado - Asesora de Seguros Profesional"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="bg-transparent"
                  priority
                />
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-base text-muted-foreground/80">
                    Años de<br/>Experiencia
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-base text-muted-foreground/80">
                    Clientes<br/>Satisfechos
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary text-sm font-medium">
                  Productora Asesora de Seguros - Mat 101463
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Sobre mí
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-foreground/80">
                  "Soy Verónica Mercado, PAS matriculada. Acompaño a PyMEs, emprendimientos y comercios a proteger lo que construyeron con esfuerzo, ofreciendo asesoramiento integral y acceso a productos aseguradores de primer nivel."
                </p>
                <p className="text-xl text-foreground/80">
                  Con más de 15 años de experiencia, trabajo con atención 100% personalizada, online y flexible, manteniendo un trato directo y humano respaldado por compañías líderes del mercado.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground/80">Asesoramiento 100% personalizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground/80">Atención online y flexible</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground/80">Trato directo y humano</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground/80">Respaldo de compañías líderes</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => scrollToSection("contacto")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full"
                >
                  Contactame
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("servicios")}
                  className="border-2 px-8 py-6 text-lg rounded-full hover:bg-secondary"
                >
                  Ver Servicios
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" ref={contactRef} className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">¿Necesitás un análisis de riesgo?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Con cada consulta, realizo un análisis gratuito del perfil de riesgo de tu actividad, para que sepas si estás bien cubierto o necesitás ajustar tus coberturas.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Credenciales y Respaldo */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Respaldo Profesional
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Productora Asesora de Seguros
                  </h3>
                  <p className="text-primary font-bold text-lg">Mat 101463</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Matriculada por la Superintendencia de Seguros de la Nación
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Compañías Líderes
                  </h3>
                  <p className="text-primary font-bold text-lg">Primer Nivel</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Acceso a productos de las mejores aseguradoras del país
                  </p>
                </div>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
              Sin compromiso de contratación. Mi objetivo es que tomes decisiones informadas, con respaldo y tranquilidad.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 