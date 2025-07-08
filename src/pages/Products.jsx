import React, { useState, useMemo, useCallback, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "./Products.css";

const testProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    image: "/assets/images/1594728176097-61zBrD4EswL._AC_SL1500_.jpg",
    variants: ["Black", "White", "Blue"],
    inStock: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    price: 39.99,
    image: "/assets/images/1594728821919-714hGsMXZaL._AC_UX679_.jpg",
    variants: ["Red", "Gray"],
    inStock: false,
    rating: 4.1,
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 129.99,
    image: "/assets/images/1594738805136-71htAr2SpBL._AC_SL1500_.jpg",
    variants: ["Silver", "Black"],
    inStock: true,
    rating: 3.8,
  },
  {
    id: 4,
    name: "DSLR Camera",
    price: 499.99,
    image: "/assets/images/1594738887088-81+WmLbpzvL._AC_SL1500_.jpg",
    variants: ["Body Only", "With Lens"],
    inStock: true,
    rating: 4.9,
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: 29.99,
    image: "/assets/images/1594739091288-716irmhfMkL._AC_SL1500_.jpg",
    variants: ["Wired", "Wireless"],
    inStock: false,
    rating: 4.0,
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 89.99,
    image: "/assets/images/1594739168624-61NwNFbA9FL._AC_SL1000_.jpg",
    variants: ["Blue Switches", "Red Switches"],
    inStock: true,
    rating: 4.7,
  },
  {
    id: 7,
    name: "4K Monitor",
    price: 299.99,
    image: "/assets/images/1594739262021-61TAggR+upL._AC_SL1500_.jpg",
    variants: ["27-inch", "32-inch"],
    inStock: true,
    rating: 4.3,
  },
  {
    id: 8,
    name: "Travel MacBook Pro 13 Case",
    price: 19.99,
    image: "/assets/images/travel_macbookpro13_front.png",
    variants: ["Gray", "Black"],
    inStock: false,
    rating: 3.5,
  },
  // Additional products
  {
    id: 9,
    name: "Portable SSD 1TB",
    price: 109.99,
    image: "/assets/images/1594728176097-61zBrD4EswL._AC_SL1500_.jpg",
    variants: ["Black", "Silver"],
    inStock: true,
    rating: 4.8,
  },
  {
    id: 10,
    name: "Noise Cancelling Earbuds",
    price: 79.99,
    image: "/assets/images/1594728821919-714hGsMXZaL._AC_UX679_.jpg",
    variants: ["White", "Pink"],
    inStock: true,
    rating: 4.2,
  },
  {
    id: 11,
    name: "Smart Home Hub",
    price: 59.99,
    image: "/assets/images/1594738805136-71htAr2SpBL._AC_SL1500_.jpg",
    variants: ["Standard", "Pro"],
    inStock: false,
    rating: 3.9,
  },
  {
    id: 12,
    name: "Ultra HD Webcam",
    price: 49.99,
    image: "/assets/images/1594738887088-81+WmLbpzvL._AC_SL1500_.jpg",
    variants: ["1080p", "4K"],
    inStock: true,
    rating: 4.6,
  },
];

const sortOptions = [
  { value: "default", label: "Default" },
  { value: "priceLowHigh", label: "Price: Low to High" },
  { value: "priceHighLow", label: "Price: High to Low" },
];

const ProductsControls = ({ 
  sort, 
  setSort, 
  inStockOnly, 
  setInStockOnly, 
  minRating, 
  setMinRating, 
  searchTerm,
  setSearchTerm,
  sortOptions 
}) => (
  <div className="products-controls">
    <label>
      Search:
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className="search-input"
      />
    </label>
    <label>
      Sort by:
      <select value={sort} onChange={e => setSort(e.target.value)}>
        {sortOptions.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </label>
    <label>
      <input
        type="checkbox"
        checked={inStockOnly}
        onChange={e => setInStockOnly(e.target.checked)}
      />
      In Stock Only
    </label>
    <label>
      Min Rating:
      <select value={minRating} onChange={e => setMinRating(Number(e.target.value))}>
        <option value={0}>All</option>
        <option value={3.5}>3.5+</option>
        <option value={4.0}>4.0+</option>
        <option value={4.5}>4.5+</option>
      </select>
    </label>
  </div>
);

const Products = () => {
  const [sort, setSort] = useState("default");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleAddToCart = useCallback((product, variant) => {
    alert(`Added ${product.name} (${variant}) to cart!`);
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = testProducts.filter(
      (p) => 
        (!inStockOnly || p.inStock) && 
        p.rating >= minRating &&
        p.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    if (sort === "priceLowHigh") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sort === "priceHighLow") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }
    return filtered;
  }, [sort, inStockOnly, minRating, debouncedSearchTerm]);

  return (
    <div>
      <ProductsControls
        sort={sort}
        setSort={setSort}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
        minRating={minRating}
        setMinRating={setMinRating}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOptions={sortOptions}
      />
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;