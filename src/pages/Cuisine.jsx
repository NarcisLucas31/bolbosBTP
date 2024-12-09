import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Avantnav from "../components/avantnav/Avantnav";
import Heroback from "../components/heroback/Heroback";
import cuisine1 from "../assets/cuisine1.webp";
import cuisine2 from "../assets/cuisine2.jpg";
import cuisine3 from "../assets/cuisine3.jpg";
import bois from "../assets/bois.jpg";
import feuille from "../assets/feuille.jpg";
import Imageback from "../components/imageback/Imageback";

const Cuisine = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <Heroback
        imageSrc={cuisine1}
        text="Une cuisine sur mesure, pensée pour vous."
        titre=""
      />
      <div className="container">
        <Imageback
          titre="Accompagnement et conseils personnalisés"
          text="Nous sommes à l’écoute de vos besoins pour concevoir une cuisine sur mesure qui répond parfaitement à vos envies et à vos 
          contraintes. Nos experts vous accompagnent dans le choix des matériaux, des couleurs et des agencements, en vous offrant des conseils 
          avisés pour un résultat harmonieux et fonctionnel, adapté à votre style de vie."
          mainImage={cuisine2}
          backgroundImage={bois}
        />
        <Imageback
          titre="Accompagnement et conseils personnalisés"
          text="Nous sommes à l’écoute de vos besoins pour concevoir une cuisine sur mesure qui répond parfaitement à vos envies et à vos 
          contraintes. Nos experts vous accompagnent dans le choix des matériaux, des couleurs et des agencements, en vous offrant des conseils 
          avisés pour un résultat harmonieux et fonctionnel, adapté à votre style de vie."
          mainImage={cuisine3}
          backgroundImage={feuille}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Cuisine;
