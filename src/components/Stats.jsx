'use client'

import { motion } from 'framer-motion'
import { Building2, Users, Trophy, Sparkles } from 'lucide-react'

const stats = [
  {
    id: 1,
    name: 'Habitaciones Disponibles',
    value: '50+',
    description: 'Suites y habitaciones diseñadas para tu descanso',
    icon: Building2,
    color: 'from-red-500 to-red-600',
  },
  {
    id: 2,
    name: 'Huéspedes Satisfechos',
    value: '15K+',
    description: 'Valoración promedio de 4.8 estrellas',
    icon: Users,
    color: 'from-rose-500 to-red-500',
  },
  {
    id: 3,
    name: 'Años de Experiencia',
    value: '25',
    description: 'Brindando experiencias memorables',
    icon: Trophy,
    color: 'from-red-600 to-rose-600',
  },
  {
    id: 4,
    name: 'Servicios Premium',
    value: '18+',
    description: 'Amenidades exclusivas para nuestros huéspedes',
    icon: Sparkles,
    color: 'from-rose-500 to-red-600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function Stats() {
  return (
    <section className="bg-white pt-20 pb-10 sm:pt-24 sm:pb-16">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Experiencia que marca la diferencia
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Nuestro compromiso con la excelencia se refleja en cada detalle de tu estancia.
          </p>
        </motion.div>



        {/* STATS GRID */}

        <motion.dl
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >

          {stats.map((stat) => {

            const Icon = stat.icon

            return (

              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="
                group relative
                rounded-2xl
                border border-gray-100
                bg-white
                p-8
                transition-all duration-300
                hover:border-red-200
                hover:shadow-lg
                "
              >

                {/* gradient background */}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition`}
                />


                <div className="relative z-10">

                  {/* icon */}

                  <div
                    className={`inline-flex rounded-xl bg-gradient-to-br ${stat.color} p-3 mb-5`}
                  >

                    <Icon className="h-6 w-6 text-white" />

                  </div>


                  {/* title */}

                  <dt className="text-sm font-semibold text-gray-600 mb-2">

                    {stat.name}

                  </dt>


                  {/* value */}

                  <dd className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">

                    {stat.value}

                  </dd>


                  {/* description */}

                  <p className="text-sm text-gray-500">

                    {stat.description}

                  </p>

                </div>

              </motion.div>

            )

          })}

        </motion.dl>

      </div>

    </section>
  )
}