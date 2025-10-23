import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"; // 🆕 Importar SweetAlert2
import headerImg from "../../assets/hero-futbol.webp";
import futbolImg from "../../assets/futbol.jpg";
import cartaResponsiva from "../../assets/responsive_cart.pdf";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";

export default function SportsEventDetail() {
  const [formData, setFormData] = useState({
    equipo: "",
    iglesia: "",
    deportesFemenil: [] as string[],
    deportesVaronil: [] as string[],
    lider: "",
    telefono: "",
    email: "",
    integrantesFemenil: "",
    integrantesVaronil: "",
    llevaPorra: "",
    numPorristas: "",
    color: "",
  });

  const [sending, setSending] = useState(false);

  const colors = [
    "Verde", "Amarillo", "Naranja", "Morado", "Turquesa", "Fucsia", "Lima", "Vino", "Beige",
    "Marrón", "Oro", "Plata", "Lavanda", "Cian", "Coral", "Oliva", "Rosa", "Mostaza"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, checked, type } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      const [campo, deporte] = name.split("_");
      setFormData((prev) => ({
        ...prev,
        [campo]: checked
          ? [...(prev as any)[campo], deporte]
          : (prev as any)[campo].filter((d: string) => d !== deporte),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones básicas
    if (
      formData.deportesFemenil.length === 0 &&
      formData.deportesVaronil.length === 0
    ) {
      Swal.fire("Atención", "Selecciona al menos un deporte en alguna categoría.", "warning");
      return;
    }
    if (!formData.color) {
      Swal.fire("Atención", "Selecciona un color de uniforme.", "warning");
      return;
    }
    if (!formData.telefono) {
      Swal.fire("Atención", "Ingresa el número telefónico del líder.", "warning");
      return;
    }
    if (formData.llevaPorra === "sí" && !formData.numPorristas) {
      Swal.fire("Atención", "Indica el número aproximado de personas en la porra.", "warning");
      return;
    }

    setSending(true);

    emailjs
      .send(
        "service_9zn70uh",
        "template_uqyfn4n",
        {
          equipo: formData.equipo,
          iglesia: formData.iglesia,
          deportesFemenil: formData.deportesFemenil.join(", ") || "N/A",
          deportesVaronil: formData.deportesVaronil.join(", ") || "N/A",
          integrantesFemenil: formData.integrantesFemenil || "0",
          integrantesVaronil: formData.integrantesVaronil || "0",
          lider: formData.lider,
          telefono: formData.telefono,
          email: formData.email,
          llevaPorra: formData.llevaPorra || "No",
          numPorristas:
            formData.llevaPorra === "sí"
              ? formData.numPorristas || "No especificado"
              : "N/A",
          color: formData.color,
        },
        "ZJaWSKHxAeJlk8YYq"
      )
      .then(() => {
        setSending(false);
        Swal.fire({
          title: "¡Registro enviado!",
          text: "Tu registro ha sido enviado con éxito 🎉",
          icon: "success",
          confirmButtonColor: "#16a34a",
        });

        setFormData({
          equipo: "",
          iglesia: "",
          deportesFemenil: [],
          deportesVaronil: [],
          lider: "",
          telefono: "",
          email: "",
          integrantesFemenil: "",
          integrantesVaronil: "",
          llevaPorra: "",
          numPorristas: "",
          color: "",
        });
      })
      .catch((err) => {
        console.error("Error al enviar", err);
        Swal.fire("Error", "Hubo un problema al enviar el formulario. Intenta nuevamente.", "error");
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

              {/* Deportes Femenil */}
              <div>
                <label className="block font-medium mb-1">Deportes - Femenil</label>
                <div className="space-y-1">
                  {["futbol", "basquetbol", "voleibol"].map((deporte) => (
                    <label key={`f_${deporte}`} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name={`deportesFemenil_${deporte}`}
                        checked={formData.deportesFemenil.includes(deporte)}
                        onChange={handleChange}
                      />
                      {deporte.charAt(0).toUpperCase() + deporte.slice(1)}
                    </label>
                  ))}
                </div>
              </div>

              <input
                type="number"
                name="integrantesFemenil"
                placeholder="Cantidad de integrantes femenil"
                value={formData.integrantesFemenil}
                onChange={handleChange}
                min={0}
                className="w-full border border-slate-300 rounded px-4 py-2"
              />

              {/* Deportes Varonil */}
              <div>
                <label className="block font-medium mb-1">Deportes - Varonil</label>
                <div className="space-y-1">
                  {["futbol", "basquetbol", "voleibol"].map((deporte) => (
                    <label key={`v_${deporte}`} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name={`deportesVaronil_${deporte}`}
                        checked={formData.deportesVaronil.includes(deporte)}
                        onChange={handleChange}
                      />
                      {deporte.charAt(0).toUpperCase() + deporte.slice(1)}
                    </label>
                  ))}
                </div>
              </div>

              <input
                type="number"
                name="integrantesVaronil"
                placeholder="Cantidad de integrantes varonil"
                value={formData.integrantesVaronil}
                onChange={handleChange}
                min={0}
                className="w-full border border-slate-300 rounded px-4 py-2"
              />

              {/* Porra */}
              <div>
                <label className="block font-medium mb-1">
                  ¿El equipo llevará porra?
                </label>
                <select
                  name="llevaPorra"
                  value={formData.llevaPorra}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 rounded px-4 py-2"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="sí">Sí</option>
                  <option value="no">No</option>
                </select>
              </div>

              {formData.llevaPorra === "sí" && (
                <input
                  type="number"
                  name="numPorristas"
                  placeholder="Número aproximado de porristas"
                  value={formData.numPorristas}
                  onChange={handleChange}
                  min={1}
                  className="w-full border border-slate-300 rounded px-4 py-2"
                />
              )}

              <input
                type="text"
                name="lider"
                placeholder="Nombre del líder del equipo"
                value={formData.lider}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded px-4 py-2"
              />

              {/* Teléfono */}
              <input
                type="tel"
                name="telefono"
                placeholder="Número telefónico del líder"
                value={formData.telefono}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
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
                className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition disabled:opacity-50 w-full"
              >
                {sending ? "Enviando..." : "Enviar Registro"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
