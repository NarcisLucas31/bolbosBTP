import React from "react";
import mousse from "../../assets/mousse.png";
import "./Imagegauche.css";

const Imagegauche = () => {
  return (
    <div className="imagegauche">
      <div className="image-gauche">
        <img src={mousse} alt="" className="apropos-img" />
      </div>

      <div className="texte-droite">
        <h3>Nos domaines de compétences</h3>
        <h2>Nos Valeurs</h2>
        <p>
          Nous mettons à votre disposition une large expertise dans plusieurs
          domaines du bâtiment, pour répondre à tous vos besoins, aussi bien à
          l’intérieur qu’à l’extérieur de votre domicile. En menuiserie, nous
          réalisons des créations sur mesure telles que des cuisines, des salles
          de bain et des dressings, en alliant design et fonctionnalité. Pour
          les travaux intérieurs, nous proposons des services de rénovation,
          pose de revêtements de sols (carrelage, parquet), ainsi que des
          travaux de peinture et d’aménagement d’espaces. À l’extérieur, notre
          savoir-faire couvre des projets de pavage, aménagement de terrasses,
          pose de clôtures et d’autres solutions pour embellir vos espaces
          extérieurs.
        </p>
      </div>
    </div>
  );
};

export default Imagegauche;
