import React, { useState } from "react";
import misionImg from "../../assets/calendar/rally.webp";
import canaHuecaImg from "../../assets/calendar/cana-hueca.webp";
import cultoUnidoImg from "../../assets/calendar/culto-unido.webp";
import retiroImg from "../../assets/calendar/retiro.webp";
import capacitacionImg from "../../assets/calendar/capacitacion.webp";
import altosImg from "../../assets/calendar/altos.webp";
import conciertoImg from "../../assets/calendar/concierto.jpg";
import campamentoImg from "../../assets/calendar/campamento.webp";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";

const allEvents = [
  {
    date: "2025-09-28",
    title: "Rally Bíblico Fejobach",
    location: "I. B. Estrella ed Belén - Cintalapa",
    image: misionImg,
    description: "Culto unido con enfoque bíblico en 1ra de Corintios 10-14.",
  },
  {
    date: "2025-10-26",
    title: "Fejobach en Caña Hueca",
    location: "Tuxtla Gutiérrez",
    image: canaHuecaImg,
    description: "Convivencia juvenil en el parque Caña Hueca.",
  },
  {
    date: "2025-12-21",
    title: "Culto Unido Zona Costa-Arriaga",
    location: "PIB Arriaga",
    image: cultoUnidoImg,
    description: "Culto especial por fin de año.",
  },
  {
    date: "2026-01-31",
    title: "Retiro de Líderes Fejobach",
    location: "Campamento Monte Sion",
    image: retiroImg,
    description: "Retiro de planificación espiritual y organizacional.",
  },
  {
    date: "2026-02-22",
    title: "Capacitación de Líderes",
    location: "Por definir",
    image: capacitacionImg,
    description: "Formación continua para líderes de Fejobach.",
  },
  {
    date: "2026-03-31",
    title: "Actividad en Zona Altos",
    location: "Sununil - San Cristobal",
    image: altosImg,
    description: "Culto unido zona de los altos de Chiapas.",
  },
  {
    date: "2026-06-07",
    title: "Concierto Fejobach",
    location: "Estrella de Belén - Cintalapa",
    image: conciertoImg,
    description: "Evento musical cristiano abierto a todo público.",
  },
  {
    date: "2026-07-13",
    title: "Campamento Fejobach",
    location: "Campamrnto Monte Sion",
    image: campamentoImg,
    description: "Fehca por confirmar.",
  },
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return {
    day: date.getDate(),
    month: date.toLocaleString("es-MX", { month: "short" }),
    year: date.getFullYear(),
  };
}

export default function Calendar() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const openModal = (event: any) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  const groupedByYear = allEvents.reduce<Record<string, typeof allEvents>>(
    (acc, event) => {
      const { year } = formatDate(event.date);
      acc[year] = acc[year] || [];
      acc[year].push(event);
      return acc;
    },
    {}
  );

  return (
    <><Navbar></Navbar><section id="calendar" className="py-20 bg-white px-6">
          <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  Calendario Fejobach
              </h2>

              {Object.keys(groupedByYear)
                  .sort()
                  .map((year) => (
                      <div key={year} className="mb-16">
                          <h3 className="text-2xl font-semibold mb-6 text-slate-800">
                              Eventos {year}
                          </h3>
                          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
                              {groupedByYear[year].map((event, index) => {
                                  const { day, month } = formatDate(event.date);
                                  return (
                                      <div
                                          key={index}
                                          className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition"
                                      >
                                          <div className="h-40 overflow-hidden">
                                              <img
                                                  src={event.image}
                                                  alt={event.title}
                                                  className="object-cover w-full h-full" />
                                          </div>
                                          <div className="p-4">
                                              <div className="flex items-center gap-4 mb-2">
                                                  <div className="bg-red-600 text-white px-3 py-1 rounded text-center">
                                                      <div className="text-lg font-bold">{day}</div>
                                                      <div className="text-sm uppercase">{month}</div>
                                                  </div>
                                                  <div>
                                                      <h4 className="text-lg font-semibold text-slate-900">
                                                          {event.title}
                                                      </h4>
                                                      <p className="text-sm text-slate-600">
                                                          {event.location}
                                                      </p>
                                                  </div>
                                              </div>
                                              <button
                                                  onClick={() => openModal(event)}
                                                  className="text-sm text-red-600 hover:underline"
                                              >
                                                  Más información
                                              </button>
                                          </div>
                                      </div>
                                  );
                              })}
                          </div>
                      </div>
                  ))}

              {/* MODAL */}
              {selectedEvent && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative animate-fade-in">
                          <button
                              className="absolute top-2 right-3 text-slate-500 hover:text-red-600 text-xl"
                              onClick={closeModal}
                          >
                              ×
                          </button>
                          <img
                              src={selectedEvent.image}
                              alt={selectedEvent.title}
                              className="w-full h-56 object-cover rounded mb-4" />
                          <h3 className="text-2xl font-bold mb-2 text-slate-900">
                              {selectedEvent.title}
                          </h3>
                          <p className="text-sm text-slate-600 mb-1">
                              📍 <strong>Lugar:</strong> {selectedEvent.location}
                          </p>
                          <p className="text-sm text-slate-600 mb-1">
                              📅 <strong>Fecha:</strong>{" "}
                              {new Date(selectedEvent.date).toLocaleDateString("es-MX", {
                                  weekday: "long",
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                              })}
                          </p>
                          <p className="text-slate-700 mt-4">
                              {selectedEvent.description}
                          </p>
                      </div>
                  </div>
              )}
          </div>
      </section>
      <Footer></Footer></>
  );
}
