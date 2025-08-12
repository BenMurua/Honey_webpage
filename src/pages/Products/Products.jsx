import React from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import product_image from "../../assets/eztia.jpg";

const sampleProducts = [
  {
    id: 1,
    name: "Etxeko Eztia 250g",
    description: "Lore anitzeko ezti natural eta goxoa.",
    price: 12.5,
    image: product_image,
  },
  {
    id: 2,
    name: "Txertatutako Eztia 500g",
    description: "Kalitate handiko, zapore indartsuko eztia.",
    price: 20.0,
    image: product_image,
  },
  {
    id: 3,
    name: "Txinparta Polena 200g",
    description: "Erle polen naturala, osasuntsu eta energetikoa.",
    price: 8.0,
    image: product_image,
  },
  {
    id: 4,
    name: "Ezti Kristalizatu 300g",
    description:
      "Ezti mota hau kristalizazio naturala duena, testura krematsua.",
    price: 15.0,
    image: product_image,
  },
  {
    id: 5,
    name: "Erle Errautsa 150g",
    description: "Erle errautsa, ongarria eta osagarri natural moduan.",
    price: 9.5,
    image: product_image,
  },
  {
    id: 6,
    name: "Eztia eta Ganbak Paketea",
    description: "Etxeko eztia eta ganbak, pakete berezian.",
    price: 25.0,
    image: product_image,
  },
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
