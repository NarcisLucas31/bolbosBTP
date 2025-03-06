// Hero.js
import React from "react";
import "./Hero.css";
import bois from "../../assets/bois.jpeg";
import salonhero from "../../assets/salonhero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img
            src={bois}
            alt="Chambre en bois moderne"
            className="main-image"
          />
          <img
            src={salonhero}
            alt="Texture de bois"
            className="secondary-image"
          />
        </div>
        <div className="hero-overlay">
          <h1>Bolbos BTP,</h1>
          <p>votre partenaire de confiance pour des solutions sur-mesure !</p>
          <button className="hero-contact-button">
            <Link to="/contact">Contactez-nous</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
