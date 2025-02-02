import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Avantnav from "../components/avantnav/Avantnav";
import Heroback from "../components/heroback/Heroback";
import cuisine1 from "../assets/cuisine1.webp";
import cuisine2 from "../assets/cuisine2.jpeg";
import cuisine3 from "../assets/cuisine3.jpg";
import bois from "../assets/bois.jpeg";
import feuille from "../assets/feuille.jpeg";
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
          mainImage={bois}
          backgroundImage={cuisine2}
        />
        <Imageback
          titre="Efficacité, qualité et finitions d’exception"
          text="Parce que votre temps est précieux, nous allions rapidité d’exécution et souci du détail pour vous offrir une cuisine sur mesure 
          qui répond à toutes vos attentes. Grâce à notre organisation rigoureuse et à notre expertise, nous respectons les délais convenus tout 
          en maintenant une qualité irréprochable. Chaque réalisation est le fruit d’un travail minutieux, avec des matériaux de haute qualité 
          pour garantir durabilité et élégance. Votre cuisine, pensée pour durer, sera installée avec soin, combinant praticité et finitions 
          impeccables pour une satisfaction totale."
          mainImage={feuille}
          backgroundImage={cuisine3}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Cuisine;
