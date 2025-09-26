import React from "react";
import Topbar from "./Topbar";
import Footer from "./Footer";

export default function Contacto() {
  return (
    <><div className="min-h-[100dvh] bg-gradient-to-b from-white to-red-50">
          <Topbar />
          <section id="contacto" className="mx-auto max-w-7xl px-6 py-16">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900">Contacto</h2>
                  <p className="mt-2 text-slate-600">
                      ¿Tienes preguntas? Escríbenos:
                      <a className="ml-1 font-semibold text-red-600 hover:underline" href="mailto:hola@fejobach.org">
                          hola@fejobach.org
                      </a>
                      , o envíanos un DM en Facebook.
                  </p>
              </div>
          </section>
          <Footer />
      </div></>
  );
}
