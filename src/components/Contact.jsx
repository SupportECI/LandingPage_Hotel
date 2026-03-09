import { Phone, Mail, MapPin } from "lucide-react";

export default function Contacto() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* encabezado */}
        <div className="mb-14">
          <h2 className="text-4xl font-semibold text-gray-900">
            Contacto
          </h2>

          <p className="text-gray-500 mt-3 max-w-xl">
            Si tienes alguna duda sobre disponibilidad, reservas o servicios,
            nuestro equipo estará encantado de ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* información */}
          <div className="space-y-10">

            <div className="flex items-start gap-4">
              <Phone className="text-red-600 mt-1" size={20} />
              <div>
                <p className="font-medium text-gray-900">
                  Teléfono
                </p>
                <p className="text-gray-500">
                  +52 961 000 0000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-red-600 mt-1" size={20} />
              <div>
                <p className="font-medium text-gray-900">
                  Correo
                </p>
                <p className="text-gray-500">
                  contacto@palmeyrasinn.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-red-600 mt-1" size={20} />
              <div>
                <p className="font-medium text-gray-900">
                  Ubicación
                </p>
                <p className="text-gray-500">
                  Tuxtla Gutiérrez, Chiapas
                </p>
              </div>
            </div>

          </div>

          {/* formulario */}
          <form className="space-y-6">

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Nombre"
                className="border-b border-gray-300 py-3 outline-none focus:border-red-600 transition"
              />

              <input
                type="email"
                placeholder="Correo"
                className="border-b border-gray-300 py-3 outline-none focus:border-red-600 transition"
              />

            </div>

            <textarea
              rows="4"
              placeholder="Mensaje"
              className="w-full border-b border-gray-300 py-3 outline-none focus:border-red-600 transition resize-none"
            />

            <button
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition"
            >
              Enviar mensaje
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}