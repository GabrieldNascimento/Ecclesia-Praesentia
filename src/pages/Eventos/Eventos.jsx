import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import EventCard from "../../components/EventCard/EventCard";

import { listarEventos } from "../../services/eventoService";

import "./Eventos.css";

export default function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  function formatarData(data) {
    return new Date(data).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  useEffect(() => {
    async function carregarEventos() {
      try {
        const dados = await listarEventos();

        setEventos(dados);
      } catch (error) {
        console.log(error);

        setErro("Erro ao carregar eventos.");
      } finally {
        setLoading(false);
      }
    }

    carregarEventos();
  }, []);

  return (
    <div className="events-page">
      <Navbar />

      <main className="events-content">
        <section className="events-header">
          <h1>Eventos da comunidade</h1>

          <p>Acompanhe encontros, missões, celebrações e ações sociais.</p>
        </section>

        {loading && <p className="events-message">Carregando eventos...</p>}

        {erro && <p className="events-message error-message">{erro}</p>}

        {!loading && !erro && (
          <section className="events-grid">
            {eventos.length > 0 ? (
              eventos.map((event) => (
                <EventCard
                  key={event.id}
                  title={event.titulo}
                  date={formatarData(event.data)}
                  description={event.descricao}
                />
              ))
            ) : (
              <p className="events-message">Nenhum evento encontrado.</p>
            )}
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
