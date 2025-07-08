import React, { useState } from "react";
import "./ProductCard.css";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<span key={i} className="star filled">★</span>);
    } else if (i - rating < 1 && i - rating > 0) {
      stars.push(<span key={i} className="star half">★</span>);
    } else {
      stars.push(<span key={i} className="star">☆</span>);
    }
  }
  return stars;
};

const ProductCard = ({ product, onAddToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : ""
  );
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="product-card">
      <button
        className={`wishlist-btn${wishlisted ? " wishlisted" : ""}`}
        onClick={() => setWishlisted((w) => !w)}
        aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        {wishlisted ? (
          <span className="heart">♥</span>
        ) : (
          <span className="heart">♡</span>
        )}
      </button>
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          {renderStars(product.rating || 0)}
          <span className="rating-value">{(product.rating || 0).toFixed(1)}</span>
        </div>
        <p className="product-price">${product.price.toFixed(2)}</p>
        {product.variants && product.variants.length > 0 && (
          <select
            className="product-variant"
            value={selectedVariant}
            onChange={e => setSelectedVariant(e.target.value)}
          >
            {product.variants.map(variant => (
              <option key={variant} value={variant}>
                {variant}
              </option>
            ))}
          </select>
        )}
        {product.inStock ? (
          <button
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product, selectedVariant)}
          >
            Add to Cart
          </button>
        ) : (
          <button className="out-of-stock-btn" disabled>
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard; 