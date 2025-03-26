import React, { useEffect } from "react";
import { getProducts } from "../helpers/apiFake";

const FakeStoreApp = () => {
  useEffect(() => {
    getProducts().then((respuesta) => {
      console.log(respuesta);
    });
  }, []);

  return <div>FakeStoreApp</div>;
};

export default FakeStoreApp;
