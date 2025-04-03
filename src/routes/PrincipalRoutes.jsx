import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import AboutScreen from "../pages/AboutScreen";
import ProductScreen from "../pages/ProductScreen";
import NavBarApp from "../components/NavBarApp";

const PrincipalRoutes = () => {
  return (
    <>
      <NavBarApp />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
      </Routes>
    </>
  );
};

export default PrincipalRoutes;
