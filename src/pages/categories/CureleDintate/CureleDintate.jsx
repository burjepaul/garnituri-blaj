import { Link} from "react-router-dom";
import { useState } from "react";

import "./CureleDintate.css";

const tables = [{
    columns: [
      "Tip",
      "T2,5",
      "T5",
      "T10",
      "T20",
      "AT5",
      "AT10",
      "AT20",
      "MXL",
      "XL",
      "L",
      "H",
      "XH",
      "XXH",
    ],
    rows: [
      [
        "Pasul t",
        "2,5",
        "5,0",
        "10,0",
        "20,0",
        "5,0",
        "10,0",
        "20,0",
        "2,032",
        "5,08",
        "9,525",
        "12,7",
        "22,225",
        "31,75",
      ],
      [
        "Unghiul dintelui",
        "40°",
        "40°",
        "40°",
        "40°",
        "50°",
        "50°",
        "50°",
        "40°",
        "50°",
        "40°",
        "40°",
        "40°",
        "40°",
      ],
      [
        "Înălțimea dinteului h1",
        "0,7",
        "1,2",
        "2,5",
        "5,0",
        "1,2",
        "2,5",
        "5,0",
        "0,51",
        "1,27",
        "1,91",
        "2,29",
        "6,35",
        "9,53",
      ],
      [
        "Înălțimea dinteului w",
        "1,0",
        "1,8",
        "3,5",
        "6,5",
        "2,5",
        "5,0",
        "10,0",
        "0,77",
        "1,38",
        "3,2",
        "4,4",
        "7,94",
        "12,1",
      ],
      [
        "Înălțimea curelelor h",
        "1,3",
        "2,2",
        "4,5",
        "8,0",
        "2,7",
        "5,0",
        "8,0",
        "1,2",
        "2,3",
        "3,6",
        "4,3",
        "11,2",
        "15,7",
      ],
    ],
  },
  {
        columns: [
      "Tip",
      "3M",
      "5M",
      "8M",
      "14M",
      "20M",
      "S 3M",
      "S 5M",
      "S 8M",
      "S 14M",
    ],
    rows: [
      [
        "Pasul t",
        "3,0",
        "5,0",
        "8,0",
        "14,0",
        "20,0",
        "3,0",
        "5,0",
        "8,0",
        "14,0",
      ],
      [
        "Înălțimea dintelui h1",
        "1,20",
        "2,10",
        "3,40",
        "6,10",
        "8,40",
        "1,14",
        "1,91",
        "3,05",
        "5,30",
      ],
      [
        "Înălțimea curelelor h",
        "2,4",
        "3,6",
        "5,6",
        "10,0",
        "13,2",
        "1,9",
        "3,4",
        "5,3",
        "10,2",
      ],
    ],
}]

const images = [
      {
        src: "/images/products/curele-dintate.jpg",
        alt: "Schita garnitura"
      },
      {
        src: "/images/products/curele-dintate-schita2.jpg",
        alt: "Schita garnitura"
      },
      {
        src: "/images/products/curele-dintate-schita3.jpg",
        alt: "Schita garnitura"
      },
      {
        src: "/images/products/curele-dintate-schita4.jpg",
        alt: "Schita garnitura"
      },
      {
        src: "/images/products/curele-dintate-schita5.jpg",
        alt: "Schita garnitura"
      },

]

function CureleDintate() {

  const [currentImage, setCurrentImage] = useState(0);

  return (
    <main className="product-details-page">

      {/* BREADCRUMB */}
      <div className="product-breadcrumb">
        <Link to="/">Acasă</Link>
        <span>/</span>
        <Link to="/products">Produse</Link>
        <span>/</span>
        <span>CURELE DINȚATE</span>
      </div>

      {/* HERO */}
      <section className="product-hero">

        <div className="product-hero-image">
          <img
            src="/images/products/curele-dintate.jpg"
            alt="CURELE DINȚATE"
          />
        </div>

        <div className="product-hero-content">

          <span className="product-label">
            PRODUSE INDUSTRIALE
          </span>

          <h1>CURELE DINȚATE</h1>

          <div className="product-line" />
          <p>Se compun din Neopren și Poliuretan cu cordul de tracțiune Kevlar, oțel superior și fibră de sticlă.</p>
          

          <Link
            to="/contact"
            className="product-contact-button"
          >
            Solicită informații
            <span>→</span>
          </Link>

        </div>

      </section>

      <section className="product-section">

        <div className="section-heading">
          <h2>DESCRIERE</h2>
        </div>

        <div className="section-content">
          <p>Straturi speciale de acoperire: Supergrip; Linatex; PVC profilat; PU; HV; Neo; Correx; Porol; Celloflex; PAR; Silicon; RP 400. Se livrează sub formă de curea închisă/deschisă și roți pentru curele dințate.</p>
        </div>

      </section>


      {/* APLICAȚII */}
      <section className="product-section">

        <div className="section-heading">
          <h2>APLICAȚII</h2>
        </div>

        <div className="applications-grid">

            <div className="application-item">
              <span>✓</span>
              <p>Transimisie sincronă</p>
              <span>✓</span>
              <p>Benzi transportoare acoperite cu materiale speciale (Celloflex, Supergrip, Linatex)</p>
            </div>
        </div>

      </section>

      {/* SPECIFICAȚII */}
        <section className="product-section">
          <div className="section-heading">
            <h2>SPECIFICAȚII</h2>
          </div>

          <div className="specifications">

                <div className="specification-row">
                  <span>T2,5; T5, T10; T20 dinţi în formă trapezoidală</span>
                  <strong>Lăţimi preferate (mm): 4; 6; 8; 10; 12; 16; 20; 25; 32; 50; 75; 100</strong>
                </div>
                <div className="specification-row">
                  <span>AT5; AT5L; AT10; AT10L; AT20 dinţi în formă trapezoidală</span>
                  <strong>Lăţimi preferate (mm): 10; 16; 25; 32; 50; 75; 100</strong>
                </div>
                <div className="specification-row">
                  <span>MXL; XL; L; H ; XH; XXH dinţi în formă trapezoidală</span>
                  <strong>Lăţimi preferate: Cod (L): 012(3,18) 019(4,76) 025(6,35) 031(7,94) 037(9,63) 050(12,7) 075(19,1) 100(25,4) 150(38,1) 200(50,8) 300(76,2) 400(101,6) 500(127) 600(152,4) 700(177,8 )</strong>
                </div>
                <div className="specification-row">
                  <span>3M; 5M; 8M; 14M; 20M dinţi în formă semirotundă</span>
                  <strong></strong>
                </div>
                <div className="specification-row">
                  <span>STD 3M; STD 5M; STD 8M; STD 14M  formă de evolventă</span>
                  <strong>Lăţimi preferate (mm): 6; 9; 15; 20; 25; 30; 40; 50; 55; 85; 115; 170</strong>
                </div>
                <div className="specification-row">
                  <span>Dublu dinţate</span>
                  <strong>D-XL; D-L; D-H; D-T5; D-T10; D-5M; D-8M; D-14M;</strong>
                </div>

          </div>
        </section>


      {/* TABELE */}
      {tables?.length > 0 && (
        <section className="product-section product-tables-section">

          <div className="section-heading">
            <h2>GAMĂ DE PRODUSE</h2>
          </div>

          <div className="product-tables">

            {tables.map((table, tableIndex) => (

              <div
                className="product-table-block"
                key={tableIndex}
              >

                {table.title && (
                  <h3 className="product-table-title">
                    {table.title}
                  </h3>
                )}

                <div className="product-table-wrapper">

                  <table className="product-table">

                    <thead>
                      <tr>
                        {table.columns.map((column, index) => (
                          <th key={index}>
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>

                      {table.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>

                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>
                              {cell}
                            </td>
                          ))}

                        </tr>
                      ))}

                    </tbody>

                  </table>

                </div>

              </div>

            ))}

          </div>

        </section>
      )}

        {/* GALERIE */}
{images?.length > 0 && (
  <section className="product-section product-images-section">

    <div className="section-heading">
      <h2>GALERIE</h2>
    </div>

    <div className="product-carousel">

      <div className="carousel-image-wrapper">

        <img
          src={images[currentImage].src}
          alt={
            images[currentImage].alt ||
          "CURELE DINȚATE"          }
          className="carousel-image"
        />

        {images.length > 1 && (
          <>
            <button
              className="carousel-button carousel-prev"
              onClick={() =>
                setCurrentImage(
                  currentImage === 0
                    ? images.length - 1
                    : currentImage - 1
                )
              }
              aria-label="Imaginea anterioară"
            >
              ‹
            </button>

            <button
              className="carousel-button carousel-next"
              onClick={() =>
                setCurrentImage(
                  currentImage === images.length - 1
                    ? 0
                    : currentImage + 1
                )
              }
              aria-label="Imaginea următoare"
            >
              ›
            </button>
          </>
        )}

      </div>

      {images.length > 1 && (
        <div className="carousel-dots">

          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${
                index === currentImage
                  ? "active"
                  : ""
              }`}
              onClick={() => setCurrentImage(index)}
              aria-label={`Imaginea ${index + 1}`}
            />
          ))}

        </div>
      )}

      {images.length > 1 && (
        <div className="carousel-counter">
          {currentImage + 1} / {images.length}
        </div>
      )}

    </div>

  </section>
)}


      {/* CTA */}
      <section className="product-cta">

        <div>
          <span>AI NEVOIE DE INFORMAȚII?</span>

          <h2>
            Contactează-ne pentru detalii
          </h2>
        </div>

        <Link to="/contact">
          Contact
          <span>→</span>
        </Link>

      </section>

    </main>
  );
}

export default CureleDintate;