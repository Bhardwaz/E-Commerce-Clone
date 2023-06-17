import React from "react";
import "./Subtotal.css";
import { useSelector } from "react-redux";

const Subtotal = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const total = cartItems?.reduce((amount, item) => item[2] + amount, 0);
  return (
    <div className="subtotal">
      <h4>
        {" "}
        Subtotal ({cartItems.length} items) : {total}$
      </h4>
      <div className="gift">
        <input type="checkbox" id="gift" />
        <label htmlFor="gift">This item Contains Gift </label>
      </div>

      <button> Proceed to Checkout </button>
    </div>
  );
};

export default Subtotal;
