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

// Cada público lleva un consejo de Verónica.
// Los consejos son borradores: Verónica tiene que escribirlos o validarlos antes de publicar.
export const PUBLICOS: { id: Publico; nombre: string; bajada: string; consejo: string }[] = [
  {
    id: "personas",
    nombre: "Personas",
    bajada: "Para vos, tu familia, tu casa y lo que usás todos los días.",
    consejo: "Antes de renovar, fijate si tu póliza cubre granizo y hasta qué monto. Es de las cosas que más conviene revisar cada año.",
  },
  {
    id: "empresas",
    nombre: "Empresas",
    bajada: "Para comercios, PyMEs y profesionales independientes.",
    consejo: "Asegurá la mercadería y los equipos por lo que valen hoy, no por lo que valían cuando abriste. Actualizar las sumas evita sorpresas.",
  },
  {
    id: "campo",
    nombre: "Campo",
    bajada: "Asesoramiento integral para el productor: la cosecha, la hacienda, las máquinas y la gente.",
    consejo: "Contratá la cobertura de granizo antes de que arranque la campaña. Si esperás a ver el cielo, puede ser tarde.",
  },
]

export interface Cobertura {
  nombre: string
  // La pregunta que alguien se hace antes de saber qué seguro necesita: es el título de la tarjeta
  situacion: string
  descripcion: string
  incluye: string[]
}

export const COBERTURAS: Record<Publico, Cobertura[]> = {
  personas: [
    {
      nombre: "Auto",
      situacion: "¿Y si me roban el auto o me chocan?",
      descripcion: "Desde responsabilidad civil hasta todo riesgo, con auxilio mecánico.",
      incluye: ["Responsabilidad civil", "Robo e incendio", "Granizo (según el plan)", "Grúa 24 h"],
    },
    {
      nombre: "Moto",
      situacion: "¿Y si me roban la moto en la puerta del trabajo?",
      descripcion: "Para el uso de todos los días, en la ciudad o en la ruta.",
      incluye: ["Responsabilidad civil", "Robo total", "Asistencia en ruta"],
    },
    {
      nombre: "Hogar",
      situacion: "¿Y si se rompe un caño y le arruino el techo al vecino?",
      descripcion: "Combinado familiar: tu casa y lo que hay adentro, ante varios riesgos a la vez.",
      incluye: ["Incendio", "Robo de contenido", "Daños por agua", "Responsabilidad civil"],
    },
    {
      nombre: "Vida",
      situacion: "Si me pasa algo, ¿cómo quedan los míos?",
      descripcion: "Un respaldo económico para tu familia si a vos te pasa algo.",
      incluye: ["Fallecimiento", "Invalidez total", "Beneficiarios a tu elección"],
    },
    {
      nombre: "Accidentes personales",
      situacion: "¿Y si me accidento trabajando por mi cuenta?",
      descripcion: "Una indemnización ante accidentes, en el trabajo, en la calle o haciendo deporte.",
      incluye: ["Muerte accidental", "Invalidez", "Gastos médicos"],
    },
    {
      nombre: "Sepelio",
      situacion: "¿Puedo dejar resuelto el sepelio de mi familia?",
      descripcion: "El servicio resuelto de antemano, para que nadie tenga que ocuparse en ese momento.",
      incluye: ["Servicio completo", "Grupo familiar", "Atención inmediata"],
    },
  ],
  empresas: [
    {
      nombre: "Flota",
      situacion: "¿Puedo tener todos los vehículos en una sola póliza?",
      descripcion: "Todos los vehículos de la empresa en una sola gestión y una sola renovación.",
      incluye: ["Responsabilidad civil", "Robo e incendio", "Asistencia 24 h"],
    },
    {
      nombre: "Integral de comercio",
      situacion: "¿Y si se inunda el local o me roban la mercadería?",
      descripcion: "El local, la mercadería y los equipos, en una misma póliza.",
      incluye: ["Incendio", "Robo", "Cristales", "Equipos electrónicos"],
    },
    {
      nombre: "Responsabilidad civil",
      situacion: "¿Y si un cliente se lastima en mi local?",
      descripcion: "Respaldo ante reclamos de terceros por daños que cause tu actividad.",
      incluye: ["Daños a terceros", "Gastos de defensa", "Responsabilidad profesional"],
    },
    {
      nombre: "Vida colectivo",
      situacion: "¿Cómo le doy a mi equipo un beneficio que se note?",
      descripcion: "Un beneficio concreto para tu equipo y sus familias.",
      incluye: ["Obligatorio y optativo", "Altas y bajas simples"],
    },
    {
      nombre: "Accidentes de trabajo",
      situacion: "Contraté a mi primer empleado, ¿qué necesito?",
      descripcion: "Cobertura para tu gente ante accidentes en el trabajo o en el trayecto.",
      incluye: ["ART", "Accidentes personales", "Prestaciones médicas"],
    },
    {
      nombre: "Salud empresarial",
      situacion: "¿Puedo sumar a mi equipo a un plan de salud?",
      descripcion: "Planes de salud corporativos para el bienestar de tu equipo.",
      incluye: ["Planes corporativos", "Grupo familiar", "Comparación de cartillas"],
    },
  ],
  campo: [
    {
      nombre: "Cultivos",
      situacion: "¿Y si cae granizo antes de la cosecha?",
      descripcion: "La cosecha protegida desde la siembra hasta que sale del lote.",
      incluye: ["Granizo", "Multirriesgo agrícola", "Incendio"],
    },
    {
      nombre: "Maquinaria agrícola",
      situacion: "¿Y si la cosechadora se rompe en plena campaña?",
      descripcion: "Tractores, cosechadoras y equipos, trabajando o en tránsito.",
      incluye: ["Daños propios", "Robo", "Responsabilidad civil"],
    },
    {
      nombre: "Hacienda",
      situacion: "¿Y si pierdo animales en un traslado?",
      descripcion: "Los animales del establecimiento, en el campo o en traslado.",
      incluye: ["Muerte por accidente", "Transporte", "Robo"],
    },
    {
      nombre: "Vehículos rurales",
      situacion: "¿Me cubre la camioneta en los caminos de tierra?",
      descripcion: "Camionetas y utilitarios que se usan en caminos rurales y en la ruta.",
      incluye: ["Responsabilidad civil", "Robo e incendio", "Asistencia"],
    },
    {
      nombre: "Instalaciones del establecimiento",
      situacion: "¿Y si un temporal me vuela el techo del galpón?",
      descripcion: "Galpones, silos, casa y equipos del campo.",
      incluye: ["Incendio", "Vendaval", "Robo"],
    },
    {
      nombre: "Personal rural",
      situacion: "¿Qué necesito para la gente que trabaja en el campo?",
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
    texto:
      "Me contás qué tenés y qué te preocupa. Comparo entre las mejores compañías y te muestro las opciones con el mejor precio para lo que necesitás, no la más cara.",
    chat: {
      cliente: { texto: "Hola Vero, tengo un Gol 2018. ¿Qué seguro me conviene?", hora: "10:02" },
      veronica: {
        texto: "¡Hola! Te comparé tres compañías. Esta te cubre granizo y es la que mejor sale para el uso que le das. ¿Te la explico?",
        hora: "10:15",
      },
    },
  },
  {
    momento: "Durante",
    cuando: "Una semana después",
    titulo: "Te explico tu póliza",
    texto:
      "Antes de firmar, repasamos qué cubre y qué no. Sin letra chica ni sorpresas, y con renovaciones que reviso por vos cada año.",
    chat: {
      cliente: { texto: "Antes de firmar: si me roban las ruedas, ¿estoy cubierto?", hora: "16:40" },
      veronica: {
        texto: "En este plan, no. Si te importa, lo sumamos por una diferencia chica. Te mando un resumen de todo lo que cubre.",
        hora: "16:48",
      },
    },
  },
  {
    momento: "Después",
    cuando: "Siete meses después",
    titulo: "Estoy cuando pasa algo",
    texto:
      "Si tenés un siniestro, me llamás a mí, no a un 0800. Te guío con la denuncia, los papeles y los tiempos hasta que se resuelva.",
    chat: {
      cliente: { texto: "Me chocaron en la Costa 😟 ¿Qué hago?", hora: "19:31" },
      veronica: {
        texto: "Tranqui, ¿estás bien? Sacale fotos a todo y pedile los datos del seguro al otro. Después te ayudo con la denuncia.",
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
