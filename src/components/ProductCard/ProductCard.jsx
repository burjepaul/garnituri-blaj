import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({
  image,
  title,
  description,
  discount = false,
  to,
}) {
  return (
    <Link to={to} className="product-card">

      <div className="product-image-container">
        <img
          src={image}
          alt={title}
          className="product-image"
        />

        {discount && (
          <div className="discount-badge">
            <span>%</span>
            <small>OFERTĂ</small>
          </div>
        )}
      </div>

      <div className="product-card-content">

        <h3 className="product-title">
          {title}
        </h3>

        {description && (
          <p className="product-description">
            {description}
          </p>
        )}

        <div className="product-details-button">
          <span>Vezi detalii</span>
          <span className="arrow">→</span>
        </div>

      </div>

    </Link>
  );
}

export default ProductCard;