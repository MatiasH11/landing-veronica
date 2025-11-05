"use client"

import { motion } from "framer-motion"
import { Shield, Award } from "lucide-react"

export function TrustBadges() {
  return (
    <section className="relative py-16 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
        >
          Respaldo Profesional
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-500/10 rounded-xl">
                  <Shield className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Productora Asesora de Seguros</h3>
                  <p className="text-2xl font-bold text-yellow-500 mb-2">Mat 101463</p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Matriculada por la Superintendencia de Seguros de la Nación
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-500/10 rounded-xl">
                  <Award className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Compañías Líderes</h3>
                  <p className="text-2xl font-bold text-yellow-500 mb-2">Primer Nivel</p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Acceso a productos de las mejores aseguradoras del país
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-slate-300 max-w-3xl mx-auto leading-relaxed"
        >
          Sin compromiso de contratación. Mi objetivo es que tomes decisiones informadas, con respaldo y tranquilidad.
        </motion.p>
      </div>
    </section>
  )
}
