import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { MATRICULA, whatsappUrl } from "@/lib/contenido"
import foto from "@/public/veronica/escritorio-telefono.jpg"

// Sin "use client" ni animación de entrada: el título y la foto son el LCP y tienen que pintarse de inmediato.
export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-pizarra text-white">
      {/* La foto tiene arriba una pared gris pizarra: el texto se apoya ahí en mobile y al costado en escritorio */}
      <div className="absolute inset-0 -z-10 lg:left-auto lg:w-[56%]">
        <Image
          src={foto}
          alt="Verónica Mercado atendiendo una consulta por teléfono en su escritorio"
          fill
          priority
          placeholder="blur"
          sizes="(min-width: 1024px) 56vw, 100vw"
          className="hero-foto object-cover object-[50%_85%] lg:object-[45%_80%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pizarra via-pizarra/70 to-transparent to-75% lg:bg-gradient-to-r lg:from-pizarra lg:via-pizarra/30 lg:via-25% lg:to-transparent lg:to-50%" />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-4.25rem)] max-w-7xl flex-col px-4 pb-[52svh] pt-10 sm:pb-[48svh] lg:min-h-[44rem] lg:justify-center lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <p className="text-sm text-white/80">Productora asesora de seguros, matrícula {MATRICULA}</p>
          <h1 className="mt-4 font-serif text-[2.6rem] leading-[1.05] font-medium tracking-tight text-balance sm:text-5xl lg:text-[4.25rem]">
            Tu seguro, con alguien que te atiende.
          </h1>
          <p className="hero-entra mt-5 max-w-md text-lg leading-relaxed text-white/90" style={{ animationDelay: "0.15s" }}>
            Comparo entre las mejores compañías para conseguirte la cobertura justa al mejor precio. Y cuando pasa algo,
            me llamás a mí.
          </p>
          <div className="hero-entra mt-8 flex items-center gap-5 sm:gap-3" style={{ animationDelay: "0.3s" }}>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-bordo px-5 py-3.5 font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-bordo-oscuro sm:px-6"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Cotizá por WhatsApp
            </a>
            <a
              href="#coberturas"
              className="inline-flex items-center font-semibold text-white underline underline-offset-4 transition-colors hover:text-dorado-claro sm:rounded-full sm:border sm:border-white/50 sm:px-6 sm:py-3.5 sm:no-underline sm:hover:border-white sm:hover:bg-white/10 sm:hover:text-white"
            >
              Ver coberturas
            </a>
          </div>
        </div>

        <div className="hero-entra mt-10 hidden items-center gap-4 lg:flex" style={{ animationDelay: "0.45s" }}>
          <Image src="/veronica/logo-sello.webp" alt="" width={64} height={64} className="h-16 w-16 rounded-full bg-white p-1" />
          <p className="max-w-xs text-sm leading-snug text-white/80">
            Matriculada en la Superintendencia de Seguros de la Nación y certificada por AMPAS.
          </p>
        </div>
      </div>
    </section>
  )
}
