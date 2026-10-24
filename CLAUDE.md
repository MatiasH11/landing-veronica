# Landing Verónica Mercado — Seguros

Landing de una productora de seguros. One-page, en español rioplatense. Deploy en Vercel desde `master`.

## Prohibido

- **Nunca leer ni editar `.env.local`** (ni ningún `.env*`): tiene las claves de EmailJS. Si hace falta saber qué
  variables existen, están nombradas en `components/contact-form.tsx` y en `EMAILJS_SETUP.md`.
- Sin commit ni push sin OK explícito.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19.2 + TypeScript.
- Tailwind CSS 4 (config en CSS, `@theme inline` en `app/globals.css`) + shadcn/ui (Radix) en `components/ui/`.
- Animación: `framer-motion` (versión fijada). GSAP + ScrollTrigger y Lenis, si están en `package.json`.
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

- `app/layout.tsx`: fuentes (Inter → `font-sans`, Outfit → `font-heading`), `<Navbar />` fijo y Analytics.
- `app/page.tsx`: orden de secciones → `Hero` (#inicio) · `TrustBadges` · `InsuranceServices` (#servicios) ·
  `HowIWork` (#como-funciona) · `AboutMe` (#sobre-mi) · `Testimonials` (#testimonios) · `ContactForm` (#contacto) ·
  `Footer`. Los anchors los usan navbar y footer.
- `components/*.tsx`: una sección por archivo, todas `"use client"` con framer-motion (`whileInView`).
- `app/globals.css`: tokens de marca (bordó `--primary: #78020E`, `--light-pink: #FFE2E6`). `.dark` es copia de
  `:root` (no hay modo oscuro real).
- `styles/globals.css`: **muerto** (no se importa; es el default de v0). No editarlo.
- WhatsApp: `https://wa.me/5492236011753?text=...` repetido en hero, navbar, servicios, cómo trabajo, testimonios,
  contacto y footer.

## Reglas de diseño (rediseño)

- **Nada de landing estándar**: dirección propia (guía: skill `frontend-design`; ilustraciones isométricas de
  coberturas: skill `anatomy`). Distinta, pero con la sobriedad y confianza del rubro seguros.
- **Animaciones con propósito**: cada una explica, guía o da feedback. Nada decorativo que demore el contenido.
- **`prefers-reduced-motion` obligatorio** en todo movimiento:
  - CSS: `@media (prefers-reduced-motion: reduce)`.
  - framer-motion: `<MotionConfig reducedMotion="user">` (hoy no está en ningún lado) o `useReducedMotion()`.
  - GSAP: `gsap.matchMedia()` con `(prefers-reduced-motion: no-preference)`.
  - Lenis lo respeta por defecto (`respectReducedMotion`); no desactivarlo.
- **El CTA de cotización / WhatsApp siempre visible**: en mobile y desktop, en cualquier punto del scroll, sin
  quedar tapado por animaciones, pins de ScrollTrigger ni el menú.
- **LCP cuidado en mobile**: el hero no puede depender de JS ni de una animación de entrada para mostrarse.
  Hoy el hero usa `<img>` crudo, `images.unoptimized: true` y la foto de "Sobre mí" viene de un blob remoto de
  Vercel: son las palancas a revisar. Medir con chrome-devtools-mcp (`debug-optimize-lcp`, `a11y-debugging`).
- **Scroll suave**: si se integra Lenis, sacar `html { scroll-behavior: smooth }` de `app/globals.css` (choca con
  Lenis) y resolver los anchors con la opción `anchors` de Lenis o `lenis.scrollTo`.
- GSAP en React: siempre `useGSAP()` de `@gsap/react` (limpieza automática), plugins registrados una vez en un
  módulo cliente. `app/layout.tsx` es server component: los providers de animación van en un wrapper `"use client"`.
