import React from "react";
import { Link } from "react-router-dom";

const CardProduct = (props) => {
  //   console.log(props.product.image);

  const { image, title, id } = props.product;
  return (
    <div className="col">
      <Link to={`/product/${id}`}>
        <div className="card h-100">
          <img src={image} className="card-img-top card-image" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProduct;
