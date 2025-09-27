import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fejobachLogoHorizontal from "../../assets/fejobach-logo-2.png";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll transparency logic
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll a secciones internas
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
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur shadow border-b border-slate-200"
          : "bg-white"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={fejobachLogoHorizontal}
            alt="Fejobach Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Menú escritorio */}
        <ul className="hidden md:flex gap-6 text-sm text-slate-700 items-center bg-slate-100 py-2 px-6 rounded-full shadow-sm">
          <li>
            <Link to="/" className="hover:text-slate-900">
              Principal
            </Link>
          </li>

          {/* Dropdown Nosotros */}
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

          <li>
            <Link to="/calendar" className="hover:text-slate-900">
              Calendario
            </Link>
          </li>
          <li>
            <Link to="/resources" className="hover:text-slate-900">
              Recursos
            </Link>
          </li>
        </ul>

        {/* Botón derecho oscuro */}
        <button className="hidden md:inline-block bg-red-500 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-neutral-800 transition">
          Concócenos
        </button>

        {/* Botón hamburguesa (mobile) */}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Menú Mobile */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4">
          <ul className="space-y-2 text-slate-700 text-sm">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Principal
              </Link>
            </li>
            <li>
              <button
                onClick={() => setSubmenuOpen(!submenuOpen)}
                className="flex items-center justify-between w-full"
              >
                <span>Nosotros</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    submenuOpen ? "rotate-180" : ""
                  }`}
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
                  <li>
                    <a
                      href="/#mision"
                      onClick={(e) =>
                        handleAnchorClick(e, () => setMenuOpen(false))
                      }
                    >
                      Misión y Visión
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#objetivos"
                      onClick={(e) =>
                        handleAnchorClick(e, () => setMenuOpen(false))
                      }
                    >
                      Objetivos
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#contacto"
                      onClick={(e) =>
                        handleAnchorClick(e, () => setMenuOpen(false))
                      }
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/calendar" onClick={() => setMenuOpen(false)}>
                Calendario
              </Link>
            </li>
            <li>
              <Link to="/resources" onClick={() => setMenuOpen(false)}>
                Recursos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
