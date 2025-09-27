import React from "react";
import { Link } from "react-router-dom";

import alabanzaImg from "../../assets/resources/alabanza.webp";
import predicacionImg from "../../assets/resources/predicacion.webp";
import evangelismoImg from "../../assets/resources/evangelismo.webp";
import multimediaImg from "../../assets/resources/multimedia.webp";
import deportesImg from "../../assets/resources/deportes.webp";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";

const resources = [
  {
    title: "Alabanza",
    description: "Recursos para equipos de adoración y música.",
    image: alabanzaImg,
    path: "/resources/alabanza",
  },
  {
    title: "Predicación",
    description: "Guías y herramientas para predicadores.",
    image: predicacionImg,
    path: "/resources/predicacion",
  },
  {
    title: "Evangelismo",
    description: "Material para campañas, misiones y actividades.",
    image: evangelismoImg,
    path: "/resources/evangelismo",
  },
  {
    title: "Multimedia",
    description: "Diseño, streaming y herramientas audiovisuales.",
    image: multimediaImg,
    path: "/resources/multimedia",
  },
  {
    title: "Sociales y deportes",
    description: "Diversión y actividades para todos.",
    image: deportesImg,
    path: "/resources/deportes",
  },
];

export default function Resources() {
  return (
    <><Navbar></Navbar><section id="resources" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
          Recursos para Ministerios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((res, index) => (
            <Link
              to={res.path}
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-transform hover:scale-105 group"
            >
              <img
                src={res.image}
                alt={res.title}
                className="w-full h-40 object-cover group-hover:grayscale-0 transition" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-800 mb-1">{res.title}</h3>
                <p className="text-sm text-slate-600">{res.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section><Footer></Footer></>
  );
}
