import React from "react";
import Topbar from "../../components/Section/Topbar";
import Button from "../../ui/Button";
import IllustrationConstruction from "../../components/Section/IllustrationConstruction";
import Footer from "../../components/Section/Footer";


export default function UnderConstruction() {
  return (
    <div className="min-h-dvh bg-red-300">
      {/* tarjeta central */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="rounded-2xl bg-white shadow-xl">
          <Topbar />

          <main className="grid items-center gap-10 px-6 pb-16 pt-8 md:grid-cols-2 md:gap-6 md:px-12">
            {/* texto */}
            <section>
              <p className="text-sm font-semibold uppercase tracking-wider text-red">CRECIENDO EN GRACIA, SIRVIENDO EN AMOR, UNIDOS CUMPLIMOS LA MISIÓN</p>
              <h1 className="mt-3 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                Sitio en <span className="text-red-950">Construccción</span>
              </h1>
              <p className="mt-4 max-w-prose text-slate-600">
                Estamos preparando algo increíble. Mientras tanto, puedes suscribirte para recibir novedades o
                escribirnos si necesitas soporte.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asLink href="https://www.facebook.com/fejobachpage">Fejobach Page</Button>

              </div>
            </section>

            {/* ilustración */}
            <section className="relative flex justify-center">
              <IllustrationConstruction />
            </section>

          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}
