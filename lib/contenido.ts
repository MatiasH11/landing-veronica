// Contenido de la landing en un solo lugar. Las coberturas de Campo y los ítems de "incluye"
// son orientativos: validarlos con Verónica antes de publicar.

export const WHATSAPP_NUMERO = "5492236011753"
export const TELEFONO_VISIBLE = "+54 9 223 601 1753"
export const EMAIL = "veronicamercadoseguros@gmail.com"
export const MATRICULA = "101463"

export function whatsappUrl(mensaje = "Hola Verónica, quiero cotizar un seguro") {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`
}

export const REDES = [
  { nombre: "Instagram", href: "https://www.instagram.com/veronicamasesor" },
  { nombre: "Facebook", href: "https://www.facebook.com/profile.php?id=100090866004202&mibextid=ZbWKwL" },
  { nombre: "LinkedIn", href: "http://www.linkedin.com/in/veronica-mercado-4b8b96319" },
]

export const SECCIONES = [
  { nombre: "Cómo te acompaño", href: "#acompanamiento" },
  { nombre: "Coberturas", href: "#coberturas" },
  { nombre: "Sobre mí", href: "#sobre-mi" },
  { nombre: "Testimonios", href: "#testimonios" },
  { nombre: "Contacto", href: "#contacto" },
]

export type Publico = "personas" | "empresas" | "campo"

export const PUBLICOS: { id: Publico; nombre: string }[] = [
  { id: "personas", nombre: "Personas" },
  { id: "empresas", nombre: "Empresas" },
  { id: "campo", nombre: "Campo" },
]

// Cada cobertura se muestra como una respuesta rápida de chat: ícono y nombre (o "etiqueta" si el nombre es largo).
// "corto" es el detalle que aparece al pasar el mouse. "icono" es la clave del ícono de lucide en coberturas.tsx.
export interface Cobertura {
  nombre: string
  etiqueta?: string
  corto: string
  icono: string
  descripcion: string
  incluye: string[]
}

export const COBERTURAS: Record<Publico, Cobertura[]> = {
  personas: [
    {
      nombre: "Auto",
      corto: "Robo, choque y granizo",
      icono: "auto",
      descripcion: "Desde responsabilidad civil hasta todo riesgo, con auxilio mecánico.",
      incluye: ["Responsabilidad civil", "Robo e incendio", "Granizo (según el plan)", "Grúa 24 h"],
    },
    {
      nombre: "Moto",
      corto: "Robo y responsabilidad civil",
      icono: "moto",
      descripcion: "Para el uso de todos los días, en la ciudad o en la ruta.",
      incluye: ["Responsabilidad civil", "Robo total", "Asistencia en ruta"],
    },
    {
      nombre: "Hogar",
      corto: "Incendio, robo y agua",
      icono: "hogar",
      descripcion: "Combinado familiar: tu casa y lo que hay adentro, ante varios riesgos a la vez.",
      incluye: ["Incendio", "Robo de contenido", "Daños por agua", "Responsabilidad civil"],
    },
    {
      nombre: "Vida",
      corto: "Respaldo para tu familia",
      icono: "vida",
      descripcion: "Un respaldo económico para tu familia si a vos te pasa algo.",
      incluye: ["Fallecimiento", "Invalidez total", "Beneficiarios a tu elección"],
    },
    {
      nombre: "Accidentes personales",
      etiqueta: "Accidentes",
      corto: "Trabajo, calle y deporte",
      icono: "accidentes",
      descripcion: "Una indemnización ante accidentes, en el trabajo, en la calle o haciendo deporte.",
      incluye: ["Muerte accidental", "Invalidez", "Gastos médicos"],
    },
    {
      nombre: "Sepelio",
      corto: "Resuelto de antemano",
      icono: "sepelio",
      descripcion: "El servicio resuelto de antemano, para que nadie tenga que ocuparse en ese momento.",
      incluye: ["Servicio completo", "Grupo familiar", "Atención inmediata"],
    },
  ],
  empresas: [
    {
      nombre: "Flota",
      corto: "Todos los vehículos juntos",
      icono: "flota",
      descripcion: "Todos los vehículos de la empresa en una sola gestión y una sola renovación.",
      incluye: ["Responsabilidad civil", "Robo e incendio", "Asistencia 24 h"],
    },
    {
      nombre: "Integral de comercio",
      etiqueta: "Comercio",
      corto: "Local, mercadería y equipos",
      icono: "comercio",
      descripcion: "El local, la mercadería y los equipos, en una misma póliza.",
      incluye: ["Incendio", "Robo", "Cristales", "Equipos electrónicos"],
    },
    {
      nombre: "Responsabilidad civil",
      corto: "Reclamos de terceros",
      icono: "rc",
      descripcion: "Respaldo ante reclamos de terceros por daños que cause tu actividad.",
      incluye: ["Daños a terceros", "Gastos de defensa", "Responsabilidad profesional"],
    },
    {
      nombre: "Vida colectivo",
      corto: "Un beneficio para tu equipo",
      icono: "vida-colectivo",
      descripcion: "Un beneficio concreto para tu equipo y sus familias.",
      incluye: ["Obligatorio y optativo", "Altas y bajas simples"],
    },
    {
      nombre: "Accidentes de trabajo",
      etiqueta: "ART",
      corto: "ART y accidentes",
      icono: "trabajo",
      descripcion: "Cobertura para tu gente ante accidentes en el trabajo o en el trayecto.",
      incluye: ["ART", "Accidentes personales", "Prestaciones médicas"],
    },
    {
      nombre: "Salud empresarial",
      corto: "Planes corporativos",
      icono: "salud",
      descripcion: "Planes de salud corporativos para el bienestar de tu equipo.",
      incluye: ["Planes corporativos", "Grupo familiar", "Comparación de cartillas"],
    },
  ],
  campo: [
    {
      nombre: "Cultivos",
      corto: "Granizo y multirriesgo",
      icono: "cultivos",
      descripcion: "La cosecha protegida desde la siembra hasta que sale del lote.",
      incluye: ["Granizo", "Multirriesgo agrícola", "Incendio"],
    },
    {
      nombre: "Maquinaria agrícola",
      etiqueta: "Maquinaria",
      corto: "Tractores y cosechadoras",
      icono: "maquinaria",
      descripcion: "Tractores, cosechadoras y equipos, trabajando o en tránsito.",
      incluye: ["Daños propios", "Robo", "Responsabilidad civil"],
    },
    {
      nombre: "Hacienda",
      corto: "En el campo o en traslado",
      icono: "hacienda",
      descripcion: "Los animales del establecimiento, en el campo o en traslado.",
      incluye: ["Muerte por accidente", "Transporte", "Robo"],
    },
    {
      nombre: "Vehículos rurales",
      corto: "Camionetas y utilitarios",
      icono: "vehiculos-rurales",
      descripcion: "Camionetas y utilitarios que se usan en caminos rurales y en la ruta.",
      incluye: ["Responsabilidad civil", "Robo e incendio", "Asistencia"],
    },
    {
      nombre: "Instalaciones del establecimiento",
      etiqueta: "Galpones e instalaciones",
      corto: "Galpones, silos y casa",
      icono: "instalaciones",
      descripcion: "Galpones, silos, casa y equipos del campo.",
      incluye: ["Incendio", "Vendaval", "Robo"],
    },
    {
      nombre: "Personal rural",
      corto: "ART y vida obligatorio",
      icono: "personal-rural",
      descripcion: "Cobertura para quienes trabajan en el campo.",
      incluye: ["ART", "Vida obligatorio", "Accidentes personales"],
    },
  ],
}

export interface Mensaje {
  texto: string
  hora: string
}

// Antes, durante y después: es una secuencia real, por eso va numerada en la página.
// Los chats son ejemplos ilustrativos (la página lo aclara), no conversaciones reales de clientes.
export const ACOMPANAMIENTO: {
  momento: string
  cuando: string
  titulo: string
  texto: string
  chat: { cliente: Mensaje; veronica: Mensaje }
}[] = [
  {
    momento: "Antes",
    cuando: "Marzo",
    titulo: "Escucho y comparo",
    texto: "Comparo compañías y te muestro la mejor opción para vos, no la más cara.",
    chat: {
      cliente: { texto: "Hola Vero, tengo un Gol 2018. ¿Qué seguro me conviene?", hora: "10:02" },
      veronica: {
        texto: "¡Hola! Comparé tres compañías: esta te cubre granizo y es la que mejor sale. ¿Te la explico?",
        hora: "10:15",
      },
    },
  },
  {
    momento: "Durante",
    cuando: "Una semana después",
    titulo: "Te explico tu póliza",
    texto: "Repasamos qué cubre y qué no, sin letra chica.",
    chat: {
      cliente: { texto: "Antes de firmar: si me roban las ruedas, ¿estoy cubierto?", hora: "16:40" },
      veronica: {
        texto: "En este plan, no. Lo podemos sumar por una diferencia chica.",
        hora: "16:48",
      },
    },
  },
  {
    momento: "Después",
    cuando: "Siete meses después",
    titulo: "Estoy cuando pasa algo",
    texto: "Si pasa algo, me llamás a mí, no a un 0800.",
    chat: {
      cliente: { texto: "Me chocaron en la Costa 😟 ¿Qué hago?", hora: "19:31" },
      veronica: {
        texto: "Tranqui, ¿estás bien? Sacá fotos y pedile los datos del seguro. Yo te ayudo con la denuncia.",
        hora: "19:34",
      },
    },
  },
]

export const TESTIMONIOS = [
  {
    nombre: "Laura Martínez",
    detalle: "Seguro de auto",
    texto: "Después de un accidente, Verónica me guió en todo el proceso. Su respaldo hizo que todo fuera mucho más fácil.",
  },
  {
    nombre: "Diego Pérez",
    detalle: "Empresario, varios seguros",
    texto: "Trabajo con Verónica hace más de 3 años. Su atención es impecable, siempre disponible. Una profesional de primer nivel.",
  },
  {
    nombre: "Patricia Ruiz",
    detalle: "Seguro de vida",
    texto: "Me asesoró con paciencia y claridad. Ahora mis hijos están protegidos. Muy agradecida por su dedicación.",
  },
  {
    nombre: "María González",
    detalle: "Dueña de PyME",
    texto: "Verónica me ayudó a encontrar la cobertura perfecta para mi negocio. Su asesoramiento personalizado fue excepcional.",
  },
  {
    nombre: "Carlos Rodríguez",
    detalle: "Seguro de vida",
    texto: "El proceso fue muy simple. Me explicó todas las opciones claramente y encontramos la mejor solución para mi familia.",
  },
  {
    nombre: "Javier Morales",
    detalle: "Seguro de auto",
    texto: "Necesitaba cobertura especial para mi trabajo. Verónica conoce el mercado y consiguió el mejor precio.",
  },
  {
    nombre: "Ana Sánchez",
    detalle: "Combinado familiar",
    texto: "El seguro combinado cubre todo lo que necesito. Verónica fue muy profesional y me dio la confianza que buscaba.",
  },
  {
    nombre: "Martín Silva",
    detalle: "Dueño de local",
    texto: "Proteger mi local era fundamental. Verónica me consiguió una póliza completa a un precio justo.",
  },
  {
    nombre: "Fernando Castro",
    detalle: "Responsabilidad civil",
    texto: "El seguro de responsabilidad profesional era complejo. Verónica lo simplificó y encontró la mejor opción.",
  },
]

export const EDUCACION_VIAL = {
  email: "miprimeralicenciaok@gmail.com",
  brochure: "https://canva.link/ampas-vial-brochure-de-seguridad-vial",
}
