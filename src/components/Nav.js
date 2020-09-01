import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/amazon.jpg";
import "../css/Nav.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Nav() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="menuicon">
          <MenuIcon />
        </div>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="nav-middle">
        <div
          className="searchicon"
          style={{ background: "rgb(218, 218, 218)" }}
        >
          <Link to="/more" style={{ color: "black", textDecoration: "none" }}>
            <p>All</p>
          </Link>
        </div>
        <input type="text" />
        <div className="searchicon" style={{ background: "#febd69" }}>
          <SearchIcon />
        </div>
      </div>

      <div className="nav-right">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="signin">
            <p>Hello,Sign in</p>
            <h5>Account & Lists </h5>
          </div>{" "}
        </Link>

        <div className="returns">
          <p>Returns</p>
          <h6>& Orders</h6>
        </div>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <div className="basket">
            <ShoppingCartIcon />
            <h5>3</h5>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
