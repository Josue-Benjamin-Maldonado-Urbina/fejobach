import React from "react";
import Button from "../../ui/Button";
import fejobachLogo from "../../assets/fejobach-logo.png";

export default function Topbar() {
  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={fejobachLogo}
            alt="Fejobach Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Links */}
        <ul className="hidden gap-8 text-sm text-slate-600 md:flex">
          <li><a className="hover:text-slate-900" href="#">Home</a></li>
          <li><a className="hover:text-slate-900" href="#">Misión y visión</a></li>
          <li><a className="hover:text-slate-900" href="#">Objetivos</a></li>
          <li><a className="hover:text-slate-900" href="#">Actividades</a></li>
          <li><a className="hover:text-slate-900" href="#">Calendario</a></li>
          <li><a className="hover:text-slate-900" href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
