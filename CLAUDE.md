# Landing Verónica Mercado — Seguros

Landing de una productora de seguros. One-page, en español rioplatense. Deploy en Vercel desde `master`.

## Prohibido

- **Nunca leer ni editar `.env.local`** (ni ningún `.env*`): tiene las claves de EmailJS. Si hace falta saber qué
  variables existen, están nombradas en `components/contact-form.tsx` y en `EMAILJS_SETUP.md`.
- Sin commit ni push sin OK explícito.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19.2 + TypeScript.
- Tailwind CSS 4 (config en CSS, `@theme inline` en `app/globals.css`) + shadcn/ui (Radix) en `components/ui/`.
- Animación: `framer-motion` (versión fijada). GSAP está instalado pero sin uso; Lenis se sacó a propósito (scroll
  nativo).
- Formulario: `@emailjs/browser` desde el cliente (`components/contact-form.tsx`).
- `@vercel/analytics` en `app/layout.tsx`.
- Gestor: **pnpm** (hay `pnpm-lock.yaml`; Vercel instala con lockfile congelado, así que `package.json` y el lock
  van siempre juntos). Versiones exactas para dependencias nuevas (`pnpm add -E`).

## Comandos

```bash
pnpm dev     # http://localhost:3000
pnpm build   # verificación antes de cerrar cualquier cambio
pnpm lint    # el script existe pero eslint no está instalado: hoy falla
```

`next.config.mjs` tiene `typescript.ignoreBuildErrors: true`: el build no valida tipos. Para chequearlos,
`pnpm exec tsc --noEmit`.

## Estructura

- `app/layout.tsx`: fuentes (Source Serif 4 → `font-serif` para títulos, Hanken Grotesk → `font-sans`), `<Navbar />`
  sticky, `<Movimiento>` (MotionConfig con `reducedMotion="user"`) y Analytics.
- `app/page.tsx`: `Hero` (#inicio) · `Acompanamiento` (#acompanamiento) · `Coberturas` (#coberturas) · `AboutMe`
  (#sobre-mi) · `Testimonials` (#testimonios) · `EducacionVial` · `ContactForm` (#contacto) · `Footer` ·
  `BotonFlotante` (WhatsApp flotante).
- `components/coberturas.tsx`: grilla bento con pestañas Personas/Empresas/Campo; la cobertura protagonista de cada
  público va en la tarjeta grande bordó. Cada tarjeta abre WhatsApp con la consulta escrita.
- `lib/contenido.ts`: **todo el contenido** (WhatsApp, matrícula, coberturas de Personas/Empresas/Campo, pasos del
  acompañamiento, testimonios reales, educación vial). Se edita ahí, no en los componentes.
- `components/movimiento.tsx`: `Aparecer`, la animación de entrada de secciones (corta, una vez, sin usar en el hero).
- `components/recorrido.tsx`: los pasos de acompañamiento. En escritorio, un teléfono sticky muestra un chat que
  avanza con la etapa activa (IntersectionObserver en el centro de la pantalla) y el hilo dorado se llena con el
  scroll; en mobile, cada paso lleva su `Conversacion`. Es scroll nativo: no pinear ni controlar el scroll.
- `components/boton-flotante.tsx`: WhatsApp flotante (en escritorio aparece después del hero) con un saludo que se
  muestra una vez por visita (`sessionStorage`).
- Hero: `.hero-entra` / `.hero-foto` en `globals.css` animan solo la bajada, los botones y la foto; el `h1` no.
- `public/veronica/`: fotos y logos de Verónica (monograma recortado del sello en `monograma.webp`).
- `app/globals.css`: tokens `--bordo`, `--dorado`, `--pizarra`, `--tinta`, etc., expuestos como clases Tailwind
  (`bg-bordo`, `text-dorado`…). `.dark` es copia de `:root` (no hay modo oscuro real).
- `styles/globals.css`: **muerto** (no se importa; es el default de v0). No editarlo.

## Reglas de diseño

- **Clara y fácil de recorrer, distinta en los detalles.** Estructura conocida; la distinción viene de la foto, la
  tipografía serif, el dorado del logo y detalles cuidados. Nada de información escondida detrás de una interacción,
  scroll controlado ni piezas conceptuales: el usuario las rechazó en los bocetos (rama `bocetos/direcciones`).
- **Eje del mensaje: acompañamiento personal** (antes, durante y después) y comparar las mejores compañías al mejor
  precio.
- **Color:** bordó para toda acción (CTA, links), dorado solo como acento puntual (sello, numerales, líneas finas),
  pizarra de las fotos para el hero y bloques oscuros.
- **Animaciones con propósito y `prefers-reduced-motion` obligatorio:** `Aparecer` y transiciones de interacción,
  todo bajo `MotionConfig reducedMotion="user"`; en CSS, `@media (prefers-reduced-motion: …)`.
- **El CTA de WhatsApp siempre visible:** botón en la barra en ≥640 px y botón flotante en toda la página.
- **LCP cuidado en mobile:** el hero es server component, sin animación de entrada, con `next/image` `priority`.
  Medir con chrome-devtools-mcp (`debug-optimize-lcp`, `a11y-debugging`).
