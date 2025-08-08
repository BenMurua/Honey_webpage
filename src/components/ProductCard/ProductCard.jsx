// Product.jsx
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
      </div>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default ProductCard;
