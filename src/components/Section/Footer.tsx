import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <h2 className="text-2xl font-bold mb-4">YOURSTORE</h2>

        <div className="flex justify-center gap-6 mb-6 text-gray-400">
          <a href="#" aria-label="Facebook" className="hover:text-red-500"><Facebook size={20} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-red-500"><Instagram size={20} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-red-500"><Twitter size={20} /></a>
          <a href="#" aria-label="YouTube" className="hover:text-red-500"><Youtube size={20} /></a>
        </div>

        {/* Texto inferior */}
        <p className="text-xs text-gray-500">
          © 2025 Fejobach. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
