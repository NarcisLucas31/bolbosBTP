import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Titre from "../components/titre/Titre";
import Footer from "../components/footer/Footer";
import Doubleimagebtn from "../components/doubleimagebtn/Doubleimagebtn";
import Imagegauchebtn from "../components/imagegauchebtn/Imagegauchebtn";
import Avantnav from "../components/avantnav/Avantnav";
import accueil1 from "../assets/accueil1.jpg";

const Apropo = () => {
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
          subTitre="Pose menuiserie extérieures"
          text="Ceci est une description."
          linkText=""
          linkHref="/menuiserie/menuiserieExt"
        />
        <Imagegauchebtn
          imageSrc={accueil1}
          subTitre="Dressing sur mesure"
          text="Ceci est une description."
          linkText=""
          linkHref="/menuiserie/dressing"
        />
        <Doubleimagebtn
          imageSrc={accueil1}
          subTitre="Cuisine sur mesure"
          text="Ceci est une description."
          linkText=""
          linkHref="/menuiserie/cuisine"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Apropo;
