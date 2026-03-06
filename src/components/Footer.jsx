'use client'

import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Sección Información del Hotel */}
          <motion.div variants={itemVariants}>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-950">Palmeyras Inn</h3>
              <p className="text-sm text-gray-500 mt-2">Vive la experiencia hotelera más exclusiva del país en Palmeyras Inn.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <p className="text-sm">Av. Principal 123, Capital</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-400" />
                <a href="tel:+1234567890" className="text-sm hover:text-gray-950 transition">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-400" />
                <a href="mailto:info@palmeyrasinn.com" className="text-sm hover:text-gray-950 transition">
                  info@palmeyrasinn.com
                </a>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-700 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-700 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-700 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-700 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Información */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold text-gray-950 uppercase tracking-wide mb-6">Información</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm hover:text-gray-950 transition">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-950 transition">
                  Habitaciones
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-950 transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-950 transition">
                  Promociones
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-950 transition">
                  Galería
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Servicio al Cliente */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold text-gray-950 uppercase tracking-wide mb-6">Servicio al Cliente</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm hover:text-gray-950 transition">
                  Contactanos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-950 transition">
                  Reservas
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-950 transition">
                  Términos & Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-950 transition">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-950 transition">
                  Política de Cancelación
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Noticias & Eventos */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold text-gray-950 uppercase tracking-wide mb-6">Eventos Próximos</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-950">Boda de Primavera</p>
                <p className="text-xs text-gray-500">Marzo 15, 2026</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-950">Conferencia Internacional</p>
                <p className="text-xs text-gray-500">Marzo 20, 2026</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-950">Gala de Lujo</p>
                <p className="text-xs text-gray-500">Abril 10, 2026</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <motion.p
            variants={itemVariants}
            className="text-center text-sm text-gray-500"
          >
            © Copyright 2026. Todos los derechos reservados por Palmeyras Inn.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
