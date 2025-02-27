import React from "react";
import { Link } from "react-router-dom";
import "./Imagegauchebtn.css";

const Imagegauchebtn = ({ imageSrc, text, subTitre, linkTo, linkText }) => {
  return (
    <div className="imagegauchebtn">
      <div className="imagegauchebtn-gauche">
        <img src={imageSrc} alt="" className="imagegauchebtn-img" />
      </div>

      <div className="imagegauchebtn-droite">
        <h2>{subTitre}</h2>
        <p>{text}</p>
        <Link to={linkTo} className="imagegauchebtn-link">
          {linkText} Découvrir
        </Link>
      </div>
    </div>
  );
};

export default Imagegauchebtn;
