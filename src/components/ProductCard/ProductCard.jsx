// Product.jsx
import React from "react";
import "./ProductCard.css";
import { useTranslation } from "react-i18next";

const ProductCard = ({ product }) => {
  const { t } = useTranslation();
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
      </div>
      <button>{t("ProductCard.AddToCart")}</button>
    </div>
  );
};

export default ProductCard;
