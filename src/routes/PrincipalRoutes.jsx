import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import AboutScreen from "../pages/AboutScreen";
import ProductScreen from "../pages/ProductScreen";
import NotFoundScreen from "../pages/NotFoundScreen";
import NavBarApp from "../components/NavBarApp";
import AdminScreen from "../pages/AdminScreen";
import AdminRoute from "./AdminRoute";

const PrincipalRoutes = () => {
  return (
    <>
      <NavBarApp />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminScreen />
            </AdminRoute>
          }
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </>
  );
};

export default PrincipalRoutes;
