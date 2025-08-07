import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom"; // Add this import

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Render nested routes here */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
