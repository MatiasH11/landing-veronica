import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="text-[#FFC300] text-2xl font-bold">Verónica Mercado</div>
            </Link>
            <p className="text-muted-foreground mb-6">
              Brindamos asesoramiento personalizado en seguros para proteger lo que más te importa.
            </p>
          </div>

          {/* Links útiles */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#inicio" className="text-muted-foreground hover:text-[#FFC300] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="text-muted-foreground hover:text-[#FFC300] transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#como-funciona" className="text-muted-foreground hover:text-[#FFC300] transition-colors">
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link href="/#testimonios" className="text-muted-foreground hover:text-[#FFC300] transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-muted-foreground hover:text-[#FFC300] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <a 
                href="tel:+123456789"
                className="flex items-center space-x-3 text-muted-foreground hover:text-[#FFC300] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <FaPhone className="w-4 h-4" />
                </div>
                <span>+54 123 456 789</span>
              </a>
              <a 
                href="mailto:info@example.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-[#FFC300] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <span>info@example.com</span>
              </a>
              <a 
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-[#FFC300] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <FaWhatsapp className="w-4 h-4" />
                </div>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Redes sociales */}
            <div className="mt-6">
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-[#FFC300] hover:bg-muted/80 transition-all duration-200"
                >
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-[#FFC300] hover:bg-muted/80 transition-all duration-200"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Verónica Mercado Seguros. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 