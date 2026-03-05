'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import '../hero-animations.css'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const floatVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="w-full bg-white min-h-screen flex items-center justify-center pt-0 pb-20 overflow-hidden relative">
      <motion.div
        className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Título principal */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-950 leading-tight mb-6 md:mb-8 max-w-2xl"
        >
          Reserva tu estadía perfecta
        </motion.h1>

        {/* Descripción */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mb-10 md:mb-12"
        >
          Descubre habitaciones de lujo, servicios excepcionales y una experiencia que no olvidarás en nuestro hotel premium.
        </motion.p>

        {/* Botones */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:mb-20"
        >
          <motion.a
            href="#reservar"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-green-600 text-white font-semibold text-base hover:bg-green-700 transition-all duration-300"
          >
            Reservar Ahora
          </motion.a>
          <motion.a
            href="#video"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-gray-950 font-semibold text-base border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Ver Video
          </motion.a>
        </motion.div>

        {/* Texto de confianza */}
        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm text-gray-500 mb-8 md:mb-10"
        >
          Confiados por los principales hoteles
        </motion.p>

        {/* Logos de empresas */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          <div className="text-gray-400 font-light text-lg">Marriott</div>
          <div className="text-gray-400 font-light text-lg">Hilton</div>
          <div className="text-gray-400 font-light text-lg">Hyatt</div>
          <div className="text-gray-400 font-light text-lg">Radisson</div>
          <div className="text-gray-400 font-light text-lg">Ibis</div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
