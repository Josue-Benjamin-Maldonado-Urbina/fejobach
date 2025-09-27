import React from "react";
import { Users, BookOpen, Heart, Mic } from "lucide-react";
import fejobachLogo from "../../assets/fejobach-logo.svg";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";

export default function Meet() {
  return (
    <><Navbar></Navbar><section className="py-24 bg-white px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
              {/* Imagen + fondo decorativo */}
              <div className="relative w-full md:w-1/2 flex justify-center">
                  {/* Círculo decorativo */}
                  <div className="absolute w-72 h-72 bg-red-100 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />

                  {/* Imagen del logo */}
                  <img
                      src={fejobachLogo}
                      alt="Fejobach Logo"
                      className="relative z-10 w-60 h-auto object-contain" />
              </div>

              {/* Texto de la sección */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                  <p className="text-red-600 uppercase font-semibold mb-2 tracking-wide">
                      Conócenos
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                      ¿Quiénes somos?
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed mb-8">
                      La Federación Bautista de Jóvenes del Centro de Chiapas es una comunidad dedicada al crecimiento espiritual, formación de liderazgo, servicio, misiones y compañerismo juvenil en el marco de la fe cristiana.
                  </p>

                  {/* Características */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      <Feature icon={<Users size={20} />} label="Comunidad Activa" />
                      <Feature icon={<BookOpen size={20} />} label="Formación Bíblica" />
                      <Feature icon={<Heart size={20} />} label="Servicio Social" />
                      <Feature icon={<Mic size={20} />} label="Eventos e Inspiración" />
                  </div>

                  {/* Botón que navega a contacto */}
                  <Link
                      to="/#contacto"
                      className="inline-block bg-red-600 text-white font-medium px-6 py-3 rounded-md hover:bg-red-700 transition"
                  >
                      Saber más
                  </Link>
              </div>
          </div>
      </section><Footer></Footer></>
  );
}

function Feature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-red-100 text-red-600 p-2 rounded-full">{icon}</div>
      <p className="text-slate-700 font-medium">{label}</p>
    </div>
  );
}
