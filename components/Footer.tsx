import { Phone, Mail, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Verónica Mercado</h3>
            <p className="text-white/70 leading-relaxed">
              Brindamos asesoramiento personalizado en seguros para proteger lo que más te importa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#inicio" className="text-white/70 hover:text-white transition-colors">
                Inicio
              </Link>
              <Link href="#servicios" className="text-white/70 hover:text-white transition-colors">
                Servicios
              </Link>
              <Link href="#como-funciona" className="text-white/70 hover:text-white transition-colors">
                Cómo Funciona
              </Link>
              <Link href="#testimonios" className="text-white/70 hover:text-white transition-colors">
                Testimonios
              </Link>
              <Link href="#contacto" className="text-white/70 hover:text-white transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+5492236011753"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+54 9 223 601 1753</span>
              </a>
              <a
                href="mailto:veronicamercadoseguros@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>veronicamercadoseguros@gmail.com</span>
              </a>
              <a
                href="https://wa.me/5492236011753?text=Hola! Me gustaría obtener una cotización de seguros"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100090866004202&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[var(--light-pink)] rounded-full hover:bg-white hover:text-primary transition-all text-primary"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/veronicamasesor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[var(--light-pink)] rounded-full hover:bg-white hover:text-primary transition-all text-primary"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="http://www.linkedin.com/in/veronica-mercado-4b8b96319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[var(--light-pink)] rounded-full hover:bg-white hover:text-primary transition-all text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/20">
          <p className="text-center text-white/50 text-sm">
            © 2025 Verónica Mercado Seguros. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
