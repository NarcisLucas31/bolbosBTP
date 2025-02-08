import React from "react";
import "./Heroback.css";
import { Link } from "react-router-dom";

const Heroback = ({ imageSrc, text, titre }) => {
  return (
    <div className="heroback-container">
      <div className="heroback-image">
        <img src={imageSrc} alt="Background" />
      </div>
      <div className="hero-overlay">
        <h1>{titre}</h1>
        <p>{text}</p>
        <button className="contact-button">
          <Link to="/contact">Contactez-nous</Link>
        </button>
      </div>
    </div>
  );
};

export default Heroback;
