import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home/Home";
import UnderConstruction from "./views/UnderConstruction/UnderConstruction";
import MisionVision from "./components/Section/MisionVision";
import Objetivos from "./components/Section/Objectives";
import Actividades from "./components/Section/Activities";
import Calendario from "./components/Section/Calendar";
import Contacto from "./components/Section/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<MisionVision />} />
        <Route path="/" element={<Objetivos />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/" element={<Contacto />} />
        <Route path="/construccion" element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
}
