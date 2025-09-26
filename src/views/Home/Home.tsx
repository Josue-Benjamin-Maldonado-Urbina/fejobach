import React from "react";
import Hero from "../../components/Section/Hero";
import MisionVision from "../../components/Section/MisionVision";
import Objetivos from "../../components/Section/Objectives";
import Footer from "../../components/Section/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-gradient-to-b from-white to-red-50">
      <Navbar />

      <main>
        <Hero />

        {/* Asegúrate que estas secciones tengan ID para scroll suave */}
        <section id="mision">
          <MisionVision />
        </section>

        <section id="objetivos">
          <Objetivos />
        </section>

        <section id="contacto">
          {/* Puedes poner aquí un formulario o contacto general si no tienes uno aún */}
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-2xl font-bold text-slate-900">Contacto</h2>
            <p className="mt-4 text-slate-600">
              Puedes escribirnos a{" "}
              <a
                href="mailto:hola@fejobach.org"
                className="text-red-600 underline"
              >
                hola@fejobach.org
              </a>{" "}
              o seguirnos en nuestras redes sociales.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
