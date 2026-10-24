import { ExternalLink, Mail } from "lucide-react"
import { EDUCACION_VIAL } from "@/lib/contenido"
import { Aparecer } from "@/components/movimiento"

export function EducacionVial() {
  return (
    <section aria-labelledby="vial-titulo" className="bg-white py-16 lg:py-20">
      <Aparecer className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-8 rounded-3xl bg-pizarra-oscura p-8 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div className="max-w-2xl">
            <h2 id="vial-titulo" className="font-serif text-3xl leading-tight font-medium lg:text-4xl">
              Charlas de educación vial
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-white/80">
              Además de asesorar, doy charlas de seguridad vial junto a AMPAS. Si querés llevarlas a tu institución o
              empresa, mirá la propuesta o escribime.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href={EDUCACION_VIAL.brochure}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-dorado-claro px-6 py-3 font-semibold whitespace-nowrap text-tinta transition-colors hover:bg-white"
            >
              Ver la propuesta
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${EDUCACION_VIAL.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {EDUCACION_VIAL.email}
            </a>
          </div>
        </div>
      </Aparecer>
    </section>
  )
}
