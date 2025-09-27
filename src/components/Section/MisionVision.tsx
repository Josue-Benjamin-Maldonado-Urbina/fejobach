import React, { useState } from "react";
import { motion } from "framer-motion";
import misionImg from "../../assets/misionvision/mision.webp";
import visionImg from "../../assets/misionvision/vision.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Nuestra Misión",
    description:
      "Fomentar el crecimiento espiritual de los jóvenes, promoviendo valores cristianos, amor al prójimo y participación activa en la comunidad.",
    image: misionImg,
  },
  {
    title: "Nuestra Visión",
    description:
      "Ser una comunidad joven influyente que vive su fe en acción, inspirando a otros a través del ejemplo, el servicio y el testimonio cristiano.",
    image: visionImg,
  },
];

export default function MisionVision() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="mision" className="py-36 bg-white px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Texto con animación */}
        <motion.div
          key={slides[index].title}
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-8 mt-12">
            {slides[index].title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            {slides[index].description}
          </p>

          {/* Botones de navegación */}
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <button
              onClick={handlePrev}
              aria-label="Anterior"
              className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600 transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Siguiente"
              className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600 transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        {/* Imagen con círculo decorativo */}
        <motion.div
          key={slides[index].image}
          className="relative w-full lg:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Círculo decorativo rojo */}
          <div className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[550px] lg:h-[550px] bg-red-100 rounded-full z-0" />

          {/* Imagen con hover */}
          <img
            src={slides[index].image}
            alt={slides[index].title}
            className="relative z-10 w-full max-w-md rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
