import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RegistroTorneo from "./components/Section/RegistroTorneo";
import UnderConstruction from "./components/Section/UnderConstruction";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UnderConstruction />} />

        <Route path="/evento-deportivo" element={<RegistroTorneo />} />
      </Routes>
    </Router>
  );
}
