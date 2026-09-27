import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import products from "../../data/productsData";
import categoryDetails from "../../data/categoryDetails";
import "./ProductDetails.css";

function ProductDetails() {
  const { productId } = useParams();
  const [currentImage, setCurrentImage] = useState(0);

  const product = products.find(
    (item) => String(item.id) === String(productId)
  );

  const details = categoryDetails[productId];

  if (!product || !details) {
    return (
      <main className="product-details-page">
        <h1>Produsul nu a fost găsit</h1>

        <Link to="/produse">
          ← Înapoi la produse
        </Link>
      </main>
    );
  }

  // Stabilim automat numărul secțiunilor existente
  let sectionNumber = 0;

  const getSectionNumber = () => {
    sectionNumber++;
    return String(sectionNumber).padStart(2, "0");
  };

  return (
    <main className="product-details-page">

      {/* BREADCRUMB */}
      <div className="product-breadcrumb">
        <Link to="/">Acasă</Link>
        <span>/</span>
        <Link to="/produse">Produse</Link>
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
            <span>{getSectionNumber()}</span>
            <h2>DESCRIERE</h2>
          </div>

          <div className="section-content">
            <p>{details.description}</p>
          </div>

        </section>
      )}


      {/* APLICAȚII */}
      {details.applications?.length > 0 && (
        <section className="product-section">

          <div className="section-heading">
            <span>{getSectionNumber()}</span>
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
            <span>{getSectionNumber()}</span>
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
            <span>{getSectionNumber()}</span>
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


      {/* TABEL */}
      {details.table?.columns?.length > 0 &&
        details.table?.rows?.length > 0 && (

          <section className="product-section product-table-section">

            <div className="section-heading">
              <span>{getSectionNumber()}</span>
              <h2>GAMĂ DE PRODUSE</h2>
            </div>

            <div className="product-table-wrapper">

              <table className="product-table">

                <thead>
                  <tr>
                    {details.table.columns.map(
                      (column, index) => (
                        <th key={index}>
                          {column}
                        </th>
                      )
                    )}
                  </tr>
                </thead>

                <tbody>

                  {details.table.rows.map(
                    (row, rowIndex) => (
                      <tr key={rowIndex}>

                        {row.map(
                          (cell, cellIndex) => (
                            <td key={cellIndex}>
                              {cell}
                            </td>
                          )
                        )}

                      </tr>
                    )
                  )}

                </tbody>

              </table>

            </div>

          </section>
        )}

        {/* GALERIE */}
{details.images?.length > 0 && (
  <section className="product-section product-images-section">

    <div className="section-heading">
      <span>{getSectionNumber()}</span>
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
  );
}

export default ProductDetails;