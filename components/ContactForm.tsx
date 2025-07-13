'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    console.log('Formulario enviado:', formData)
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full max-w-lg space-y-6"
    >
      <div className="relative">
        <input
          type="text"
          id="nombre"
          value={formData.nombre}
          onChange={(e) => setFormData({...formData, nombre: e.target.value})}
          className="peer w-full px-4 py-3 border-2 border-border rounded-lg bg-background outline-none transition-all duration-200 ease-in-out focus:border-[#FFC300]"
          placeholder=" "
          required
        />
        <label
          htmlFor="nombre"
          className="absolute left-4 -top-2.5 bg-background px-1 text-sm text-muted-foreground transition-all duration-200 ease-in-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#FFC300]"
        >
          Nombre
        </label>
      </div>

      <div className="relative">
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="peer w-full px-4 py-3 border-2 border-border rounded-lg bg-background outline-none transition-all duration-200 ease-in-out focus:border-[#FFC300]"
          placeholder=" "
          required
        />
        <label
          htmlFor="email"
          className="absolute left-4 -top-2.5 bg-background px-1 text-sm text-muted-foreground transition-all duration-200 ease-in-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#FFC300]"
        >
          Email
        </label>
      </div>

      <div className="relative">
        <textarea
          id="mensaje"
          value={formData.mensaje}
          onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
          className="peer w-full px-4 py-3 border-2 border-border rounded-lg bg-background outline-none transition-all duration-200 ease-in-out focus:border-[#FFC300] min-h-[120px]"
          placeholder=" "
          required
        />
        <label
          htmlFor="mensaje"
          className="absolute left-4 -top-2.5 bg-background px-1 text-sm text-muted-foreground transition-all duration-200 ease-in-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#FFC300]"
        >
          Mensaje
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-[#FFC300] text-slate-900 font-semibold py-3 px-6 rounded-lg hover:bg-[#e6b100] transition-colors duration-200 ease-in-out"
      >
        Enviar consulta
      </button>
    </form>
  )
} 