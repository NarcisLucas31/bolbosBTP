import React from "react";
import "./Doubleimage.css";

const Doubleimage = ({ imageSrc, text, titre, subTitre }) => {
  return (
    <div className="doubleimage">
      <div className="double-gauche">
        <h3>{titre}</h3>
        <h2>{subTitre}</h2>
        <p>{text}</p>
      </div>

      <div className="double-droite">
        <img src={imageSrc} alt="" className="doubleimage-img" />
      </div>
    </div>
  );
};

export default Doubleimage;
