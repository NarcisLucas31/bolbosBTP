import React from "react";
import "./Imagegauchebtn.css";

const Imagegauchebtn = ({ imageSrc, text, subTitre, linkHref, linkText }) => {
  return (
    <div className="imagegauchebtn">
      <div className="imagegauchebtn-gauche">
        <img src={imageSrc} alt="" className="imagegauchebtn-img" />
      </div>

      <div className="imagegauchebtn-droite">
        <h2>{subTitre}</h2>
        <p>{text}</p>
        <a href={linkHref} className="imagegauchebtn-link">
          {linkText}
          Découvrir
        </a>
      </div>
    </div>
  );
};

export default Imagegauchebtn;
