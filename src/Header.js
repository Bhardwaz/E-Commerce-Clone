import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { logoutUser } from "./utils/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.auth.user);
  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch(logoutUser());
    }
  };
  return (
    <div className="header">
      <Link to={"/"}>
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div onClick={handleAuth} className="header__option">
            <span className="header__optionLineOne">
              Hello {user.length ? user[0].user.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {" "}
              {user.length ? "Sign Out" : "Sign In"}{" "}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your </span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to={"/checkout"}>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {cartItems.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
