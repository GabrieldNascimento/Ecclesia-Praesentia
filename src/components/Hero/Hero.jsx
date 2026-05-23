import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Ecclesia</h1>

        <p>
          Conectando fiéis a eventos, missões e contribuições da comunidade.
        </p>

        <Link to="/eventos">
          <button className="hero-button">Ver eventos</button>
        </Link>
      </div>
    </section>
  );
}
