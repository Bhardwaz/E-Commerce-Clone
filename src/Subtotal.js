import React from "react";
import "./Subtotal.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const total = cartItems?.reduce((amount, item) => item?.price + amount, 0);
  const history = useHistory();
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

      <button onClick={(e) => history.push("/payment")}>
        {" "}
        Proceed to Checkout{" "}
      </button>
    </div>
  );
};

export default Subtotal;
