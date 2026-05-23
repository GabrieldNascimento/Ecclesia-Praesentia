import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Eventos from "../pages/Eventos/Eventos";
import Doacoes from "../pages/Doacoes/Doacoes";
import Sobre from "../pages/Sobre/Sobre";
import Login from "../pages/Login/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/doacoes" element={<Doacoes />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
