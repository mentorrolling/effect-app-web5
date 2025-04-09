import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import AboutScreen from "../pages/AboutScreen";
import ProductScreen from "../pages/ProductScreen";
import NotFoundScreen from "../pages/NotFoundScreen";
import NavBarApp from "../components/NavBarApp";
import AdminScreen from "../pages/AdminScreen";

const PrincipalRoutes = () => {
  return (
    <>
      <NavBarApp />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </>
  );
};

export default PrincipalRoutes;
