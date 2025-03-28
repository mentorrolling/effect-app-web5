import React from "react";

const CardProduct = (props) => {
  //   console.log(props.product.image);

  const { image, title } = props.product;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top card-image" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
