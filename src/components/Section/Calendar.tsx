import React from "react";
import Topbar from "./Topbar";
import Footer from "./Footer";

export default function Calendario() {
  return (
    <><div className="min-h-[100dvh] bg-gradient-to-b from-white to-red-50">
          <Topbar />
          <section id="calendario" className="mx-auto max-w-7xl px-6 py-16">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900">Calendario</h2>
                  <p className="mt-2 text-slate-600">
                      Próximo encuentro: <strong>Viernes 7:30 pm</strong> — Auditorio principal.
                  </p>
                  <p className="mt-2 text-slate-600">
                      Muy pronto publicaremos el calendario completo aquí.
                  </p>
                  <a
                      href="https://www.facebook.com/fejobachpage"
                      className="mt-4 inline-flex rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-500"
                  >
                      Ver novedades en Facebook
                  </a>
              </div>
          </section>
          <Footer />
      </div></>
  );
}
