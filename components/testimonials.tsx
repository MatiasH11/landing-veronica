import { Star } from "lucide-react"
import { TESTIMONIOS } from "@/lib/contenido"
import { Aparecer } from "@/components/movimiento"

export function Testimonials() {
  return (
    <section id="testimonios" aria-labelledby="testimonios-titulo" className="bg-fondo-suave py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Aparecer>
          <h2 id="testimonios-titulo" className="font-serif text-4xl leading-tight font-medium text-tinta lg:text-5xl">
            Lo que cuentan mis clientes
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gris-texto">
            Personas, familias y empresas que ya trabajan conmigo.
          </p>
        </Aparecer>

        {/* Columnas tipo mampostería: cada testimonio ocupa lo que mide su texto */}
        <ul className="mt-12 gap-4 sm:columns-2 lg:columns-3">
          {TESTIMONIOS.map((t, i) => (
            <Aparecer
              as="li"
              key={t.nombre}
              demora={(i % 3) * 0.06}
              className="mb-4 break-inside-avoid rounded-2xl border border-linea bg-white p-6"
            >
              <div className="flex gap-0.5 text-dorado" role="img" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }, (_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 leading-relaxed text-tinta">“{t.texto}”</blockquote>
              <p className="mt-5 font-semibold text-tinta">{t.nombre}</p>
              <p className="text-sm text-gris-texto">{t.detalle}</p>
            </Aparecer>
          ))}
        </ul>
      </div>
    </section>
  )
}
