import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_9zn70uh",      // serviceID
        "template_wq8ioll",     // templateID
        form.current,
        "ZJaWSKHxAeJlk8YYq"       // publicKey
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          form.current?.reset();
        },
        () => {
          setSuccess(false);
          setError(true);
        }
      );
  };

  return (
    <section id="contacto" className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden grid md:grid-cols-2">
        
        {/* Lado izquierdo: fondo con texto */}
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 text-white p-10 hidden md:flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">¡Contáctanos!</h2>
          <p className="text-lg">Queremos saber de ti. Completa el formulario y pronto te responderemos.</p>
        </div>

        {/* Lado derecho: formulario */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-8 md:p-10 space-y-5"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-3">Formulario de contacto</h3>

          <div>
            <label className="block mb-1 text-sm text-slate-600">Nombre</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-slate-600">Correo electrónico</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="tucorreo@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-slate-600">Mensaje</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="¿En qué podemos ayudarte?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Enviar mensaje
          </button>

          {/* Estado de envío */}
          {success && (
            <p className="text-green-600 text-sm mt-2">¡Mensaje enviado con éxito!</p>
          )}
          {error && (
            <p className="text-red-600 text-sm mt-2">Hubo un error al enviar tu mensaje. Intenta nuevamente.</p>
          )}
        </form>
      </div>
    </section>
  );
}
