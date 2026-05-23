import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Sobre.css";

export default function Sobre() {
  return (
    <div className="about-page">
      <Navbar />

      <main className="about-content">
        <section className="about-hero">
          <h1>Sobre o Ecclesia</h1>

          <p>
            Uma plataforma criada para fortalecer a comunidade através da fé, da
            solidariedade e da participação em eventos.
          </p>
        </section>

        <section className="about-sections">
          <article className="about-card">
            <h2>Nossa missão</h2>

            <p>
              Promover união entre os fiéis, facilitar a divulgação de eventos e
              incentivar ações sociais dentro da comunidade.
            </p>
          </article>

          <article className="about-card">
            <h2>Comunidade</h2>

            <p>
              Acreditamos que a fé cresce quando compartilhada. Por isso,
              buscamos aproximar pessoas, missões e iniciativas solidárias.
            </p>
          </article>

          <article className="about-card">
            <h2>Solidariedade</h2>

            <p>
              As doações e campanhas ajudam a manter atividades comunitárias e
              apoiar famílias necessitadas.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
