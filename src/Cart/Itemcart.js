import React, { useState } from "react";
import { useCart } from "react-use-cart";

const Itemcart = (props) => {
  const { addItem } = useCart();

  return (
    <div className="col-8 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card pt-0 overflow-hidden h-100 shadow">
        <img src={props.img} className="card-img-top img-fuild" alt="..." />
        <div class="card-body text-center">
          <h5 class="card-title"> {props.title} </h5>
          <p class="card-text"> {props.desc}</p>
          <p class="card-text"> ₹ {props.price}</p>
          <button class="btn btn-primary" onClick={() => addItem(props.item)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Itemcart;
