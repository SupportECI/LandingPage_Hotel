import { useState } from "react";
import { X } from "lucide-react";

export default function Galeria() {
  const [imagenActiva, setImagenActiva] = useState(null);

  const imagenes = [
    { src: "./src/assets/room.jpg", titulo: "Habitación Deluxe" },
    { src: "./src/assets/room.jpg", titulo: "Vista al balcón" },
    { src: "./src/assets/room.jpg", titulo: "Suite principal" },
    { src: "./src/assets/room.jpg", titulo: "Área de descanso" },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Galería del Hotel
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Descubre nuestros espacios y habitaciones
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">

          {imagenes.map((img, index) => {

            const tamaños = [
              "md:col-span-2 md:row-span-2",
              "",
              "",
              "md:col-span-2",
            ];

            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg ${tamaños[index]}`}
                onClick={() => setImagenActiva(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500 flex items-end p-6">
                  <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-500">
                    {img.titulo}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {imagenActiva && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6">

          <button
            className="absolute top-6 right-6 text-white hover:scale-110 transition"
            onClick={() => setImagenActiva(null)}
          >
            <X size={32} />
          </button>

          <img
            src={imagenActiva}
            alt="Vista ampliada"
            className="max-w-6xl max-h-[90vh] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}