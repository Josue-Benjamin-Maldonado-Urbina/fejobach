import React from "react";
import { FaUniversity, FaUser, FaKey, FaCreditCard } from "react-icons/fa";

export default function Notas() {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">

      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-10">

        {/* Título */}
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase leading-none">
          <span className="text-white">Información</span><br />
          <span className="text-red-600">de pago »</span>
        </h1>

        {/* Subtexto */}
        <div className="mt-6 border border-gray-700 p-4 inline-block">
          <p className="text-lg">
            » Aparta tu lugar con <span className="text-red-500 font-bold">$150</span>
          </p>
          <p className="text-sm text-gray-400">
            o realiza tu pago completo
          </p>
        </div>

        {/* Card bancaria */}
        <div className="mt-8 border border-red-700 rounded-xl p-6 bg-black/70 backdrop-blur">

          <div className="space-y-4">

            <Row label="Banco" value="BBVA" />
            <Row label="Titular" value="LITZI J CALVO INFANTE" />
            <Row label="Clabe" value="012 180 01564685848 3" />
            <Row label="No. de cuenta" value="156 468 5848" />
            <Row label="No. de tarjeta" value="4152 3145 9114 0234" />

          </div>

        </div>

        {/* WhatsApp */}
        <div className="mt-6 border border-red-700 rounded-xl p-5 flex items-center justify-between bg-black/70">
          <div>
            <p className="font-bold text-lg">ENVÍA TU COMPROBANTE</p>
            <p className="text-sm text-gray-400">
              Por mensaje al:
            </p>
          </div>

          <p className="text-xl font-bold text-white">965 106 9930</p>
        </div>

        {/* Precios */}
        <div className="mt-6 grid md:grid-cols-2 gap-4">

          <div className="border border-red-700 rounded-xl p-5 bg-black/70">
            <p className="text-gray-400 text-sm">Antes del 01 de julio:</p>
            <p className="text-3xl font-bold text-red-500">$850</p>

            <p className="text-gray-400 text-sm mt-3">Después del 01 de julio:</p>
            <p className="text-2xl font-bold">$900</p>
          </div>

          <div className="border border-red-700 rounded-xl p-5 bg-black/70 flex items-center">
            <p className="text-sm text-gray-300">
               Tu lugar no se aparta hasta enviar comprobante
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          CMS26 | Convicción con <span className="text-red-500">visión</span>
        </div>

      </div>
    </div>
  );
}

function Row({ label, value }: any) {
  return (
    <div className="flex justify-between border-b border-gray-800 pb-2">
      <span className="text-gray-400 uppercase text-sm">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}