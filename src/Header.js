import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const[{basket,user}] = useStateValue();

  const login = () =>{
    if (user) {
      auth.signOut();
    }
  }

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.warlordgames.com/wp-content/uploads/2019/07/hobby-shop-logo-1559519444.jpg"
          alt=""
        >
        </img>
      </Link>

      {/*searchbox*/}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/*links*/}
      <div className="Header__nav">
      <Link to={!user && "/login"} className="header__link">
        <div onClick={login} className="header__option">
          <span className="header__optionlineone">Hello {user?.email}</span>
          <span className="header__optionlinetwo">{user ? 'Sign Out' : 'Sign in'}</span>
        </div>
      </Link>

      <Link to="/" className="header__link">
        <div className="header__option">
          <span className="header__optionlineone">Return</span>
          <span className="header__optionlinetwo">&Orders</span>
        </div>
      </Link>

      <Link to="/" className="header__link">
        <div className="header__option">
          <span className="header__optionlineone">Your </span>
          <span className="header__optionlinetwo">Prime</span>
        </div>
      </Link>

      <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionlinetwo header__optionBasketCount">
          {basket?.length}
          </span>

          </div>
      </Link>

      </div>
    </nav>
  );
}

export default Header;
