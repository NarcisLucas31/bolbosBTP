import React from "react";
import "./Titre.css";

const Titre = ({ subTitre, titre }) => {
  return (
    <div className="titre">
      <p>{subTitre}</p>
      <h2>{titre}</h2>
    </div>
  );
};

export default Titre;
