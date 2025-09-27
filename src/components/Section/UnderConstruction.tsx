import React from "react";
import { Construction } from "lucide-react";

export default function UnderConstruction() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <Construction className="w-16 h-16 text-yellow-500 mb-6 animate-bounce" />
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        Página en construcción
      </h1>
      <p className="text-slate-600 text-lg max-w-xl mb-6">
        Estamos trabajando para traerte este contenido lo más pronto posible.
        Vuelve más tarde o contáctanos si necesitas más información.
      </p>
      <a
        href="/"
        className="inline-block mt-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
      >
        Volver al inicio
      </a>
    </section>
  );
}
