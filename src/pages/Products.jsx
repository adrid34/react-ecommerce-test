import React from "react";
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

const handleAddToCart = (product, variant) => {
  alert(`Added ${product.name} (${variant}) to cart!`);
};

const Products = () => {
  return (
    <div className="products-grid">
      {testProducts.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default Products;