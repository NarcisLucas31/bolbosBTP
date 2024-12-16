import React from "react";
import "./Herosimple.css";
import { Link } from "react-router-dom";

const Herosimple = ({ imageSrc, text, titre }) => {
  return (
    <div className="herosimple">
      <div className="herosimple-container">
        <div className="herosimple-image">
          <img src={imageSrc} alt="" />
        </div>
        <div className="hero-overlay">
          <h1>{titre}</h1>
          <p>{text}</p>
          <div className="contact-button">
            <Link to="/contact">Contactez Nous</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosimple;
