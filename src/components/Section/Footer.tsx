import React from "react";
import { Facebook, Instagram } from "lucide-react";
import fejobachLogo from "../../assets/fejobach-logo-2.svg";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img
            src={fejobachLogo}
            alt="Fejobach Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center gap-6 mb-6 text-gray-400">
          <a
            href="https://www.facebook.com/fejobachpage/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-red-500 transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/fejobach"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-red-500 transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Texto inferior */}
        <p className="text-xs text-gray-500">
          © 2025 Fejobach. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
