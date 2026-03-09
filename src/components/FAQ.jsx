import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function FAQ() {
  const [activo, setActivo] = useState(null);

  const preguntas = [
    {
      pregunta: "¿Cuál es el horario de check-in y check-out?",
      respuesta: "El acceso a las habitaciones es a partir de las 3:00 PM. La entrega de la habitación debe realizarse antes de las 12:00 PM para garantizar la limpieza a los siguientes huéspedes."
    },
    {
      pregunta: "¿El hotel cuenta con estacionamiento?",
      respuesta: "Sí, disponemos de un área de estacionamiento vigilada y gratuita para todos nuestros huéspedes durante su estancia."
    },
    {
      pregunta: "¿Ofrecen servicio de Wi-Fi en las habitaciones?",
      respuesta: "Contamos con conexión Wi-Fi de alta velocidad sin costo adicional en todas las áreas del hotel y dentro de cada habitación."
    },
    {
      pregunta: "¿Cuentan con servicio de facturación?",
      respuesta: "Claro que sí. Puedes solicitar tu factura al momento de tu llegada o enviarnos tus datos fiscales por correo tras tu salida."
    },
    {
      pregunta: "¿Se aceptan mascotas?",
      respuesta: "Por el momento, mantenemos un ambiente libre de alérgenos y no permitimos el acceso de mascotas."
    },
    {
      pregunta: "¿Cómo puedo realizar una reservación?",
      respuesta: "Puedes reservar de forma segura mediante nuestro sitio web, por WhatsApp al número oficial o directamente por llamada telefónica."
    },
    {
      pregunta: "¿Tienen servicio de transporte al aeropuerto?",
      respuesta: "Podemos gestionar un taxi seguro o servicio de transporte privado con costo adicional si lo solicitas con 24 horas de anticipación."
    }
  ];

  return (
    <section className="w-full py-20 bg-gray-50/50">
      {/* Ajustado a max-w-4xl para que los cards se vean más largos y elegantes */}
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Elegante */}
        <div className="mb-14 text-center">
          <span className="text-xs uppercase tracking-[4px] text-red-600 font-semibold mb-3 block">Preguntas</span>
          <h2 className="text-3xl font-light text-gray-950 tracking-tight">
            Información de interés
          </h2>
          <p className="text-sm text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Resolvemos tus dudas más comunes para que tu estancia sea perfecta.
          </p>
          <div className="h-px w-20 bg-gray-200 mt-8 mx-auto"></div>
        </div>

        {/* Lista de Acordeón con ancho extendido */}
        <div className="space-y-4"> 
          {preguntas.map((item, index) => {
            const abierto = activo === index;

            return (
              <div
                key={index}
                className={`transition-all duration-300 rounded-xl bg-white border ${
                  abierto ? "shadow-lg border-gray-100" : "border-gray-100 hover:border-gray-200 shadow-sm"
                }`}
              >
                <button
                  onClick={() => setActivo(abierto ? null : index)}
                  className="w-full flex items-center justify-between py-5 px-8 text-left outline-none group"
                >
                  <div className="flex gap-4 items-center">
                    <div className={`h-6 w-1 rounded-full transition-colors ${abierto ? "bg-red-500" : "bg-transparent group-hover:bg-red-200"}`} />
                    <span className={`text-[15px] transition-colors duration-300 ${
                      abierto ? "text-gray-950 font-medium" : "text-gray-700 hover:text-gray-950"
                    }`}>
                      {item.pregunta}
                    </span>
                  </div>
                  
                  <div className={`flex items-center justify-center p-2 rounded-full transition-colors ${abierto ? "bg-red-50" : "bg-transparent"}`}>
                    <div className={`transform transition-transform duration-500 ease-out ${abierto ? "rotate-90" : ""}`}>
                      <ChevronRight
                        size={18}
                        strokeWidth={2}
                        className={abierto ? "text-red-500" : "text-gray-400 group-hover:text-gray-600"}
                      />
                    </div>
                  </div>
                </button>

                {/* Contenedor de Respuesta */}
                <div
                  className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                    abierto ? "grid-rows-[1fr] opacity-100 bg-gray-50/50 rounded-b-xl border-t border-gray-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="py-6 px-8 pl-[4.5rem]"> 
                      <p className="text-sm text-gray-600 leading-relaxed font-light">
                        {item.respuesta}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sección de Contacto Directo */}
        <div className="mt-16 text-center pt-10 border-t border-gray-100">
          <p className="text-sm text-gray-500 font-light">
            ¿No encuentras lo que buscas? Contáctanos de forma directa. Contáctanos por WhatsApp
          </p>
        </div>

      </div>
    </section>
  );
}