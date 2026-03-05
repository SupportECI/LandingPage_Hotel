'use client'

import { motion } from 'framer-motion'
import {
  SparklesIcon,
  HomeIcon,
  BuildingLibraryIcon,
  CheckBadgeIcon,
  FireIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: SparklesIcon,
    title: 'Spa & Bienestar',
    description: 'Relájate en nuestro spa premium con tratamientos de clase mundial, masajes relajantes y terapias rejuvenecedoras.',
  },
  {
    icon: FireIcon,
    title: 'Restaurante Gourmet',
    description: 'Disfruta de la cocina más exquisita preparada por chefs internacionales. Experiencia culinaria incomparable.',
  },
  {
    icon: HomeIcon,
    title: 'Habitaciones Lujosas',
    description: 'Suites diseñadas con elegancia, tecnología moderna y vistas panorámicas que te dejarán sin aliento.',
  },
  {
    icon: BuildingLibraryIcon,
    title: 'Piscina Infinita',
    description: 'Nuestras piscinas climatizadas ofrecen vistas espectaculares y un ambiente exclusivo para tu disfrute.',
  },
  {
    icon: CheckBadgeIcon,
    title: 'Servicio Concierge',
    description: 'Disponible 24/7 para cumplir cada uno de tus deseos y necesidades durante tu estadía.',
  },
  {
    icon: SparklesIcon,
    title: 'Eventos & Conferencias',
    description: 'Espacios modernos y flexible para bodas, conferencias corporativas y celebraciones especiales.',
  },
]

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

export default function BentoSection() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold text-indigo-600 mb-2"
          >
            Servicios Premium
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 mb-4"
          >
            Lujo en Cada Detalle
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Descubre los servicios exclusivos diseñados para hacerte vivir una experiencia inolvidable en nuestro hotel de clase mundial.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-indigo-200 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-linear-to-b from-indigo-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-100 rounded-xl mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-950 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
