import React from "react";
import "./TitreHero.css";

const TitreHero = ({ titre, sousTitre }) => {
  return (
    <div className="titre-hero-container">
      <div className="white-box"></div>
      <div className="titre-hero-content">
        <h1>{titre}</h1>
        {sousTitre && <h2>{sousTitre}</h2>}
      </div>
    </div>
  );
};

export default TitreHero;
