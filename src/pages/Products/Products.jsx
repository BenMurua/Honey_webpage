import React from "react";
import { useTranslation } from "react-i18next";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import product_image from "../../assets/eztia.jpg";

const PaginaProducts = () => {
  const { t } = useTranslation();

  // Obtenemos los productos, devolviendo un array vacío si no existe
  const productsData = t("Products.items", { returnObjects: true }) || [];

  const products = productsData.map((item, index) => ({
    id: index + 1,
    name: item.name,
    description: item.description,
    price: [12.5, 20.0, 8.0, 15.0, 9.5, 25.0][index] || 0,
    image: product_image,
  }));

  return (
    <main>
      <h1>{t("Products.title")}</h1>
      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <p>{t("Products.noProducts")}</p>
      )}
    </main>
  );
};

export default PaginaProducts;
