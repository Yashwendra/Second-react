import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <input
        className="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label for="menu-icon"></label>
      <nav className="nav">
        <ul className="pt-5">
          <li>
            {" "}
            <NavLink to="/">Registration</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/forget">Forget</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/adduserlist">AddUser</NavLink>
          </li>
        </ul>
      </nav>

     
    </div>
  );
}

export default Header;
