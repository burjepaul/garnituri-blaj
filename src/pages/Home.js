import "./Home.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo-garstar.png";

function Home() {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">

        <div className="hero-background" />

        <div className="hero-overlay">
          <div className="hero-content">

            <div className="hero-logo">
              <img
                src={logo}
                alt="GARstar SRL"
              />
            </div>

            <span className="hero-label">
              SOLUȚII INDUSTRIALE DE ETANȘARE
            </span>

            <h1>
              Garnituri la comandă
              <br />
              pentru orice aplicație
            </h1>

            <div className="hero-line" />

            <p>
              Producem garnituri tehnice personalizate din cauciuc,
              silicon, PTFE, fibră și alte materiale pentru aplicații
              industriale, auto și echipamente speciale.
            </p>

            <div className="hero-buttons">

              <Link
                to="/produse"
                className="btn primary"
              >
                Vezi produsele
                <span>→</span>
              </Link>

              <Link
                to="/contact"
                className="btn secondary"
              >
                Cere o ofertă
                <span>→</span>
              </Link>

            </div>

          </div>
        </div>

        <div className="hero-bottom">
          <span>GARSTAR SRL</span>
          <span>GARNITURI • ETANȘĂRI • SOLUȚII TEHNICE</span>
        </div>

      </section>


      {/* INTRO */}
      <section className="home-intro">

        <div className="container">

          <div className="intro-label">
            DESPRE NOI
          </div>

          <div className="intro-grid">

            <div className="intro-title">
              <h2>
                Experiență și precizie
                <br />
                în soluții de etanșare
              </h2>
            </div>

            <div className="intro-content">

              <p>
                Cu o experiență de peste 15 ani, realizăm garnituri
                pentru diverse aplicații industriale și comerciale.
                Punem accent pe precizie, alegerea corectă a materialului
                și adaptarea produsului la cerințele fiecărei aplicații.
              </p>

              <p>
                Lucrăm cu materiale tehnice și soluții de etanșare
                adaptate condițiilor de lucru, temperaturii, presiunii
                și mediului de utilizare.
              </p>

              <Link
                to="/despre"
                className="text-link"
              >
                Descoperă compania
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* SERVICII */}
      <section className="services">

        <div className="container">

          <div className="section-top">

            <div>
              <span className="section-number">01</span>

              <h2>
                Ce oferim
              </h2>
            </div>

            <p>
              Soluții de etanșare adaptate cerințelor
              fiecărei aplicații.
            </p>

          </div>


          <div className="service-grid">

            <article className="service-card">

              <span className="service-number">
                01
              </span>

              <div className="service-icon">
                ⚙
              </div>

              <h3>
                Producție la comandă
              </h3>

              <p>
                Garnituri executate după desen tehnic,
                model, mostră sau dimensiunile furnizate.
              </p>

            </article>


            <article className="service-card">

              <span className="service-number">
                02
              </span>

              <div className="service-icon">
                ◇
              </div>

              <h3>
                Materiale tehnice
              </h3>

              <p>
                Soluții din cauciuc, silicon, PTFE, fibră
                și alte materiale destinate aplicațiilor
                industriale.
              </p>

            </article>


            <article className="service-card">

              <span className="service-number">
                03
              </span>

              <div className="service-icon">
                ✓
              </div>

              <h3>
                Precizie și calitate
              </h3>

              <p>
                Produse realizate cu atenție la dimensiuni,
                toleranțe și cerințele specifice aplicației.
              </p>

            </article>


            <article className="service-card">

              <span className="service-number">
                04
              </span>

              <div className="service-icon">
                →
              </div>

              <h3>
                Livrare rapidă
              </h3>

              <p>
                Procesare eficientă a comenzilor și
                livrare în cel mai scurt timp posibil.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* CATEGORII */}
      <section className="categories">

        <div className="container">

          <div className="section-top">

            <div>
              <span className="section-number">02</span>

              <h2>
                Categorii de produse
              </h2>
            </div>

            <Link
              to="/produse"
              className="text-link"
            >
              Vezi toate produsele
              <span>→</span>
            </Link>

          </div>


          <div className="category-grid">

            <Link to="/produse" className="category-card">
              <span>01</span>
              <h3>O-Ring</h3>
              <p>Garnituri toroidale pentru diverse aplicații.</p>
              <strong>→</strong>
            </Link>

            <Link to="/produse" className="category-card">
              <span>02</span>
              <h3>Silicon</h3>
              <p>Garnituri pentru temperaturi și aplicații speciale.</p>
              <strong>→</strong>
            </Link>

            <Link to="/produse" className="category-card">
              <span>03</span>
              <h3>PTFE</h3>
              <p>Materiale de etanșare pentru medii solicitante.</p>
              <strong>→</strong>
            </Link>

            <Link to="/produse" className="category-card">
              <span>04</span>
              <h3>Cauciuc NBR</h3>
              <p>Soluții pentru aplicații industriale și tehnice.</p>
              <strong>→</strong>
            </Link>

            <Link to="/produse" className="category-card">
              <span>05</span>
              <h3>EPDM</h3>
              <p>Garnituri pentru aplicații cu apă, abur și exterior.</p>
              <strong>→</strong>
            </Link>

            <Link to="/produse" className="category-card">
              <span>06</span>
              <h3>Viton</h3>
              <p>Etanșări pentru temperaturi și medii agresive.</p>
              <strong>→</strong>
            </Link>

            <Link to="/produse" className="category-card">
              <span>07</span>
              <h3>Garnituri metalice</h3>
              <p>Soluții pentru aplicații industriale exigente.</p>
              <strong>→</strong>
            </Link>

            <Link to="/produse" className="category-card">
              <span>08</span>
              <h3>Garnituri hidraulice</h3>
              <p>Etanșări pentru sisteme hidraulice și pneumatice.</p>
              <strong>→</strong>
            </Link>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="home-cta">

        <div className="container">

          <div className="cta-content">

            <span>
              AI NEVOIE DE O SOLUȚIE PERSONALIZATĂ?
            </span>

            <h2>
              Trimite-ne desenul sau dimensiunile.
            </h2>

            <p>
              Analizăm cerințele aplicației și îți pregătim
              o soluție de etanșare potrivită.
            </p>

          </div>

          <Link
            to="/contact"
            className="cta-button"
          >
            Cere o ofertă
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;