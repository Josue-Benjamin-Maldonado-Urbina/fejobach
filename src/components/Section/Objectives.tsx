import React from "react";

// Puedes importar tus imágenes así:
import img1 from "../../assets/objectives/obj1.webp";
import img2 from "../../assets/objectives/obj2.webp";
import img3 from "../../assets/objectives/obj3.webp";
import img4 from "../../assets/objectives/obj4.webp";

const objectives = [
  {
    title: "Capacitar",
    description:
      "Proveer capacitación a los líderes juveniles y las uniones para que puedan crear ministerios (música, deportes, multimedia, finanzas, predicación) con los cuales alcanzar más personas para Cristo.",
    image: img1,
  },
  {
    title: "Materiales",
    description:
      "Conseguir o generar material efectivo el cual se pueda compartir con las uniones juveniles y si es necesario un programa de actividades.",
    image: img2,
  },
  {
    title: "Actividades",
    description:
      "Reforzar e involucrarse activamente en el trabajo de la Convención Regional en sus diversas labores (Caravana misionera, misiones con necesidad, mejoras al campamento, etc).",
    image: img3,
  },
  {
    title: "Motivación",
    description:
      "Motivar a los jovenes a asumir un rol activo en sus iglesias así como a aceptar el llamado de Dios para sus vidas y al ministerio.",
    image: img4,
  },
];

export default function Objectives() {
  return (
    <section id="objetivos" className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">
          Nuestros Objetivos
        </h2>

        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-300 overflow-hidden group"
              >
                <img
                  src={obj.image}
                  alt={obj.title}
                  className="w-full h-40 object-cover filter grayscale group-hover:grayscale-0 transition duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">
                    {obj.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-snug">
                    {obj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
