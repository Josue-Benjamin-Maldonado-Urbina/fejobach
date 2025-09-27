import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import UnderConstruction from "./views/UnderConstruction/UnderConstruction";
import MisionVision from "./components/Section/MisionVision";
import Objetivos from "./components/Section/Objectives";
import Actividades from "./components/Section/Activities";
import Calendario from "./components/Section/Calendar";
import Resources from "./components/Section/Resources";
import Alabanza from "./components/Section/resources/Alabanza";
import Predicacion from "./components/Section/resources/Predicacion";
import Evangelismo from "./components/Section/resources/Evangelismo";
import Multimedia from "./components/Section/resources/Multimedia";
import DeportesSociales from "./components/Section/resources/DeportesSociales";
import Activities from "./components/Section/Activities";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<MisionVision />} />
        <Route path="/" element={<Objetivos />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/calendar" element={<Calendario />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/construccion" element={<UnderConstruction />} />
        <Route path="/recurso-no-disponible" element={<UnderConstruction />} />
        <Route path="/resources/alabanza" element={<Alabanza />} />
        <Route path="/resources/predicacion" element={<Predicacion />} />
        <Route path="/resources/evangelismo" element={<Evangelismo />} />
        <Route path="/resources/multimedia" element={<Multimedia />} />
        <Route path="/resources/deportes" element={<DeportesSociales />} />

      </Routes>
    </Router>
  );
}
