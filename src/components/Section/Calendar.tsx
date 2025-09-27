import React from "react";

// IMPORTACIÓN DE IMÁGENES
import rallyImg from "../../assets/calendar/rally.jpg";
import canaHuecaImg from "../../assets/calendar/cana-hueca.jpg";
import cultoUnidoImg from "../../assets/calendar/culto-unido.jpg";
import retiroImg from "../../assets/calendar/retiro.jpg";
import capacitacionImg from "../../assets/calendar/capacitacion.jpg";
import altosImg from "../../assets/calendar/altos.jpg";
import conciertoImg from "../../assets/calendar/concierto.jpg";
import campamentoImg from "../../assets/calendar/campamento.jpg";

// EVENTOS UNIFICADOS
const allEvents = [
  {
    date: "2025-09-27",
    title: "Rally Bíblico Fejobach",
    location: "Cintalapa",
    image: rallyImg,
  },
  {
    date: "2025-10-25",
    title: "Fejobach en Caña Hueca",
    location: "Tuxtla Gutiérrez",
    image: canaHuecaImg,
  },
  {
    date: "2025-12-20",
    title: "Culto Unido Costa-Arriaga",
    location: "Costa - Arriaga",
    image: cultoUnidoImg,
  },
  {
    date: "2026-01-30",
    title: "Retiro de Líderes Fejobach",
    location: "Campamento",
    image: retiroImg,
  },
  {
    date: "2026-02-21",
    title: "Capacitación de Líderes",
    location: "Por definir",
    image: capacitacionImg,
  },
  {
    date: "2026-03-30",
    title: "Actividad en Zona Altos",
    location: "Sununil",
    image: altosImg,
  },
  {
    date: "2026-06-06",
    title: "Concierto Fejobach",
    location: "Estrella de Belén",
    image: conciertoImg,
  },
  {
    date: "2026-07-12",
    title: "Campamento Fejobach",
    location: "Por definir",
    image: campamentoImg,
  },
];

// FORMATEO DE FECHA
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return {
    day: date.getDate(),
    month: date.toLocaleString("es-MX", { month: "short" }),
    year: date.getFullYear(),
  };
}

// COMPONENTE PRINCIPAL
export default function Calendar() {
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
    <section id="calendar" className="py-20 bg-white px-6">
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
                          className="object-cover w-full h-full"
                        />
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
                        <button className="text-sm text-red-600 hover:underline">
                          Más información
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
