import React from "react";
import FormAddProductApp from "../components/FormAddProductApp";
import TableProductsApp from "../components/TableProductsApp";

const AdminScreen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Administración de productos</h1>
        </div>
      </div>
      <FormAddProductApp />
      <div className="row">
        <div className="col">
          <h3>Tabla de productos</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TableProductsApp />
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
