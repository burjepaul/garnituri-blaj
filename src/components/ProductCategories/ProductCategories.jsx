
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { fetchProductsData } from "../../data/fetchProductsData";
import "./ProductCategories.css";

function ProductCategories() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      try {
        const data = await fetchProductsData();

        if (!cancelled) {
          setProducts(data.products);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Nu s-au putut încărca produsele.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <section className="products-section">
        <div className="products-header">
          <h2>PRODUSE</h2>
        </div>
        <p>Se încarcă produsele...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="products-section">
        <div className="products-header">
          <h2>PRODUSE</h2>
        </div>
        <p>Produsele nu au putut fi încărcate.</p>
        <button onClick={() => window.location.reload()}>
          Încearcă din nou
        </button>
      </section>
    );
  }

  return (
    <section className="products-section">
      <div className="products-header">
        <h2>PRODUSE</h2>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            discount={product.discount}
            to={`/produse/${product.id}`}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductCategories;
