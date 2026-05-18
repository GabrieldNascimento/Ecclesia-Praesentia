import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1>Ecclesia</h1>

      <p>Conectando fiéis a eventos, missões e contribuições da comunidade.</p>

      <Link to="/eventos">
        <button>Ver eventos</button>
      </Link>
    </section>
  );
}
