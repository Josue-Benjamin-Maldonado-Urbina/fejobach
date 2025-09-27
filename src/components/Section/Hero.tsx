import React from "react";
import heroImage from "../../assets/hero-bg.jpg";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa6';
import whatsappIcon from "../../assets/icons/whatsapp.svg";
import facebookIcon from "../../assets/icons/facebook1.svg";
import instagramIcon from "../../../assets/icons/instagram.svg";


export default function Hero() {
    return (
        <section
            id="home"
            className="relative h-[100vh] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Overlay morado */}
            <div className="absolute inset-0 bg-purple-900 opacity-70" />

            {/* Contenido centrado */}
            <div className="relative z-10 text-center text-white px-4 max-w-3xl">
                <p className="uppercase text-sm tracking-widest mb-2">
                    Creciendo en gracia, sirviendo en amor, unidos cumplimos la misión.
                </p>
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                    Federación de Jóvenes Bautistas del Centro de Chiapas
                </h1>

                {/* Botones */}
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="https://www.facebook.com/fejobachpage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-medium shadow hover:bg-slate-100 transition"
                    >
                        <img src={facebookIcon} alt="WhatsApp" className="w-5 h-5" />
                        Fejobach Page
                    </a>

                    <a
                        href="/activities"
                        className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-red-600 transition"
                    >
                        Ver actividades
                    </a>
                </div>
            </div>
        </section>
    );
}
