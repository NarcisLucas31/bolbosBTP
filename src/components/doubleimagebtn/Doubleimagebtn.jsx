import React from "react";
import "./DoubleimageBtn.css";

const DoubleimageBtn = ({ imageSrc, text, subTitre, linkText, linkHref }) => {
  return (
    <div className="doubleimagebtn">
      <div className="doubleimagebtn-gauche">
        <h2>{subTitre}</h2>
        <p>{text}</p>
        <a href={linkHref} className="doubleimagebtn-link">
          {linkText}
        </a>
      </div>

      <div className="doubleimagebtn-droite">
        <img src={imageSrc} alt="" className="doubleimagebtn-img" />
      </div>
    </div>
  );
};

export default DoubleimageBtn;
