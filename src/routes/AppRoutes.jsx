import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Eventos from "../pages/Eventos/Eventos";
import Doacoes from "../pages/Doacoes/Doacoes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/doacoes" element={<Doacoes />} />
    </Routes>
  );
}
