import "./Inele-O.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import src1 from '../../../assets/IneleO/curea-01.jpg'
import src2 from '../../../assets/IneleO/curea-02.jpg'
import src3 from '../../../assets/IneleO/curea-03.jpg'
import src4 from '../../../assets/IneleO/curea-04.jpg'
import src5 from '../../../assets/IneleO/curea-05.jpg'
import src6 from '../../../assets/IneleO/curea-06.jpg'


 const categorii = [
  {imagine: src1, link: "IneleO" },
  {imagine: src2, link: "13x8"},
  {imagine: src3, link: "17x11"},
  {imagine: src4, link: "22x14"},
  {imagine: src5, link: "32x20"},
  {imagine: src6, link: "speciale"},
];

const details = {
    intro:
      "din cauciuc Perbunan (NBR), etilenă-propilenă (EPDM), Viton (FPM), silicon, neopren etc.",

    description: `
      IneleO (oringuri) sunt elemente de etanșare recunoscute în toate domeniile. Referitor la conditiile de lucru pot fi utilizate diferite materiale.
    `,

    specifications: [
      {
        name: "IneleO",
        value: "Se pot livra din materiale diferite (NBR/Viton/Silicon/EPDM/Neopren) cu orice dimensiune solicitată. \nDiametrul interior d₁ = 1-1000mm, diametrul torului d₂ = 1-15mm.",
      },
      {
        name: "Șnur rotund",
        value: "Vă putem livra șnur rotund din materialeleȘ NBR/Viton/Silicon/EPDM/Neopren cu diametrul Șnurului 1-30mm și lungimi nelimitate.",
      },
      {
        name: "Trusă pentru confectionat inele \"O\"",
        value: "Pentru executarea și montarea pe loc a inelelor O utilizate static, poate fi livrată o trusa de intervenție cu urmatorul conținut: șnur rotund NBR sau EPDM 14 marimi a 2m lungime, iar din Viton (FPM) la 1m lungime Ø1, 78/2/2, 4/2, 62/3/3, 53/4/4, 5/5/5, 33/5, 7/6/7(6,99)/8. Șablon pentru tăiat, cuțit, ruletă, adeziv pentru lipit.",
      },
    ],

      images: [
    {
      src: "/images/products/shita-garnitura.png",
      alt: "Schita garnitura"
    },
  ],

    table: {
      columns: [
        "Denumire",
        "Temperatură de lucru",
        "Rezistență chimică și fizică",
      ],

      rows: [
        [
          "NBR (PERBUNAN) \ncauciuc nitrilic",
          "-25°C +100°C",
          "General utilizabil în hidraulică și pneumatică, până la 70°C, gaze, aer până la 90°C, uleiuri, substanțe alcaline, grăsimi, glicoli, alcooli, saramuri. \nRezistență bună la uzură.",
        ],
        [
          "EPDM \netilenă-propilenă",
          "-40°C +150°C",
          "Acizi diluați, baze, alcooli, apă fierbinte, aburi și aer fără ulei până la 150°C. \nRezistent la interperii și la ozon.",

        ],
        [
          "FPM(VITON) \nElastomeri fluorurați",
          "-25°C +200°C",
          "Uleiuri fierbinți, combustibili, solvenți aromatici, hidrocarburi, cloruri, diferiți acizi, vacuum înalt. \nRezistență mare la temperatură.",
        ],
        [
          "MVQ \ncauciuc siliconic",
          "-60°C +200°C",
          "Aer cald până la 210°C, oxigen, apă până la 100°C, în industria alimentară și farmaceutică. \nRezistență mare la temperatură.",
        ],
        [
          "CR (NEOPREN) \nCauciuc coroprenic",
          "-40°C +100°C",
          "Agenți frigorifici, substanțe alcaline, alcooli, grăsimi, glicoli, ozon, apă sărată. \nRezistent la îmbătrânire și intemperii.",
        ],
        [
          "FEP/Viton \nFEP/Silicon \nCauciuc învelit",
          "-15°C +205°C \n-60°C +205°C \n\n ",
          "Acizi și baze concentrate, ozon, solvenți, uleiuri, aburi, apă fierbinte. \nRezitența chimica excelentă, alunecare bună/",
        ],
        [
          "FEPM (KALREZ) \nCauciuc perfluoric",
          "-30°C +260°C",
          "Solvenți, acizi și baze concentrate, oxidanți puternici, clor, ozon, combustibili, saramuri. \nRezistență chimica și termică foarte mare(scump!).",
        ],
      ],
    },
}

const product = {
    id: 3,
    title: "INELE-O, ȘNUR ROTUND ȘI PROFILE ",
    description: "din cauciuc Perbunan (NBR), etilenă-propilenă (EPDM), Viton (FPM), silicon, neopren etc.",
    image: '/images/products/inele.jpg',
    discount: false,
}

export function IneleO() {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <section>
        <main className="product-details-page">

          {/* BREADCRUMB */}
          <div className="product-breadcrumb">
            <Link to="/">Acasă</Link>
            <span>/</span>
            <Link to="/products">Produse</Link>
            <span>/</span>
            <span>{product.title}</span>
          </div>

          {/* HERO */}
          <section className="product-hero">

            <div className="product-hero-image">
              <img
                src={product.image}
                alt={product.title}
              />
            </div>

            <div className="product-hero-content">

              <span className="product-label">
                PRODUSE INDUSTRIALE
              </span>

              <h1>{product.title}</h1>

              <div className="product-line" />

              {details.intro && (
                <p>{details.intro}</p>
              )}

              <Link
                to="/contact"
                className="product-contact-button"
              >
                Solicită informații
                <span>→</span>
              </Link>

            </div>

          </section>

          {/* DESCRIERE */}
          {details.description && (
            <section className="product-section">

              <div className="section-heading">
                <h2>DESCRIERE</h2>
              </div>

              <div className="section-content">
                <p>{details.description}</p>
              </div>

            </section>
          )}

          {/* GAMA DE PRODUSE */}
          <section className="product-section">

            <div className="section-heading">
              <h2>VERIFICA STOC</h2>
            </div>

            <div className="clasice__grid">
              {categorii.map((categorie) => (
                <Link
                  to={`/inele/${categorie.link}`}
                  className="clasice__card"
                  key={categorie.denumire}
                >
                  <div className="clasice__image-wrap">
                    <img
                      src={categorie.imagine}
                      alt={`Curea trapezoidală ${categorie.denumire}`}
                      className="clasice__image"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </section>


          {/* APLICAȚII */}
          {details.applications?.length > 0 && (
            <section className="product-section">

              <div className="section-heading">
                <h2>APLICAȚII</h2>
              </div>

              <div className="applications-grid">

                {details.applications.map((application, index) => (
                  <div
                    className="application-item"
                    key={index}
                  >
                    <span>✓</span>
                    <p>{application}</p>
                  </div>
                ))}

              </div>

            </section>
          )}


          {/* AVANTAJE */}
          {details.advantages?.length > 0 && (
            <section className="product-section">

              <div className="section-heading">
                <h2>AVANTAJE</h2>
              </div>

              <div className="advantages-grid">

                {details.advantages.map((advantage, index) => (
                  <div
                    className="advantage-card"
                    key={index}
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{advantage}</h3>
                  </div>
                ))}

              </div>

            </section>
          )}


          {/* SPECIFICAȚII */}
          {details.specifications?.length > 0 && (
            <section className="product-section">

              <div className="section-heading">
                <h2>SPECIFICAȚII</h2>
              </div>

              <div className="specifications">

                {details.specifications.map(
                  (specification, index) => (
                    <div
                      className="specification-row"
                      key={index}
                    >
                      <span>
                        {specification.name}
                      </span>

                      <strong>
                        {specification.value}
                      </strong>
                    </div>
                  )
                )}

              </div>

            </section>
          )}

          {/* TABELE */}
          {details.tables?.length > 0 && (
            <section className="product-section product-tables-section">

              <div className="section-heading">
                <h2>GAMĂ DE PRODUSE</h2>
              </div>

              <div className="product-tables">

                {details.tables.map((table, tableIndex) => (

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
          {details.images?.length > 0 && (
            <section className="product-section product-images-section">

              <div className="section-heading">
                <h2>GALERIE</h2>
              </div>

              <div className="product-carousel">

                <div className="carousel-image-wrapper">

                  <img
                    src={details.images[currentImage].src}
                    alt={
                      details.images[currentImage].alt ||
                      product.title
                    }
                    className="carousel-image"
                  />

                  {details.images.length > 1 && (
                    <>
                      <button
                        className="carousel-button carousel-prev"
                        onClick={() =>
                          setCurrentImage(
                            currentImage === 0
                              ? details.images.length - 1
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
                            currentImage === details.images.length - 1
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

                {details.images.length > 1 && (
                  <div className="carousel-dots">

                    {details.images.map((_, index) => (
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

                {details.images.length > 1 && (
                  <div className="carousel-counter">
                    {currentImage + 1} / {details.images.length}
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
      </section>
    </>
  );
}


export default IneleO;