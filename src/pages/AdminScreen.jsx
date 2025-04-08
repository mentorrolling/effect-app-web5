import React, { useState } from "react";
import FormAddProductApp from "../components/FormAddProductApp";
import TableProductsApp from "../components/TableProductsApp";

const AdminScreen = () => {
  const [productos, setProductos] = useState(
    JSON.parse(localStorage.getItem("productos")) || []
  );

  const addProduct = (datos) => {
    const id = new Date().getTime();
    const data = [...productos, { id, ...datos }];
    setProductos(data);
    localStorage.setItem("productos", JSON.stringify(data));
  };

  const deleteProduct = (product) => {
    const productNew = productos.filter(
      (producto) => producto.id !== product.id
    );
    const validar = confirm(`Eliminará el producto ${product.title}`);
    if (validar) {
      setProductos(productNew);
      localStorage.setItem("productos", JSON.stringify(productNew));
    }
  };

  const updateProduct = (id, datos) => {
    const index = productos.findIndex((product) => product.id === id);
    const productosLocal = [...productos];
    productosLocal[index] = { ...productosLocal[index], ...datos };
    setProductos(productosLocal);
    localStorage.setItem("productos", JSON.stringify(productosLocal));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Administración de productos</h1>
        </div>
      </div>
      <FormAddProductApp addProduct={addProduct} />
      <div className="row">
        <div className="col">
          <h3>Tabla de productos</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TableProductsApp
            products={productos}
            borrarProducto={deleteProduct}
            updateProduct={updateProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
