import React from "react";
import Footer from "./Footer";
import Navbar from "../Navbar/Navbar";

const actividades = [
  { title: "Reuniones semanales", desc: "Alabanza, enseñanza y convivencia.", icon: "📖" },
  { title: "Grupos pequeños", desc: "Crecimiento en comunidad.", icon: "🤝" },
  { title: "Voluntariado", desc: "Proyectos de impacto social.", icon: "🛠️" },
  { title: "Música y arte", desc: "Bandas, teatro y creatividad.", icon: "🎶" },
  { title: "Deportes", desc: "Fútbol, vóley y más.", icon: "⚽" },
  { title: "Retiros y campamentos", desc: "Espacios para renovar la fe.", icon: "🏕️" },
];

export default function Actividades() {
  return (
    <><div className="min-h-[100dvh] bg-gradient-to-b from-white to-red-50">
           <Navbar></Navbar>
          <section id="actividades" className="mx-auto max-w-7xl px-6 py-16">
              <h2 className="text-2xl font-bold text-slate-900">Actividades</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {actividades.map((a) => (
                      <li key={a.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                          <div className="text-2xl">{a.icon}</div>
                          <h3 className="mt-3 text-lg font-semibold text-slate-900">{a.title}</h3>
                          <p className="mt-1 text-slate-600">{a.desc}</p>
                      </li>
                  ))}
              </ul>
          </section>
          <Footer />
      </div></>
  );
}
