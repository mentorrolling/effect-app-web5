import React, { useState } from "react";
// Importar formulario para agregar producto
// Importar Tabla de productos

const AdminScreen = () => {
  const [productos, setProductos] = useState(
    JSON.parse(localStorage.getItem("productos")) || []
  );

  const addProduct = (datos) => {
    // agregar producto
  };

  const deleteProduct = (product) => {
    //    Eliminar producto
  };

  const updateProduct = (id, datos) => {
    //    Actualizar producto
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Administración de productos</h1>
        </div>
      </div>
      {/* Formulario para dar de alta producto  */}
      <div className="row">
        <div className="col">
          <h3>Tabla de productos</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {/* Tabla de productos con botones para borrar y actualizar  */}
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
