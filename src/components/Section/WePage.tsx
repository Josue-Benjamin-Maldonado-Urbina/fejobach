import React from "react";
import Topbar from "./Topbar";
import Footer from "./Footer";

export default function WePage() {
  return (
    <><div className="min-h-[100dvh] bg-gradient-to-b from-white to-red-50">
          <section id="contacto" className="mx-auto max-w-7xl px-6 py-16">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900">Contacto</h2>
                  <p className="mt-2 text-slate-600">
                      Conócenos
                  </p>
              </div>
          </section>
      </div></>
  );
}