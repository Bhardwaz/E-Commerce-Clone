import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const Product = ({ title, image, price, rating, id }) => {
  const info = {
    title: title,
    image: image,
    price: price,
    rating: rating,
    id: id,
  };

  const dispatch = useDispatch();
  const handleAddItem = (info) => {
    dispatch(addItem(info));
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product_image" />
      <button onClick={() => handleAddItem(info)} type="button">
        {" "}
        Add to Basket{" "}
      </button>
    </div>
  );
};

export default Product;
