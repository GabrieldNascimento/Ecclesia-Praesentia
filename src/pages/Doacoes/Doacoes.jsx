import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { criarDoacao, obterTotalDoacoes } from "../../services/doacoesService";

import "./Doacoes.css";

export default function Doacoes() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  async function atualizarTotal() {
    try {
      const totalApi = await obterTotalDoacoes();

      setTotal(totalApi);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function carregarTotalInicial() {
      await atualizarTotal();
    }

    carregarTotalInicial();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    setErro("");
    setSucesso("");

    try {
      setLoading(true);

      await criarDoacao({
        nome,
        valor: Number(valor),
        tipo: mensagem || "Doação comum",
      });

      setSucesso("Doação realizada com sucesso!");

      setNome("");
      setValor("");
      setMensagem("");

      await atualizarTotal();
    } catch (error) {
      console.log(error);

      setErro("Erro ao enviar doação.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="donations-page">
      <Navbar />

      <main className="donations-content">
        <section className="donation-card">
          <h1>Faça uma doação</h1>

          <p>
            Sua contribuição ajuda a manter eventos, missões e ações sociais da
            comunidade.
          </p>

          <form className="donation-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <input
              type="number"
              placeholder="Valor da doação"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />

            <textarea
              placeholder="Mensagem (opcional)"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Confirmar doação"}
            </button>

            {sucesso && <p className="success-message">{sucesso}</p>}

            {erro && <p className="error-message">{erro}</p>}
          </form>
        </section>

        <section className="total-card">
          <h2>Total arrecadado</h2>

          <span className="total-value">
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>

          <p>Valor total arrecadado pela comunidade através das doações.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
