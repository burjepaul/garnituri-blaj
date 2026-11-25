import "./CureleTrapezoidale.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import src1 from '../../../assets/curele-trapezoidale/curea-01.jpg'
import src2 from '../../../assets/curele-trapezoidale/curea-02.jpg'
import src3 from '../../../assets/curele-trapezoidale/curea-03.jpg'
import src4 from '../../../assets/curele-trapezoidale/curea-04.jpg'
import src5 from '../../../assets/curele-trapezoidale/curea-05.jpg'
import src6 from '../../../assets/curele-trapezoidale/curea-06.jpg'

const categorii = [
  {imagine: src1, link: "10x6" },
  {imagine: src2, link: "13x8"},
  {imagine: src3, link: "17x11"},
  {imagine: src4, link: "22x14"},
  {imagine: src5, link: "32x20"},
  {imagine: src6, link: "speciale"},
];

const details = {
  images: [
      {
        src: "/images/products/curele-trapezoidale-schita.jpg",
        alt: "Schita garnitura"
      },
      {
        src: "/images/products/curele-trapezoidale-schita2.jpg",
        alt: "Schita garnitura"
      },
      {
        src: "/images/products/curele-trapezoidale-schita3.jpg",
        alt: "Schita garnitura"
      },

  ],
  tables: [{
    columns: [
      "CURELE TRAPEZOIDALE CLASICE   ISO 4183/84, DIN 2215, STAS 1164",
      "",
      "",
      "",
      "",
      "",
    ],

    rows: [
      [
        "Profil I (învelit) ",
        "10\nZ",
        "13\nA",
        "17\nB",
        "22\nC",
        "32\nD",
      ],

      [
        "Profil II (flancuri deschise şi danturat prin formare)",
        "X10\nXZ",
        "X13\nXA",
        "X17\nXB",
        "X22\nXC",
        "",
      ],
      [
        "Lăţime mare b",
        "10",
        "13",
        "17",
        "22",
        "32",
      ],
      [
        "Înălţimea curelelor h ",
        "6",
        "8",
        "11",
        "14",
        "20",
      ],
      [
        "Lăţime mică bu",
        "5,9",
        "7,5",
        "9,4",
        "12,3",
        "18,2",
      ],
      [
        "Lungime interioară Li=La-",
        "38",
        "50",
        "69",
        "88",
        "126",
      ],
      [
        "Lungime activă Lw (Ld)=Li+",
        "22",
        "30",
        "40",
        "58",
        "75",
      ],
    ],
  },
  {
    columns: [
      "CURELE TRAPEZOIDALE ÎNGUSTE ISO 4183/84, ISO 2790, DIN 7753, STAS 7192/2, RMA/MPT",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    rows: [
      [
        "Profil I (învelit)",
        "SPZ",
        "SPA",
        "SPB",
        "19",
        "SPC",
        "3V",
        "5V",
        "8V",
        "",
        "",
      ],
      [
        "Profil II (flancuri deschise şi danturat prin formare)",
        "XPZ",
        "XPA",
        "XPB",
        "S",
        "XPC",
        "3VX",
        "5VX",
        "",
        "AVX10",
        "AVX13",
      ],
      [
        "Lăţime mare b",
        "9,7",
        "12,7",
        "16,3",
        "18,6",
        "22",
        "9,53",
        "15,88",
        "25,4",
        "10",
        "13",
      ],
      [
        "Înălţimea curelelor h ",
        "8",
        "10",
        "13",
        "15",
        "18",
        "8",
        "13",
        "23",
        "8",
        "10",
      ],
      [
        "Lăţime mică bu ",
        "4",
        "5,6",
        "7",
        "8",
        "9,3",
        "4,2",
        "7,3",
        "9,6",
        "4,9",
        "5,8",
      ],
      [
        "Lungime interioară Li=La- ",
        "51",
        "63",
        "82",
        "94",
        "113",
        "42",
        "71",
        "120",
        "51",
        "63",
      ],
      [
        "Lungime activă Lw (Ld)=La-",
        "13",
        "18",
        "22",
        "25",
        "30",
        " ",
        " ",
        " ",
        "13",
        "18",
      ],
    ],
  },
  {
    columns: [
      "CURELE VARIATOR ISO 1604, ISO 3410, DIN 7719",
      "",
      "",
    ],
    rows: [
      [
        "Profil II (flancuri deschise şi danturat prin formare)",
        "",
        ""
      ],
      [
        "13x5",
        "28x8",
        "47x13",
      ],
      [
        "17x5 ISO W16 ",
        "30x10",
        "52x16 ISO W50",
      ],
      [
        "20x10",
        "32x10 ISO W31,5",
        "55x16",
      ],
      [
        "21x6 ISO W20",
        "36x12",
        "65x20 ISO W63",
      ],
      [
        "22x8",
        "36x14",
        "70x18",
      ],
      [
        "23x10",
        "37x10",
        "80x23 ISO W80",
      ],
      [
        "26x8 ISO W25",
        "41x13 ISO W 40",
        "",
      ],
    ],
  },
  {
    columns: [
      "CURELE TRAPEZOIDALE SPECIALE ISO 5290; DIN 7722; ISO 9962; DIN 7867",
      "",
      "",
      "",
    ],
    rows: [
      [
        "Curele hexagonale",
        "Curele multiple (Kraftband)",
        "Poly-V (b x h)",
        "Curele modulare",
      ],
      [
        "AA (13x10)",
        "A/HA (13x9,9) e~15,9 3V/ 9J (9x9,9) e~10,3",
        "PH (1,6x3,0)",
        "Z/10; A/13 ",
      ],
      [
        "BB (17x13)",
        "B/HB (17x13) e~19,1 5V/ 15J (15x15,1) e~17,5 ",
        "PJ (2,34x3,5) ",
        "B/17; C/22 ",
      ],
      [
        "CC (22x17)",
        "C/HC (22x16,2) e~25,4 8V/ 25J (25x25,5) e~28,6",
        "PK (3,56x5,5) ",
        "D/32",
      ],
      [
        "22x22 (22x22) ",
        "D/HD (32x22,4) e~36,5 3VX (9x9,9) e~10,3",
        "PL (4,7x7,0)",
        "SPA",
      ],
      [
        "25x22 (25x22)",
        "SPB (16,5x15,6) e~20 5VX (15x15,1) e~17,5",
        "PM (9,4x13,0)",
        "SPB",
      ],
      [
        "DD (32x25)",
        "SPC (22x22,6) e~25,5 ",
        "TB2 (2,0x2,2)",
        "SPC",
      ],
    ],
  },
  ],
}

const product = {
    id: 1,
    title: "CURELE TRAPEZOIDALE",
    description: "Trapezoidale, dințate, late, rotunde, profilate din cauciuc și materiale plastice",
    image: "/images/products/curea-trapezoidala.jpg",
    discount: false,
}

export default function CureleTrapezoidale() {
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
              <h2>VERIFICĂ STOCUL</h2>
            </div>

            <div className="clasice__grid">
              {categorii.map((categorie) => (
                <Link
                  to={`/curele-trapezoidale/${categorie.link}`}
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

                  <div className="clasice__card-content">
                    <h3>{categorie.denumire || categorie.link}</h3>
                    <span className="clasice__card-arrow">→</span>
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
