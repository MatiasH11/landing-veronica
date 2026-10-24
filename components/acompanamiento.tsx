import { Aparecer } from "@/components/movimiento"
import { Recorrido } from "@/components/recorrido"

export function Acompanamiento() {
  return (
    <section id="acompanamiento" aria-labelledby="acompanamiento-titulo" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          <Aparecer>
            <h2 id="acompanamiento-titulo" className="font-serif text-4xl leading-tight font-medium text-balance text-tinta lg:text-5xl">
              Un seguro no termina cuando lo contratás.
            </h2>
          </Aparecer>
          <Aparecer demora={0.08}>
            <p className="max-w-xl text-lg leading-relaxed text-gris-texto lg:pt-3">
              Trabajo de forma independiente, con las mejores compañías del mercado. Eso me deja recomendarte lo que te
              conviene a vos y, sobre todo, estar presente en cada etapa: no sos un número de póliza.
            </p>
          </Aparecer>
        </div>

        <Recorrido />
        <p className="mt-10 text-sm text-gris-texto lg:mt-4 lg:pl-16">Conversaciones de ejemplo, para mostrarte cómo trabajo.</p>
      </div>
    </section>
  )
}
