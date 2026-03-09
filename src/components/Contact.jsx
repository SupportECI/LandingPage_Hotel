import { Phone, Mail, MapPin } from "lucide-react";

export default function Contacto() {
  return (
    <section className="w-full py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contáctanos
          </h2>

          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            Estamos disponibles para ayudarte con tu reserva o cualquier
            información que necesites sobre tu estancia en Palmeyras Inn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Información */}
          <div className="space-y-10">

            <div className="flex items-start gap-5">
              <div className="bg-red-50 text-red-600 p-4 rounded-xl">
                <Phone size={22} />
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  Teléfono
                </p>

                <p className="text-gray-500">
                  +52 961 000 0000
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  Disponible todos los días
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-red-50 text-red-600 p-4 rounded-xl">
                <Mail size={22} />
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  Correo electrónico
                </p>

                <p className="text-gray-500">
                  contacto@palmeyrasinn.com
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  Respondemos en menos de 24 horas
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-red-50 text-red-600 p-4 rounded-xl">
                <MapPin size={22} />
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  Ubicación
                </p>

                <p className="text-gray-500">
                  Tuxtla Gutiérrez, Chiapas
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  Zona céntrica y accesible
                </p>
              </div>
            </div>

            {/* Línea decorativa */}
            <div className="w-24 h-1 bg-red-600 rounded-full"></div>

          </div>

          {/* Formulario */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">

            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Envíanos un mensaje
            </h3>

            <form className="space-y-6">

              <div>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-red-500 transition"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-red-500 transition"
                />
              </div>

              <div>
                <textarea
                  rows="4"
                  placeholder="Escribe tu mensaje"
                  className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-red-500 transition resize-none"
                />
              </div>

              <button
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl transition font-medium"
              >
                Enviar mensaje
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}