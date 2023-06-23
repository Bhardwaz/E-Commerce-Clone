import React from "react";
import "./Payment.css";
import { useSelector } from "react-redux";
import Product from "./Product";

const Payment = () => {
  const user = useSelector((store) => store.auth.user);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user.length ? user[0].user.email : " "}</p>
            <p>{user.length ? "123 React Lane" : " "}</p>
            <p>{user.length ? "Karol Bagh(New Delhi)" : " "}</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">{}</div>
        </div>
        <div className="payment__section"></div>
      </div>
    </div>
  );
};

export default Payment;
