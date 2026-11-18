import ProductCard from "../ProductCard/ProductCard";
import "./ProductCategories.css";
import products from "../../data/productsData";

function ProductCategories() {
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