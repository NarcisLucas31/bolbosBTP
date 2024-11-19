import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className="container">
      <NavLink to="/" exact activeClassName="active">
        <img src={logo} alt="" className="logo" />
      </NavLink>

      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/menuiserie" activeClassName="active">
            Menuiserie
          </NavLink>
        </li>
        <li>
          <NavLink to="/travauxInt" activeClassName="active">
            Travaux Intérieur
          </NavLink>
        </li>
        <li>
          <NavLink to="/travauxExt" activeClassName="active">
            Travaux Extérieur
          </NavLink>
        </li>
        <li>
          <button className="btn">Contact</button>
        </li>
      </ul>
      <img src={menu} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
