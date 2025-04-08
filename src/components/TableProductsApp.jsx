import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../helpers/apiFake";

const TableProductsApp = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  const borrarProducto = (id) => {
    deleteProduct(id).then((respuesta) => {
      console.log(respuesta);
      const productNew = products.filter((product) => product.id !== id);
      setProducts(productNew);
    });
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Categoría</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <th scope="row">{product.id}</th>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>
              <button
                onClick={() => borrarProducto(product.id)}
                className="btn btn-danger"
              >
                x
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableProductsApp;
