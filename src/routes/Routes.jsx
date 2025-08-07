import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import Layout from "../components/Layout/Layout";
import { RoutesValues } from "../models/RoutesValues.js";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: RoutesValues.about,
        element: <About />,
      },
      {
        path: RoutesValues.products,
        element: <Products />,
      },
      {},
    ],
  },
]);
