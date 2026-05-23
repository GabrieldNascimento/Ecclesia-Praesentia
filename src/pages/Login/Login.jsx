import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <Navbar />

      <main className="login-content">
        <section className="login-card">
          <h1>Área Administrativa</h1>

          <p>Entre com suas credenciais para acessar o painel.</p>

          <form className="login-form">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />

            <button type="submit">Entrar</button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
