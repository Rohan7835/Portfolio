import React from "react";
import "./navbar-style.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">LOGO</div>
      <div className="nav">
        <ul className="nav-links">
          <li className="nav-link-li">
            <a href="">Projects</a>
          </li>
          <li className="nav-link-li">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
