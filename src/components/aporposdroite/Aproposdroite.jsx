import React from "react";
import "./Aproposdroite.css";

const Aproposdroite = ({ imageSrc, text, titre }) => {
  return (
    <div className="aproposdroite">
      <div className="aproposdroite-gauche">
        <h2>{titre}</h2>
        <p>{text}</p>
      </div>
      <div className="aproposdroite-droite">
        <img src={imageSrc} alt="" className="aproposdroite-img" />
      </div>
    </div>
  );
};
export default Aproposdroite;
