import React, { useState, useRef, useEffect } from "react";

type DropdownProps = {
  label: React.ReactNode;
  children: React.ReactNode;
};

export default function Dropdown({ label, children }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Cierra el menú si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus(); // vuelve al botón
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 px-3 py-2 text-sm transition-colors ${
          open ? "text-slate-900" : "text-slate-600"
        } hover:text-slate-900`}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {label}
        <svg
          className={`w-4 h-4 mt-[2px] transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full mt-2 w-48 rounded-md border border-slate-200 bg-white py-2 shadow-lg z-50"
        >
          {React.Children.map(children, (child, index) => (
            <div role="menuitem" tabIndex={-1}>
              {child}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
