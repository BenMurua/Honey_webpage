// ProductsGrid.jsx
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

const ProductsGrid = ({ products = [] }) => {
  return (
    <div className="products-grid">
      {products.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ProductsGrid;
