import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "./utils/cartSlice";

const Checkout = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };
  const handleClear = () => dispatch(clearCart());
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.cminds.com/wp-content/uploads/WP_Amazon_accounts_Illustrative_Banner.jpg"
          alt="ad"
        />
        <div className="checkout__section">
          <div className="checkout__title">
            <h2>Your Basket</h2>
            <button
              type="submit"
              onClick={() => {
                handleClear();
              }}
            >
              {" "}
              Clear Basket{" "}
            </button>
          </div>
          {cartItems.map((item) => {
            const [title, image, price, rating, id] = item;
            return (
              <div className="checkout__item" key={id}>
                <img className="checkout__itemImage" src={image} alt="image_" />
                <div className="checkout__itemInfo">
                  <h3> {title} </h3>
                  <h2> {price} </h2>
                  <div className="checkout__itemRating">
                    {Array(rating)
                      .fill()
                      .map((_, i) => (
                        <p key={i}>🌟</p>
                      ))}
                  </div>
                  <button onClick={() => handleRemoveItem(id)}> Remove </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};
export default Checkout;
