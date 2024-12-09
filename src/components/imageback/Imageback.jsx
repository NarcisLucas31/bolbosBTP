import React from "react";
import "./Imageback.css";

const Imageback = ({ titre, text, mainImage, backgroundImage }) => {
  return (
    <section className="accompagnement">
      <div className="accompagnement-background">
        <img
          src={backgroundImage}
          alt="Arrière-plan décoratif"
          className="background-image"
        />
      </div>
      <div className="accompagnement-content">
        <h2 className="accompagnement-title">{titre}</h2>
        <p className="accompagnement-text">{text}</p>
        <img
          src={mainImage}
          alt="Contenu principal"
          className="accompagnement-image"
        />
      </div>
    </section>
  );
};

export default Imageback;
