import React, { useEffect, useState } from "react";
import { getProducts } from "../helpers/apiFake";
import CardProduct from "./CardProduct";

const FakeStoreApp = () => {
  const [products, setProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getProducts().then((respuesta) => {
      setProducts(respuesta);
      setCurrentProducts(respuesta);
    });
  }, []);

  useEffect(() => {
    filtrarProductos();
  }, [inputValue]);

  const handleChange = (e) => {
    // console.log(e.target.value);
    const { value } = e.target;
    setInputValue(value);
  };

  const filtrarProductos = () => {
    if (inputValue) {
      const filtro = products.filter((item) =>
        item.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      // console.log(filtro);
      setCurrentProducts(filtro);
    } else {
      // console.log(products);
      setCurrentProducts(products);
    }
    // console.log(filtro);
  };

  return (
    <div className="container ">
      <div className="row py-5">
        <div className="col">
          <h1>Lista de productos</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Buscar productos..."
            value={inputValue}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {currentProducts.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FakeStoreApp;
