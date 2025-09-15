import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-500">
        © {new Date().getFullYear()} Fejobach
      </div>
    </footer>
  );
}
