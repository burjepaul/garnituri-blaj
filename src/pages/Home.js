import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Garnituri la comandă pentru orice aplicație</h1>

            <p>
              Producem garnituri din cauciuc, silicon, PTFE, fibră și alte
              materiale tehnice pentru industrie, auto și echipamente speciale.
            </p>

            <div className="hero-buttons">
            <Link to="/products" className="btn primary">
                 Vezi Produsele
            </Link>

              <Link to="/contact" className="btn secondary">
                Cere Ofertă
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">

          <h2>Despre noi</h2>

          <p>
            Cu o experiență de peste 15 ani, realizăm garnituri la comandă pentru
            diverse aplicații industriale și comerciale. Folosim materiale de
            înaltă calitate și tehnologii moderne pentru a garanta produse
            fiabile și durabile.
          </p>

        </div>
      </section>

      <section className="services">

        <div className="container">

          <h2>Ce oferim</h2>

          <div className="cards">

            <div className="card">
              <span>⚙️</span>
              <h3>Producție la comandă</h3>
              <p>
                Garnituri executate după desen, model sau dimensiuni furnizate.
              </p>
            </div>

            <div className="card">
              <span>🚚</span>
              <h3>Livrare rapidă</h3>
              <p>
                Expediem comenzile oriunde în România în cel mai scurt timp.
              </p>
            </div>

            <div className="card">
              <span>🏆</span>
              <h3>Calitate garantată</h3>
              <p>
                Materiale certificate și control riguros al calității.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="categories">

        <div className="container">

          <h2>Categorii de produse</h2>

          <div className="category-grid">

            <div className="category">O-Ring</div>
            <div className="category">Silicon</div>
            <div className="category">PTFE</div>
            <div className="category">Cauciuc NBR</div>
            <div className="category">EPDM</div>
            <div className="category">Viton</div>
            <div className="category">Garnituri Metalice</div>
            <div className="category">Garnituri Hidraulice</div>

          </div>

        </div>

      </section>

      <section className="cta">

        <div className="container">

          <h2>Ai nevoie de o garnitură personalizată?</h2>

          <p>
            Trimite-ne desenul sau dimensiunile, iar noi îți pregătim rapid o
            ofertă.
          </p>

          <a href="/contact" className="btn primary">
            Contactează-ne
          </a>

        </div>

      </section>

    </div>
  );
}

export default Home;