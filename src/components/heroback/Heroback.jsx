import React from "react";
import "./Heroback.css";

const Heroback = ({ imageSrc, text, titre }) => {
  return (
    <div className="heroback-container">
      <div className="heroback-image">
        <img src={imageSrc} alt="Background" />
      </div>
      <div className="hero-overlay">
        <h1>{titre}</h1>
        <p>{text}</p>
        <button className="contact-button">Contactez Nous</button>
      </div>
    </div>
  );
};

export default Heroback;
