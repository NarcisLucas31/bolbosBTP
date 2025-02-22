import React, { useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import scroll from "../../assets/scroll.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(null); // Menu actif
  const [rotatedMenu, setRotatedMenu] = useState(null); // Menu pour la rotation de l'icône
  const submenuRefs = {
    menuiserie: useRef(null),
    travauxInt: useRef(null),
    travauxExt: useRef(null),
    contact: useRef(null),
  };

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleSubmenuVisibility = (menu) => {
    if (visibleMenu === menu) {
      setVisibleMenu(null); // Fermer si déjà ouvert
      setRotatedMenu(null); // Réinitialiser la rotation
    } else {
      setVisibleMenu(menu); // Ouvrir le sous-menu
      setRotatedMenu(menu); // Tourner l'icône
      submenuRefs[menu].current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="container">
      <NavLink to="/" exact activeClassName="active">
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>

      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li className="contactBold">
          <NavLink to="/" exact activeClassName="active">
            Accueil
          </NavLink>
        </li>

        <li className="submenu-container" ref={submenuRefs.menuiserie}>
          <div onClick={() => toggleSubmenuVisibility("menuiserie")}>
            <span>Menuiserie</span>
            <img
              src={scroll}
              alt="Scroll Icon"
              className={`scroll-icon ${
                rotatedMenu === "menuiserie" ? "rotated" : ""
              }`}
            />
          </div>
          <ul
            className={`submenu ${
              visibleMenu === "menuiserie" ? "visible" : ""
            }`}
          >
            <NavLink to="/menuiserie/menuiserieExt">
              <li>Pose menuiserie extérieures</li>
            </NavLink>
            <NavLink to="/menuiserie/dressing">
              <li>Dressing sur mesure</li>
            </NavLink>
            <NavLink to="/menuiserie/cuisine">
              <li>Cuisine sur mesure</li>
            </NavLink>
          </ul>
        </li>

        <li className="submenu-container" ref={submenuRefs.travauxInt}>
          <div onClick={() => toggleSubmenuVisibility("travauxInt")}>
            <span>Travaux Intérieur</span>
            <img
              src={scroll}
              alt="Scroll Icon"
              className={`scroll-icon ${
                rotatedMenu === "travauxInt" ? "rotated" : ""
              }`}
            />
          </div>
          <ul
            className={`submenu ${
              visibleMenu === "travauxInt" ? "visible" : ""
            }`}
          >
            <NavLink to="/travauxInt/revetementSol">
              <li>Revêtement sol</li>
            </NavLink>
            <NavLink to="/travauxInt/revetementMurs">
              <li>Revêtement muraux</li>
            </NavLink>
            <NavLink to="/travauxInt/salleDeBain">
              <li>Salle de bain</li>
            </NavLink>
          </ul>
        </li>

        <li className="submenu-container" ref={submenuRefs.travauxExt}>
          <div onClick={() => toggleSubmenuVisibility("travauxExt")}>
            <span>Travaux Extérieur</span>
            <img
              src={scroll}
              alt="Scroll Icon"
              className={`scroll-icon ${
                rotatedMenu === "travauxExt" ? "rotated" : ""
              }`}
            />
          </div>
          <ul
            className={`submenu ${
              visibleMenu === "travauxExt" ? "visible" : ""
            }`}
          >
            <NavLink to="/travauxExt/habillageSol">
              <li>Habillage sol</li>
            </NavLink>
            <NavLink to="/travauxExt/abrisTerrasse">
              <li>Abris / Terrasse</li>
            </NavLink>
            <NavLink to="/travauxExt/projetPersonnalise">
              <li>Vos projet personnalisé</li>
            </NavLink>
          </ul>
        </li>

        <li className="contactBold">
          <NavLink to="/contact" exact activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
      <img src={menu} alt="Menu" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
