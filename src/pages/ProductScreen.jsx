import React from "react";
import { useParams } from "react-router-dom";

const ProductScreen = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Product Screen</h1>
    </div>
  );
};

export default ProductScreen;
