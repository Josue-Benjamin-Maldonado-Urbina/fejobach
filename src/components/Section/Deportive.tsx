import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import headerImg from "../../assets/hero-futbol.webp";
import futbolImg from "../../assets/futbol.jpg";
import cartaResponsiva from "../../assets/responsive_cart.pdf";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";

export default function SportsEventDetail() {
  const [formData, setFormData] = useState({
    equipo: "",
    iglesia: "",
    deportes: [] as string[],
    lider: "",
    email: "",
    integrantes: "",
    color: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const colors = [
    "Rojo", "Azul", "Verde", "Amarillo", "Naranja", "Morado", "Negro",
    "Blanco", "Gris", "Turquesa", "Fucsia", "Lima", "Vino", "Beige",
    "Marrón", "Celeste", "Oro", "Plata", "Lavanda", "Marino",
    "Cian", "Coral", "Oliva", "Rosa", "Mostaza"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, checked, type } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        deportes: checked
          ? [...prev.deportes, value]
          : prev.deportes.filter((d) => d !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones básicas
    if (formData.deportes.length === 0) {
      alert("Selecciona al menos un deporte.");
      return;
    }
    if (!formData.color) {
      alert("Selecciona un color de uniforme.");
      return;
    }

    setSending(true);
    setSuccess(false);

    emailjs
      .send(
        "service_9zn70uh",
        "template_uqyfn4n",
        {
          equipo: formData.equipo,
          iglesia: formData.iglesia,
          deportes: formData.deportes.join(", "),
          lider: formData.lider,
          email: formData.email,
          integrantes: formData.integrantes,
          color: formData.color,
        },
        "ZJaWSKHxAeJlk8YYq"
      )
      .then(() => {
        setSending(false);
        setSuccess(true);
        setFormData({
          equipo: "",
          iglesia: "",
          deportes: [],
          lider: "",
          email: "",
          integrantes: "",
          color: "",
        });

        setTimeout(() => setSuccess(false), 4000);
      })
      .catch((err) => {
        console.error("Error al enviar", err);
        alert("Hubo un problema al enviar el formulario. Intenta nuevamente.");
        setSending(false);
      });
  };

  return (
    <>
      <Navbar />
      <section className="bg-white text-slate-800">
        {/* Hero */}
        <div
          className="h-96 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${headerImg})` }}
        >
          <div className="bg-black bg-opacity-50 px-8 py-4 rounded-md text-white text-center">
            <h1 className="text-4xl font-bold uppercase tracking-widest">
              Registro a la Actividad Deportiva
            </h1>
          </div>
        </div>

        {/* Intro */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            ¡Participa en nuestra actividad deportiva!
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Forma parte de esta actividad llena de energía, comunidad y fe. Inscribe a tu equipo, descarga la carta responsiva y prepárate para vivir una experiencia inolvidable.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
          {/* Imagen e info */}
          <div>
            <img
              src={futbolImg}
              alt="Evento deportivo"
              className="rounded-lg shadow-md w-full object-cover"
            />
            <div className="bg-black text-white mt-6 p-6 rounded-md">
              <h2 className="text-2xl font-semibold mb-2">Inscripción</h2>
              <p className="text-4xl font-bold text-lime-400">GRATIS</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>✅ Fútbol</li>
                <li>✅ Basquetbol</li>
                <li>✅ Voleibol</li>
              </ul>

              <a
                href={cartaResponsiva}
                download
                className="inline-block mt-6 bg-lime-400 hover:bg-lime-500 text-black font-bold px-6 py-2 rounded shadow transition"
              >
                Descargar Carta Responsiva
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div>
            <h2 className="text-3xl font-bold mb-4">¡Participa con tu equipo!</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="equipo"
                placeholder="Nombre del equipo"
                value={formData.equipo}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded px-4 py-2"
              />

              <input
                type="text"
                name="iglesia"
                placeholder="Iglesia"
                value={formData.iglesia}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded px-4 py-2"
              />

              <div>
                <label className="block font-medium mb-1">Deportes</label>
                <div className="space-y-1">
                  {["futbol", "basquetbol", "voleibol"].map((deporte) => (
                    <label key={deporte} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={deporte}
                        checked={formData.deportes.includes(deporte)}
                        onChange={handleChange}
                      />
                      {deporte.charAt(0).toUpperCase() + deporte.slice(1)}
                    </label>
                  ))}
                </div>
              </div>

              <input
                type="text"
                name="lider"
                placeholder="Nombre del líder del equipo"
                value={formData.lider}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded px-4 py-2"
              />

              <input
                type="email"
                name="email"
                placeholder="Correo electrónico del líder"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded px-4 py-2"
              />

              <input
                type="number"
                name="integrantes"
                placeholder="Cantidad de integrantes (incluyendo porra)"
                value={formData.integrantes}
                onChange={handleChange}
                required
                min={1}
                className="w-full border border-slate-300 rounded px-4 py-2"
              />

              <div>
                <label className="block font-medium mb-1">Color del uniforme</label>
                <select
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 rounded px-4 py-2"
                >
                  <option value="">Selecciona un color</option>
                  {colors.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition disabled:opacity-50"
              >
                {sending ? "Enviando..." : "Enviar Registro"}
              </button>

              {success && (
                <p className="text-green-600 text-sm mt-2">
                  ¡Registro enviado con éxito!
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
