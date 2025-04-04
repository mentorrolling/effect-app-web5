import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductId } from "../helpers/apiFake";

const ProductScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductId(id).then((response) => setProduct(response));
  }, []);

  return (
    <div className="container">
      <div className="row py-5">
        <div className="col">
          <h1>Detalle de producto</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {product ? (
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center align-items-center ">
                  <img
                    src={product.image}
                    className="img-fluid rounded-start p-2 card-image"
                    alt={product.title}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="d-flex justify-content-end">
                      <p className="card-text fs-2">
                        <span className="text-body-secondary">
                          ${product.price}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <h3>Cargando info...</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
