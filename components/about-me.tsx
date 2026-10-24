import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { MATRICULA, whatsappUrl } from "@/lib/contenido"
import { Aparecer } from "@/components/movimiento"
import { Contador } from "@/components/contador"
import retrato from "@/public/veronica/retrato.jpg"

// Cifras de la landing anterior: confirmarlas con Verónica antes de publicar
const CIFRAS = [
  { valor: "5+", texto: "años asesorando" },
  { valor: "500+", texto: "clientes acompañados" },
]

export function AboutMe() {
  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-titulo" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-[5fr_6fr] lg:gap-20 lg:px-8">
        <Aparecer className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Marco dorado desplazado, como un paspartú: el único adorno de la sección */}
          <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-dorado/70" />
          <Image
            src={retrato}
            alt="Retrato de Verónica Mercado"
            placeholder="blur"
            sizes="(min-width: 1024px) 40vw, (min-width: 448px) 448px, 100vw"
            className="relative aspect-[4/5] w-full rounded-2xl object-cover object-top"
          />
          <Image
            src="/veronica/logo-sello.webp"
            alt="Sello de Verónica Mercado, productora asesora de seguros"
            width={112}
            height={112}
            className="absolute -right-3 -bottom-8 h-24 w-24 rounded-full bg-white p-1.5 shadow-lg sm:h-28 sm:w-28 lg:-right-8"
          />
        </Aparecer>

        <Aparecer demora={0.1}>
          <h2 id="sobre-mi-titulo" className="font-serif text-4xl leading-tight font-medium text-tinta lg:text-5xl">
            Soy Verónica Mercado.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-gris-texto">
            <p>
              Soy productora asesora de seguros. Mi trabajo es acompañar a personas, empresas y productores del campo
              para que tengan la cobertura que realmente necesitan.
            </p>
            <p>
              Trabajo de forma independiente, con el respaldo de brokers y aseguradoras líderes. Eso me permite
              comparar y acercarte la mejor opción para cada situación.
            </p>
          </div>

          <blockquote className="mt-8 border-l-2 border-dorado pl-5 font-serif text-xl leading-snug text-tinta italic">
            Creo en la importancia social de mi profesión: informar, orientar y dar tranquilidad a quienes confían en mí.
          </blockquote>

          <dl className="mt-10 grid max-w-md grid-cols-2 gap-6 border-y border-linea py-6">
            {CIFRAS.map((c) => (
              <div key={c.texto}>
                <dt className="sr-only">{c.texto}</dt>
                <dd className="font-serif text-4xl text-bordo">
                  <Contador valor={c.valor} />
                </dd>
                <dd className="mt-1 text-sm text-gris-texto">{c.texto}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-sm text-gris-texto">
            Matrícula {MATRICULA} de la Superintendencia de Seguros de la Nación. Certificada por AMPAS.
          </p>

          <a
            href={whatsappUrl("Hola Verónica, quiero hacerte una consulta")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-bordo px-6 py-3.5 font-semibold text-white transition-colors hover:bg-bordo-oscuro"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Escribime por WhatsApp
          </a>
        </Aparecer>
      </div>
    </section>
  )
}
