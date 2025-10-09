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
    });

    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, type } = e.target;
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
                },
                "ZJaWSKHxAeJlk8YYq"
            )
            .then(() => {
                setSending(false);
                setSuccess(true);
                setFormData({ equipo: "", iglesia: "", deportes: [], lider: "" });
            })
            .catch((err) => {
                console.error("Error al enviar", err);
                setSending(false);
            });
    };

    return (
        <><Navbar></Navbar><section className="bg-white text-slate-800">
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
            <div className="mt-12 text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    ¡Participa en nuestra actividad deportiva!
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Forma parte de esta actividad llena de energía, comunidad y fe. Inscribe a tu equipo en una o varias disciplinas, descarga la carta responsiva y prepárate para vivir una experiencia inolvidable.
                </p>
            </div>
            <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
                {/* Imagen e info */}
                <div>
                    <img
                        src={futbolImg}
                        alt="Evento deportivo"
                        className="rounded-lg shadow-md w-full object-cover" />
                    <div className="bg-black text-white mt-6 p-6 rounded-md">
                        <h2 className="text-2xl font-semibold mb-2">Costo de inscripción</h2>
                        <p className="text-4xl font-bold text-lime-400">$100</p>
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
                            className="w-full border border-slate-300 rounded px-4 py-2" />

                        <input
                            type="text"
                            name="iglesia"
                            placeholder="Iglesia"
                            value={formData.iglesia}
                            onChange={handleChange}
                            required
                            className="w-full border border-slate-300 rounded px-4 py-2" />

                        <div>
                            <label className="block font-medium mb-1">Deportes</label>
                            <div className="space-y-1">
                                {["futbol", "basquetbol", "voleibol"].map((deporte) => (
                                    <label key={deporte} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            value={deporte}
                                            checked={formData.deportes.includes(deporte)}
                                            onChange={handleChange} />
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
                            className="w-full border border-slate-300 rounded px-4 py-2" />

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
        </section><Footer></Footer></>
    );
}
