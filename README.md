# Landing Page - Verónica Mercado Seguros

Landing page moderna y responsive para Verónica Mercado, asesora de seguros.

## Tecnologías Utilizadas

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **shadcn/ui** - Componentes de UI
- **Lucide React** - Iconos
- **Radix UI** - Componentes primitivos

## Características

- ✅ Diseño responsive
- ✅ Animaciones de scroll
- ✅ Navegación suave
- ✅ Formulario de contacto
- ✅ Carrusel de testimonios
- ✅ Sección de FAQ
- ✅ Optimizado para SEO
- ✅ Carga rápida

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd landing-veronica
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Ejecuta la aplicación en modo producción
- `npm run lint` - Ejecuta el linter

## Estructura del Proyecto

```
landing-veronica/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   ├── loading.tsx        # Componente de carga
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
│   └── ui/               # Componentes de shadcn/ui
├── lib/                  # Utilidades
│   └── utils.ts          # Funciones de utilidad
├── public/               # Archivos estáticos
└── ...config files       # Archivos de configuración
```

## Deploy

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Conecta tu repositorio con Vercel
3. Deploy automático en 2 minutos

### Otros Hostings

El proyecto es compatible con cualquier hosting que soporte Next.js:
- Netlify
- Railway
- DigitalOcean
- AWS Amplify

## Personalización

### Colores
Los colores principales se pueden modificar en `tailwind.config.js` y `app/globals.css`.

### Contenido
El contenido se puede editar directamente en `app/page.tsx`.

### Imágenes
Las imágenes del hero se pueden cambiar en el array `heroImages`.

## Soporte

Para soporte técnico o consultas sobre el proyecto, contacta al desarrollador.

## Licencia

Este proyecto es privado y está destinado exclusivamente para Verónica Mercado Seguros. 