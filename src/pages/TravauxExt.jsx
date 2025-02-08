import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Titre from "../components/titre/Titre";
import Footer from "../components/footer/Footer";
import Doubleimagebtn from "../components/doubleimagebtn/Doubleimagebtn";
import Imagegauchebtn from "../components/imagegauchebtn/Imagegauchebtn";
import Avantnav from "../components/avantnav/Avantnav";
import accueil1 from "../assets/accueil1.jpg";

const TravauxExt = () => {
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
          subTitre="Revêtement sol"
          text="Ceci est une description."
          linkText=""
          linkHref="/travauxInt/revetementSol"
        />
        <Imagegauchebtn
          imageSrc={accueil1}
          subTitre="Revêtement muraux"
          text="Ceci est une description."
          linkText=""
          linkHref="/travauxInt/revetementMurs"
        />
        <Doubleimagebtn
          imageSrc={accueil1}
          subTitre="Salle de bain"
          text="Ceci est une description."
          linkText=""
          linkHref="/travauxInt/salleDeBain"
        />
      </div>
      <Footer />
    </div>
  );
};

export default TravauxExt;
