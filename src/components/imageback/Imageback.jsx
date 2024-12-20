import React from "react";
import "./Imageback.css";

const Imageback = ({ titre, text, mainImage, backgroundImage }) => {
  return (
    <div className="accompagnement-content">
      <div className="imagemid-container">
        <h2 className="accompagnement-title">{titre}</h2>
        <p className="accompagnement-text">{text}</p>
        <div />
        <div className="imageback-img">
          <img
            src={mainImage}
            alt="Contenu principal"
            className="accompagnement-image"
          />
          <img
            src={backgroundImage}
            alt="Arrière-plan décoratif"
            className="background-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Imageback;
