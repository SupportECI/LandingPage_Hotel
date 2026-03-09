export default function Nosotros() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="./src/assets/room.jpg"
          alt="Hotel Palmeyras"
          className="rounded-2xl shadow-lg object-cover h-[420px] w-full"
        />

        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Sobre Nosotros
          </h2>

          <p className="text-gray-600 mb-6">
            En Palmeyras Inn & Suites nos dedicamos a ofrecer una experiencia
            de hospedaje cómoda, tranquila y accesible para nuestros huéspedes.
            Nuestro hotel combina comodidad moderna con un ambiente acogedor
            para que cada estancia sea memorable.
          </p>

          <p className="text-gray-600 mb-8">
            Ya sea que visites Tuxtla Gutiérrez por negocios o por placer,
            nuestro equipo está comprometido a brindarte el mejor servicio y
            una estancia placentera.
          </p>

          <div className="grid grid-cols-3 gap-6 text-center">

            <div>
              <h3 className="text-3xl font-bold text-red-600">10+</h3>
              <p className="text-gray-500 text-sm">Habitaciones</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-600">5★</h3>
              <p className="text-gray-500 text-sm">Atención</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-600">24/7</h3>
              <p className="text-gray-500 text-sm">Recepción</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}