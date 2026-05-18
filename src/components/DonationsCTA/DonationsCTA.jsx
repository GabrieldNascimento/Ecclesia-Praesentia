import { Link } from "react-router-dom";

export default function DonationsCTA() {
  return (
    <section style={{ padding: "40px 20px", textAlign: "center" }}>
      <h2>Ajude a comunidade</h2>
      <p>Suas doações ajudam a manter nossas atividades e eventos.</p>

      <Link to="/doacoes">
        <button>Fazer doação</button>
      </Link>
    </section>
  );
}
