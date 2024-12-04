import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [submenuVisible, setSubmenuVisible] = useState({
    menuiserie: false,
    travauxInt: false,
    travauxExt: false,
  });

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleSubmenuVisibility = (menu, isVisible) => {
    setSubmenuVisible((prevState) => ({
      ...prevState,
      [menu]: isVisible,
    }));
  };

  return (
    <nav className="container">
      <NavLink to="/" exact activeClassName="active">
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>

      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Accueil
          </NavLink>
        </li>
        <li
          className="submenu-container"
          onMouseEnter={() => handleSubmenuVisibility("menuiserie", true)}
          onMouseLeave={() => handleSubmenuVisibility("menuiserie", false)}
        >
          <NavLink to="/menuiserie" activeClassName="active">
            Menuiserie
          </NavLink>
          <ul
            className={`submenu ${submenuVisible.menuiserie ? "visible" : ""}`}
          >
            <li>
              <NavLink to="/menuiserie/menuiserieExt">
                Pose menuiserie extérieures
              </NavLink>
            </li>
            <li>
              <NavLink to="/menuiserie/dressing">Dressing sur mesure</NavLink>
            </li>
            <li>
              <NavLink to="/menuiserie/cuisine">Cuisine sur mesure</NavLink>
            </li>
          </ul>
        </li>
        <li
          className="submenu-container"
          onMouseEnter={() => handleSubmenuVisibility("travauxInt", true)}
          onMouseLeave={() => handleSubmenuVisibility("travauxInt", false)}
        >
          <NavLink to="/travauxInt" activeClassName="active">
            Travaux Intérieur
          </NavLink>
          <ul
            className={`submenu ${submenuVisible.travauxInt ? "visible" : ""}`}
          >
            <li>
              <NavLink to="/travauxInt/revêtementSol">Revêtement sol</NavLink>
            </li>
            <li>
              <NavLink to="/travauxInt/revêtementMurs">
                Revêtement muraux
              </NavLink>
            </li>
            <li>
              <NavLink to="/travauxInt/salleDeBain">Salle de bain</NavLink>
            </li>
          </ul>
        </li>
        <li
          className="submenu-container"
          onMouseEnter={() => handleSubmenuVisibility("travauxExt", true)}
          onMouseLeave={() => handleSubmenuVisibility("travauxExt", false)}
        >
          <NavLink to="/travauxExt" activeClassName="active">
            Travaux Extérieur
          </NavLink>
          <ul
            className={`submenu ${submenuVisible.travauxExt ? "visible" : ""}`}
          >
            <li>
              <NavLink to="/travauxExt/habillageSol">Habillage sol</NavLink>
            </li>
            <li>
              <NavLink to="/travauxExt/abrisTerrasse">Abris / Terrasse</NavLink>
            </li>
            <li>
              <NavLink to="/travauxExt/facade">??</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <button className="btn">Contact</button>
        </li>
      </ul>
      <img src={menu} alt="Menu" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
