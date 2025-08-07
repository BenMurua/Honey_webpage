import React from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

const sampleProducts = [
  {
    id: 1,
    name: "Etxeko Eztia 250g",
    description: "Miel natural de flores variadas",
    price: 12.5,
    image: "/src/assets/eztia.jpg",
  },
  {
    id: 2,
    name: "Miel de Romero",
    description: "Miel con sabor a romero silvestre",
    price: 15,
    image: "/src/assets/eztia.jpg",
  },
  // agrega más productos si quieres
];

const PaginaProducts = () => {
  return (
    <main>
      <h1>Productos</h1>
      <ProductGrid products={sampleProducts} />
    </main>
  );
};

export default PaginaProducts;
