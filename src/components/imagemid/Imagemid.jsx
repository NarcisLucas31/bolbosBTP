import React from "react";
import "./Imagemid.css";

const Imagemid = ({ imageSrc, titre, text }) => {
  return (
    <div className="imagemid-container">
      <div className="imagemid-content">
        <h1>{titre}</h1>
        <p>{text}</p>
      </div>
      <div className="imagemid-image">
        <img src={imageSrc} alt="Description" />
      </div>
    </div>
  );
};

export default Imagemid;
