import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import DonationsCTA from "../../components/DonationsCTA/DonationsCTA";
import Footer from "../../components/Footer/Footer";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <main className="home-content">
        <Hero />
        <DonationsCTA />
      </main>

      <Footer />
    </div>
  );
}
