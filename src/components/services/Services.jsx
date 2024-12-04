import React from "react";
import { NavLink } from "react-router-dom";
import "./Services.css";
import menuiserie from "../../assets/menuiserie.webp";
import interieur from "../../assets/interieur.avif";
import exterieur from "../../assets/exterieur.jpg";

const Services = () => {
  return (
    <div className="services">
      <NavLink to="/menuiserie" className="service">
        <img src={menuiserie} alt="Menuiserie" />
        <div className="caption">
          <h2>Menuiserie</h2>
        </div>
      </NavLink>
      <NavLink to="/travauxInt" className="service">
        <img src={interieur} alt="Travaux Intérieur" />
        <div className="caption">
          <h2>Travaux Intérieur</h2>
        </div>
      </NavLink>
      <NavLink to="/travauxExt" className="service">
        <img src={exterieur} alt="Travaux Extérieur" />
        <div className="caption">
          <h2>Travaux Extérieur</h2>
        </div>
      </NavLink>
    </div>
  );
};

export default Services;
