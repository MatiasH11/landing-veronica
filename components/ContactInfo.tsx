import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-[#FFC300]">Información de Contacto</h3>
        <p className="text-gray-400">
          Estamos disponibles para ayudarte en cualquier momento. No dudes en contactarnos.
        </p>
      </div>

      <div className="space-y-6">
        <a 
          href="tel:+123456789" 
          className="flex items-center space-x-4 text-gray-400 hover:text-[#FFC300] transition-colors duration-200"
        >
          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <FaPhone className="w-5 h-5" />
          </div>
          <span>+54 123 456 789</span>
        </a>

        <a 
          href="mailto:info@example.com"
          className="flex items-center space-x-4 text-gray-400 hover:text-[#FFC300] transition-colors duration-200"
        >
          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <FaEnvelope className="w-5 h-5" />
          </div>
          <span>info@example.com</span>
        </a>

        <a 
          href="https://wa.me/123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 text-gray-400 hover:text-[#FFC300] transition-colors duration-200"
        >
          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <FaWhatsapp className="w-5 h-5" />
          </div>
          <span>WhatsApp</span>
        </a>
      </div>

      <div className="pt-6 border-t border-gray-700">
        <h4 className="text-sm font-medium text-gray-400 mb-4">Síguenos en redes sociales</h4>
        <div className="flex space-x-4">
          <a 
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-[#FFC300] hover:bg-gray-700 transition-all duration-200"
          >
            <FaFacebook className="w-5 h-5" />
          </a>
          <a 
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-[#FFC300] hover:bg-gray-700 transition-all duration-200"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
} 