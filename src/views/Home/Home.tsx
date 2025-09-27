import React from "react";
import Hero from "../../components/Section/Hero";
import MisionVision from "../../components/Section/MisionVision";
import Objetivos from "../../components/Section/Objectives";
import Footer from "../../components/Section/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Contact from "../../components/Section/Contact";

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
          <Contact></Contact>
        </section>
      </main>
      <Footer />
    </div>
  );
}
