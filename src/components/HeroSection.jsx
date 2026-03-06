'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HeroSection = () => {
  const [index, setIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const slides = [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1920"
  ]

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* --- SLIDER DE FONDO --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img 
              src={slides[index]} 
              alt="Fondo Hotel" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- CONTENIDO PRINCIPAL (ESTÁTICO) --- */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 pt-20 flex flex-col items-center text-center">
        
        {/* Título y Descripción */}
        <motion.h1
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
        >
          Reserva tu estadía <br /> perfecta
        </motion.h1>

        <motion.p
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{ ...itemVariants, visible: { ...itemVariants.visible, transition: { delay: 0.2 } } }}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl drop-shadow-lg"
        >
          Descubre habitaciones de lujo, servicios excepcionales y una experiencia que no olvidarás en nuestro hotel premium.
        </motion.p>

        {/* Botones */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{ ...itemVariants, visible: { ...itemVariants.visible, transition: { delay: 0.4 } } }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
        >
          <a href="#reservar" className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold transition-all shadow-xl">
            Reservar Ahora
          </a>
          <button className="px-10 py-4 border-2 border-white/40 backdrop-blur-md text-white rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            Ver Video
          </button>
        </motion.div>

        {/* --- Texto confianza --- */}
        <div className="w-full">
          <motion.p
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{ ...itemVariants, visible: { ...itemVariants.visible, transition: { delay: 0.6 } } }}
            className="text-xs sm:text-sm text-gray-200 mb-6 uppercase tracking-widest"
          >
            Confiados por los principales hoteles
          </motion.p>

          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{ ...itemVariants, visible: { ...itemVariants.visible, transition: { delay: 0.8 } } }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500"
          >
            <div className="text-white font-medium text-lg">Marriott</div>
            <div className="text-white font-medium text-lg">Hilton</div>
            <div className="text-white font-medium text-lg">Hyatt</div>
            <div className="text-white font-medium text-lg">Radisson</div>
            <div className="text-white font-medium text-lg">Ibis</div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection