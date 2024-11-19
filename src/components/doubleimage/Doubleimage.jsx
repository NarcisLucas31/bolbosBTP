import React from "react";
import mousse from "../../assets/mousse.png";
/* import fond from "../../assets/fond.jpg"; */
import "./Doubleimage.css";

const Doubleimage = () => {
  return (
    <div className="doubleimage">
      <div className="double-gauche">
        <h3>Présentation de l’entreprise</h3>
        <h2>Nos Valeurs</h2>
        <p>
          Depuis sa création, Bolbos BTP s'engage à offrir des solutions de
          construction et de rénovation de qualité, adaptées aux besoins uniques
          de chaque client. Forte d'une expertise éprouvée et d'une équipe de
          professionnels qualifiés, notre entreprise met un point d'honneur à
          allier savoir-faire traditionnel et techniques modernes pour garantir
          des résultats durables. Chez Bolbos BTP, l'écoute du client est au
          cœur de notre démarche.
        </p>
      </div>

      <div className="double-droite">
        <img src={mousse} alt="" className="apropos-img" />
        {/*   <img src={fond} alt="" className="play-img" /> */}
      </div>
    </div>
  );
};

export default Doubleimage;
