import React from "react";
import "./Services.css";
import menuiserie from "../../assets/menuiserie.webp";
import interieur from "../../assets/interieur.avif";
import exterieur from "../../assets/exterieur.jpg";
import fleche from "../../assets/fleche-droite.png";

const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <img src={menuiserie} alt="" />
        <div className="caption">
          <img src={fleche} alt="" />
          <p>AAA</p>
        </div>
      </div>
      <div className="service">
        <img src={interieur} alt="" />
        <div className="caption">
          <img src={fleche} alt="" />
          <p>AAA</p>
        </div>
      </div>
      <div className="service">
        <img src={exterieur} alt="" />
        <div className="caption">
          <img src={fleche} alt="" />
          <p>AAA</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
