import { Phone, Mail, MessageCircle, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">Verónica Mercado</h3>
            <p className="text-slate-400 leading-relaxed">
              Brindamos asesoramiento personalizado en seguros para proteger lo que más te importa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#inicio" className="text-slate-400 hover:text-yellow-500 transition-colors">
                Inicio
              </Link>
              <Link href="#servicios" className="text-slate-400 hover:text-yellow-500 transition-colors">
                Servicios
              </Link>
              <Link href="#como-funciona" className="text-slate-400 hover:text-yellow-500 transition-colors">
                Cómo Funciona
              </Link>
              <Link href="#testimonios" className="text-slate-400 hover:text-yellow-500 transition-colors">
                Testimonios
              </Link>
              <Link href="#contacto" className="text-slate-400 hover:text-yellow-500 transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+541234567890"
                className="flex items-center gap-3 text-slate-400 hover:text-yellow-500 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+54 123 456 789</span>
              </a>
              <a
                href="mailto:info@example.com"
                className="flex items-center gap-3 text-slate-400 hover:text-yellow-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@example.com</span>
              </a>
              <a
                href="https://wa.me/541234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-yellow-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-full hover:bg-yellow-500/10 hover:text-yellow-500 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-full hover:bg-yellow-500/10 hover:text-yellow-500 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800">
          <p className="text-center text-slate-500 text-sm">
            © 2025 Verónica Mercado Seguros. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
