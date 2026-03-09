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
    description:
      'Relájate en nuestro spa premium con tratamientos de clase mundial, masajes relajantes y terapias rejuvenecedoras.',
  },
  {
    icon: FireIcon,
    title: 'Restaurante Gourmet',
    description:
      'Disfruta de la cocina más exquisita preparada por chefs internacionales en una experiencia culinaria única.',
  },
  {
    icon: HomeIcon,
    title: 'Habitaciones Lujosas',
    description:
      'Suites elegantes con tecnología moderna, diseño sofisticado y vistas espectaculares.',
  },
  {
    icon: BuildingLibraryIcon,
    title: 'Piscina Infinita',
    description:
      'Piscinas climatizadas con vistas panorámicas y ambiente exclusivo para una experiencia inolvidable.',
  },
  {
    icon: CheckBadgeIcon,
    title: 'Servicio Concierge',
    description:
      'Atención personalizada disponible 24/7 para cumplir cualquier necesidad durante tu estadía.',
  },
  {
    icon: SparklesIcon,
    title: 'Eventos & Conferencias',
    description:
      'Espacios modernos ideales para bodas, eventos corporativos y celebraciones especiales.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

export default function ServicesSection() {
  return (
    <section className="bg-white py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}

        <motion.div
          className="text-center max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >

          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold text-red-600 mb-2 tracking-wide uppercase"
          >
            Servicios Premium
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Lujo en Cada Detalle
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600"
          >
            Descubre los servicios exclusivos diseñados para brindarte una
            experiencia única en Palmeyras Inn.
          </motion.p>

        </motion.div>


        {/* GRID */}

        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
                whileHover={{ y: -10 }}
                className="
                group
                relative
                bg-white
                rounded-2xl
                p-8
                border border-gray-100
                hover:border-red-200
                transition-all
                duration-300
                hover:shadow-xl
                hover:shadow-gray-200/40
                "
              >

                {/* GRADIENT HOVER */}

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

                <div className="relative">

                  {/* ICON */}

                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-red-100 mb-6 group-hover:bg-red-600 transition-colors duration-300">

                    <Icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-300" />

                  </div>


                  {/* TITLE */}

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>


                  {/* DESCRIPTION */}

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