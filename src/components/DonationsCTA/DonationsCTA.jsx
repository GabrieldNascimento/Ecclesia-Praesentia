import { Link } from "react-router-dom";
import "./DonationsCTA.css";

export default function DonationsCTA() {
  return (
    <section className="donations">
      <h2>Ajude a comunidade</h2>

      <p>Suas doações ajudam a manter nossas atividades e eventos.</p>

      <Link to="/doacoes">
        <button className="donations-button">Fazer doação</button>
      </Link>
    </section>
  );
}
