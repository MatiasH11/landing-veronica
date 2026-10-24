import Image from "next/image"
import { EMAIL, MATRICULA, REDES, SECCIONES, TELEFONO_VISIBLE, WHATSAPP_NUMERO, whatsappUrl } from "@/lib/contenido"

export function Footer() {
  return (
    <footer className="bg-tinta pb-16 text-white/75 sm:pb-0">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/veronica/monograma.webp" alt="" width={34} height={36} className="h-9 w-auto" />
            <span className="font-serif text-xl text-white">Verónica Mercado</span>
          </div>
          <p className="mt-4 max-w-xs leading-relaxed">
            Productora asesora de seguros. Matrícula {MATRICULA} de la Superintendencia de Seguros de la Nación.
          </p>
        </div>

        <nav aria-label="Secciones">
          <h2 className="font-semibold text-white">Secciones</h2>
          <ul className="mt-4 space-y-2.5">
            {SECCIONES.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="transition-colors hover:text-dorado-claro">
                  {s.nombre}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-semibold text-white">Contacto</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-dorado-claro">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`tel:+${WHATSAPP_NUMERO}`} className="transition-colors hover:text-dorado-claro">
                {TELEFONO_VISIBLE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="break-all transition-colors hover:text-dorado-claro">
                {EMAIL}
              </a>
            </li>
          </ul>
          <ul className="mt-5 flex gap-4">
            {REDES.map((r) => (
              <li key={r.nombre}>
                <a href={r.href} target="_blank" rel="noopener noreferrer" className="text-sm underline underline-offset-4 hover:text-dorado-claro">
                  {r.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm text-white/50 lg:px-8">
          © {new Date().getFullYear()} Verónica Mercado, productora asesora de seguros.
        </p>
      </div>
    </footer>
  )
}
