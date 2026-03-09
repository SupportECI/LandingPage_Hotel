'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Users, Clock, Wifi, Coffee, ParkingCircle, Waves } from 'lucide-react'

const rooms = [
  { id: 1, category: 'PREMIUM', name: 'Suite Ejecutiva', rating: 4.8, reviews: 124, guests: '2 pers.', duration: '3-24h', amenities: ['WiFi', 'Café', 'Parking', 'Piscina'], price: 135, pricePerHour: '/3h', image: './src/assets/room.jpg' },
  { id: 2, category: 'DELUXE', name: 'Habitación Deluxe', rating: 4.6, reviews: 89, guests: '3 pers.', duration: '3-24h', amenities: ['WiFi', 'Café', 'Parking'], price: 105, pricePerHour: '/3h', image: './src/assets/room.jpg' },
  { id: 3, category: 'LUXURY', name: 'Suite Presidencial', rating: 4.9, reviews: 56, guests: '4 pers.', duration: '3-24h', amenities: ['WiFi', 'Piscina', 'Parking'], price: 240, pricePerHour: '/3h', image: './src/assets/room.jpg' },
  { id: 4, category: 'CLASSIC', name: 'Habitación Clásica', rating: 4.5, reviews: 102, guests: '2 pers.', duration: '3-24h', amenities: ['WiFi', 'Café'], price: 85, pricePerHour: '/3h', image: './src/assets/room.jpg' },
  { id: 5, category: 'FAMILY', name: 'Suite Familiar', rating: 4.7, reviews: 78, guests: '5 pers.', duration: '3-24h', amenities: ['WiFi', 'Parking', 'Piscina'], price: 180, pricePerHour: '/3h', image: './src/assets/room.jpg' },
  { id: 6, category: 'VIP', name: 'Habitación VIP', rating: 4.8, reviews: 95, guests: '3 pers.', duration: '3-24h', amenities: ['WiFi', 'Café', 'Parking'], price: 150, pricePerHour: '/3h', image: './src/assets/room.jpg' },
  { id: 7, category: 'ROMANCE', name: 'Suite Romántica', rating: 4.9, reviews: 67, guests: '2 pers.', duration: '3-24h', amenities: ['WiFi', 'Piscina'], price: 200, pricePerHour: '/3h', image: './src/assets/room.jpg' },
  { id: 8, category: 'COMFORT', name: 'Habitación Confort', rating: 4.6, reviews: 81, guests: '3 pers.', duration: '3-24h', amenities: ['WiFi', 'Parking'], price: 95, pricePerHour: '/3h', image: './src/assets/room.jpg' },
]

const amenityIcons = {
  WiFi: Wifi,
  Café: Coffee,
  Parking: ParkingCircle,
  Piscina: Waves,
}

const RoomCard = ({ room }) => {

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

  return (

    <motion.div
      variants={itemVariants}
      className="
      group
      bg-white
      rounded-2xl
      overflow-hidden
      border border-gray-100
      hover:border-red-200
      transition-all duration-500
      hover:shadow-xl
      hover:shadow-gray-200/40
      "
    >

      {/* IMAGE */}

      <div className="relative h-48 overflow-hidden bg-gray-100">

        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80" />

        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[11px] font-semibold text-red-600 px-3 py-1 rounded-full shadow-sm tracking-wide">
          {room.category}
        </div>

      </div>


      {/* CONTENT */}

      <div className="p-5">

        <div className="flex justify-between items-start mb-2">

          <h3 className="text-base font-bold text-gray-900 leading-tight pr-2">
            {room.name}
          </h3>

          <div className="flex items-center gap-1">

            <Star size={14} className="text-yellow-400 fill-yellow-400" />

            <span className="text-sm font-semibold text-gray-900">
              {room.rating}
            </span>

          </div>

        </div>


        <p className="text-xs text-gray-400 mb-4">
          {room.reviews} reseñas
        </p>


        {/* INFO */}

        <div className="flex gap-4 mb-4 text-gray-500 text-xs">

          <div className="flex items-center gap-1.5">
            <Users size={14} />
            <span>{room.guests}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            <span>{room.duration}</span>
          </div>

        </div>


        {/* AMENITIES */}

        <div className="flex flex-wrap gap-2 mb-5">

          {room.amenities.slice(0, 3).map((amenity) => {

            const IconComponent = amenityIcons[amenity] || Wifi

            return (

              <div
                key={amenity}
                className="
                flex items-center gap-1
                text-xs
                text-gray-500
                bg-gray-50
                px-2.5 py-1
                rounded-md
                "
              >

                <IconComponent size={12} />

                <span>{amenity}</span>

              </div>

            )

          })}

        </div>


        {/* PRICE */}

        <div className="flex items-end justify-between">

          <div>

            <span className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide block">
              Desde
            </span>

            <div className="text-2xl font-bold text-gray-900 leading-none">

              ${room.price}

              <span className="text-gray-400 text-xs font-normal ml-1">
                {room.pricePerHour}
              </span>

            </div>

          </div>

        </div>

      </div>

    </motion.div>

  )

}

export default function RoomsSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  return (

    <section className="py-16 px-6 bg-white">

      <div className="max-w-7xl mx-auto">


        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">

            Nuestras Habitaciones

          </h2>

          <p className="text-gray-500 max-w-xl mx-auto">

            Espacios diseñados para ofrecerte descanso, lujo y comodidad en cada estancia.

          </p>

        </motion.div>


        {/* GRID */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7"
        >

          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}

        </motion.div>

      </div>

    </section>

  )

}