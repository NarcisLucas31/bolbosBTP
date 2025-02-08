import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Titre from "../components/titre/Titre";
import Footer from "../components/footer/Footer";
import Doubleimagebtn from "../components/doubleimagebtn/Doubleimagebtn";
import Imagegauchebtn from "../components/imagegauchebtn/Imagegauchebtn";
import Avantnav from "../components/avantnav/Avantnav";
import accueil1 from "../assets/accueil1.jpg";

const Services = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <Hero />
      <div className="container">
        <Titre
          subTitre="Tout votre aménagement, dedans comme dehors."
          titre=""
        />
        <Doubleimagebtn
          imageSrc={accueil1}
          subTitre="Habillage sol"
          text="Ceci est une description."
          linkText=""
          linkHref="/travauxExt/habillageSol"
        />
        <Imagegauchebtn
          imageSrc={accueil1}
          subTitre="Abris et terrasses"
          text="Ceci est une description."
          linkText=""
          linkHref="/travauxExt/abrisTerrasse"
        />
        <Doubleimagebtn
          imageSrc={accueil1}
          subTitre="Vos projets personnalisé"
          text="Ceci est une description."
          linkText=""
          linkHref="/travauxExt/projetPersonnalise"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
