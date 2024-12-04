import React from "react";
import "./Apropos.css";

const Apropos = ({ imageSrc, text, titre }) => {
  return (
    <div className="apropos">
      <div className="apropos-gauche">
        <img src={imageSrc} alt="" className="apropos-img" />
      </div>

      <div className="apropos-droite">
        <h2>{titre}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Apropos;
