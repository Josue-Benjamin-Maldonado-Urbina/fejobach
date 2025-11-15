import React, { useState } from "react";
import PdfCard from "../components/cards/PdfCard";
import PdfModal from "../components/modal/PdfModal";

import pdf1 from "../assets/pdfs/materials/1.pdf";
import pdf2 from "../assets/pdfs/materials/2.pdf";
import pdf3 from "../assets/pdfs/materials/3.pdf";
import pdf4 from "../assets/pdfs/materials/4.pdf";
import pdf5 from "../assets/pdfs/materials/5.pdf";
import pdf6 from "../assets/pdfs/materials/6.pdf";

import thumb1 from "../assets/thumbnails/pdf1.jpg";
import thumb2 from "../assets/thumbnails/pdf2.jpg";
import thumb3 from "../assets/thumbnails/pdf3.jpg";
import thumb4 from "../assets/thumbnails/pdf4.jpg";
import thumb5 from "../assets/thumbnails/pdf5.jpg";
import thumb6 from "../assets/thumbnails/pdf6.jpg";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Section/Footer";
import EventInfo from "../components/rally/EventInfo";

interface PdfItem {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
}

const PdfSection: React.FC = () => {
  const [openPdf, setOpenPdf] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const pdfList: PdfItem[] = [
    { title: "Realizando mi vida con Dios", description: "Eclesiastés 12:1 — dirigido especialmente a jóvenes.", url: pdf1, thumbnail: thumb1 },
    { title: "Cómo ser un joven poderoso", description: "Mensaje basado en 2 Reyes 5:1-5.", url: pdf2, thumbnail: thumb2 },
    { title: "Practica la palabra", description: "Importancia de vivir la Palabra de Dios.", url: pdf3, thumbnail: thumb3 },
    { title: "El campeonato de la familia", description: "Material sobre obediencia y carácter.", url: pdf4, thumbnail: thumb4 },
    { title: "Motivos para triunfar sobre el mundo", description: "Tres razones para vencer al mundo.", url: pdf5, thumbnail: thumb5 },
    { title: "Vacío que nada llena", description: "Cristo es el único que llena el alma.", url: pdf6, thumbnail: thumb6 },
  ];

  const filteredPdfs = pdfList.filter((pdf) =>
    pdf.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pdf.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />

      {/* TODO el contenido dentro del gradiente */}
      <div className="bg-gradient-to-b from-[#f6f7fc] to-[#e9ebf3] min-h-screen pb-20">

        {/* INFO DEL EVENTO */}
        <EventInfo />

        {/* HERO */}
        <section className="relative bg-gradient-to-b from-[#3a1c71] via-[#5e18a5] to-[#7e0fff] text-white py-20 rounded-b-[40px] shadow-xl mt-[-40px]">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold">Materiales FEJOBACH</h1>
            <p className="text-lg text-purple-200 mt-4">
              Recursos oficiales para jóvenes, líderes y maestros.
            </p>

            <div className="mt-8">
              <input
                type="text"
                placeholder="Buscar materiales..."
                className="w-full md:w-2/3 mx-auto px-5 py-3 rounded-xl text-black shadow focus:ring-4 ring-purple-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* CATEGORÍAS */}
        <section className="max-w-6xl mx-auto px-6 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Devocionales", "Guías", "Actividades", "Mensajes"].map((cat, idx) => (
              <div key={idx} className="bg-white shadow-md hover:shadow-lg transition rounded-xl px-6 py-4 text-center font-medium">
                {cat}
              </div>
            ))}
          </div>
        </section>

        {/* MÉTRICAS */}
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow">
              <h2 className="text-3xl font-bold text-purple-700">120+</h2>
              <p className="text-gray-500 text-sm">Jóvenes Impactados</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h2 className="text-3xl font-bold text-purple-700">50+</h2>
              <p className="text-gray-500 text-sm">Materiales Digitales</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h2 className="text-3xl font-bold text-purple-700">10+</h2>
              <p className="text-gray-500 text-sm">Años de Servicio</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h2 className="text-3xl font-bold text-purple-700">24/7</h2>
              <p className="text-gray-500 text-sm">Acceso Disponible</p>
            </div>
          </div>
        </section>

        {/* PDFS */}
        <section className="max-w-6xl mx-auto px-6 mt-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Recursos Disponibles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {filteredPdfs.map((pdf, index) => (
              <PdfCard
                key={index}
                title={pdf.title}
                description={pdf.description}
                pdfUrl={pdf.url}
                thumbnail={pdf.thumbnail}
                onOpen={() => setOpenPdf(pdf.url)}
              />
            ))}
          </div>

          {filteredPdfs.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No se encontraron resultados.
            </p>
          )}
        </section>

        <PdfModal pdfUrl={openPdf} onClose={() => setOpenPdf(null)} />
      </div>

      <Footer />
    </>
  );
};

export default PdfSection;
