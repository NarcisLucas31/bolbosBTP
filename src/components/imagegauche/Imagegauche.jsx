import React from "react";
import "./Imagegauche.css";

const Imagegauche = ({ imageSrc, text, titre, subTitre }) => {
  return (
    <div className="imagegauche">
      <div className="image-gauche">
        <img src={imageSrc} alt="" className="imagegauche-img" />
      </div>

      <div className="texte-droite">
        <h3>{titre}</h3>
        <h2>{subTitre}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Imagegauche;
