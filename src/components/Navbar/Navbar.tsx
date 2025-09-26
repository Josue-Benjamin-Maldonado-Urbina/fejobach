import React, { useState } from "react";
import { Link } from "react-router-dom";
import fejobachLogo from "../../assets/fejobach-logo.png";
import Dropdown from "./Dropdown";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    // Scroll animado a secciones internas
    function handleAnchorClick(
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        closeMenu?: () => void
    ) {
        const href = e.currentTarget.getAttribute("href");
        if (href?.startsWith("/#") || href?.startsWith("#")) {
            const id = href.replace("/#", "").replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                if (closeMenu) closeMenu();
            }
        }
    }

    return (
        <header className="w-full border-b border-slate-200 bg-white sticky top-0 z-50">
            <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={fejobachLogo} alt="Fejobach Logo" className="h-8 w-auto" />
                </Link>

                {/* Botón hamburguesa (solo en mobile) */}
                <button
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                    >
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Menú de escritorio */}
                <ul className="hidden md:flex gap-8 text-sm text-slate-600 items-center">
                    <li><Link to="/" className="hover:text-slate-900">Principal</Link></li>

                    {/* Dropdown Nosotros (desktop) */}
                    <li>
                        <Dropdown label="Nosotros">
                            <a
                                href="/#mision"
                                onClick={(e) => handleAnchorClick(e)}
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                            >
                                Misión y Visión
                            </a>
                            <a
                                href="/#objetivos"
                                onClick={(e) => handleAnchorClick(e)}
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                            >
                                Objetivos
                            </a>
                            <a
                                href="/#contacto"
                                onClick={(e) => handleAnchorClick(e)}
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                            >
                                Contacto
                            </a>
                        </Dropdown>

                    </li>

                    <li><Link to="/actividades" className="hover:text-slate-900">Actividades</Link></li>
                    <li><Link to="/contacto" className="hover:text-slate-900">Contacto</Link></li>
                </ul>
            </nav>

            {/* Menú Mobile */}
            {menuOpen && (
                <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4">
                    <ul className="space-y-2 text-slate-700 text-sm">
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Principal</Link></li>

                        <li>
                            <button
                                onClick={() => setSubmenuOpen(!submenuOpen)}
                                className="flex items-center justify-between w-full"
                            >
                                <span>Nosotros</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${submenuOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {submenuOpen && (
                                <ul className="mt-2 space-y-1 pl-4">
                                    <li><a href="/#mision" onClick={(e) => handleAnchorClick(e, () => setMenuOpen(false))}>Misión y Visión</a></li>
                                    <li><a href="/#objetivos" onClick={(e) => handleAnchorClick(e, () => setMenuOpen(false))}>Objetivos</a></li>
                                    <li><a href="/#contacto" onClick={(e) => handleAnchorClick(e, () => setMenuOpen(false))}>Contacto</a></li>
                                </ul>
                            )}
                        </li>

                        <li><Link to="/actividades" onClick={() => setMenuOpen(false)}>Actividades</Link></li>
                        <li><Link to="/resources" onClick={() => setMenuOpen(false)}>Recursos</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
}
