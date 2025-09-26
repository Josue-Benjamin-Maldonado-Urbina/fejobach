import React from "react";

const objetivos = [
    "Proveer capacitación a los líderes juveniles y las uniones para que puedan crear ministerios (música, deportes, multimedia, finanzas, predicación) con los cuales alcanzar más personas para Cristo",
    "Conseguir o generar material efectivo el cual se pueda compartir con las uniones juveniles y si es necesario un programa de actividades.",
    "Reforzar e involucrarse activamente en el trabajo de la Convención Regional en sus diversas labores (Caravana misionera, misiones con necesidad, mejoras al campamento, etc.)",
    "Motivar a los jovenes a asumir un rol activo en sus iglesias así como a aceptar el llamado de Dios para sus vidas y al ministerio."
];

export default function Objetivos() {
    return (
        <><div className="min-h-[100dvh] bg-gradient-to-b from-white to-red-50">
            <section id="objetivos" className="mx-auto max-w-7xl px-6 py-16">
                <h2 className="text-2xl font-bold text-slate-900">Objetivos</h2>
                <ul className="mt-6 grid gap-4 md:grid-cols-2">
                    {objetivos.map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                        >
                            <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-red-600 text-white">✓</span>
                            <p className="text-slate-700">{item}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
            </>
    );
}
