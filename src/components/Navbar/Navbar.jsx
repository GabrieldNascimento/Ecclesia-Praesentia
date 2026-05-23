import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Ecclesia</h1>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Início</Link>
        </li>

        <li>
          <Link to="/eventos">Eventos</Link>
        </li>

        <li>
          <Link to="/doacoes">Doações</Link>
        </li>

        <li>
          <Link to="/sobre">Sobre</Link>
        </li>

        <li>
          <Link to="/login" className="admin-link">
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
}
