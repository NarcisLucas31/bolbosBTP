import React from "react";
import "./Hero.css";
import bois from "../../assets/bois.jpg";
import salonhero from "../../assets/salonhero.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img
            src={salonhero}
            alt="Chambre en bois moderne"
            className="main-image"
          />
          <img src={bois} alt="Texture de bois" className="secondary-image" />
        </div>
        <div className="hero-overlay">
          <h1>Bolbos BTP,</h1>
          <p>votre partenaire de confiance pour des solutions sur-mesure !</p>
          <button className="contact-button">
            <Link to="/contact">Contactez Nous</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
