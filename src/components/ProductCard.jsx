import React, { useState, useMemo, memo } from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";

// Memoized star rendering for performance
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

const WishlistButton = memo(({ wishlisted, toggle }) => (
  <button
    className={`wishlist-btn${wishlisted ? " wishlisted" : ""}`}
    onClick={toggle}
    aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
    type="button"
  >
    <span className="heart">{wishlisted ? "♥" : "♡"}</span>
  </button>
));

WishlistButton.displayName = "WishlistButton";

const ProductCard = memo(function ProductCard({ product, onAddToCart }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : ""
  );
  const [wishlisted, setWishlisted] = useState(false);

  // Memoize stars for performance
  const stars = useMemo(() => renderStars(product.rating || 0), [product.rating]);

  const handleWishlistToggle = () => setWishlisted((w) => !w);
  const handleVariantChange = (e) => setSelectedVariant(e.target.value);
  const handleAddToCart = () => onAddToCart(product, selectedVariant);

  return (
    <div className="product-card">
      <WishlistButton wishlisted={wishlisted} toggle={handleWishlistToggle} />
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          {stars}
          <span className="rating-value">{(product.rating || 0).toFixed(1)}</span>
        </div>
        <p className="product-price">${product.price.toFixed(2)}</p>
        {product.variants && product.variants.length > 0 && (
          <select
            className="product-variant"
            value={selectedVariant}
            onChange={handleVariantChange}
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
            onClick={handleAddToCart}
            type="button"
          >
            Add to Cart
          </button>
        ) : (
          <button className="out-of-stock-btn" disabled type="button">
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
});

ProductCard.displayName = "ProductCard";

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    variants: PropTypes.arrayOf(PropTypes.string),
    inStock: PropTypes.bool.isRequired,
    rating: PropTypes.number,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard; 