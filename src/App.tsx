import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import MisionVision from "./components/Section/MisionVision";
import Objetivos from "./components/Section/Objectives";
import Calendario from "./components/Section/Calendar";
import Resources from "./components/Section/Resources";
import Alabanza from "./components/Section/resources/Alabanza";
import Predicacion from "./components/Section/resources/Predicacion";
import Evangelismo from "./components/Section/resources/Evangelismo";
import Multimedia from "./components/Section/resources/Multimedia";
import DeportesSociales from "./components/Section/resources/DeportesSociales";
import Activities from "./components/Section/Activities";
import Meet from "./components/Section/Meet";
import ActivitiesPast from "./components/Section/ActivitiesPast";
import PdfSection from "./screens/PdfSection";

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
        <Route path="/resources/alabanza" element={<Alabanza />} />
        <Route path="/resources/predicacion" element={<Predicacion />} />
        <Route path="/resources/evangelismo" element={<Evangelismo />} />
        <Route path="/resources/multimedia" element={<Multimedia />} />
        <Route path="/resources/deportes" element={<DeportesSociales />} />
        <Route path="/conocenos" element={<Meet />} />
        <Route path="/pasado" element={<ActivitiesPast />} />
        <Route path="/materiales" element={<PdfSection />} />
      </Routes>
    </Router>
  );
}
