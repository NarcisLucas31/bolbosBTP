import React from "react";
import { Link } from "react-router-dom";
import "./Doubleimagebtn.css";

const DoubleimageBtn = ({ imageSrc, text, subTitre, linkText, linkTo }) => {
  return (
    <div className="doubleimagebtn">
      <div className="doubleimagebtn-gauche">
        <h2>{subTitre}</h2>
        <p>{text}</p>
        <Link to={linkTo} className="doubleimagebtn-link">
          {linkText} Découvrir
        </Link>
      </div>

      <div className="doubleimagebtn-droite">
        <img src={imageSrc} alt="" className="doubleimagebtn-img" />
      </div>
    </div>
  );
};

export default DoubleimageBtn;
