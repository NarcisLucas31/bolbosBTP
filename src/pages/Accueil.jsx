import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import Titre from "../components/titre/Titre";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Doubleimage from "../components/doubleimage/Doubleimage";
import Imagegauche from "../components/imagegauche/Imagegauche";
import Avantnav from "../components/avantnav/Avantnav";

const Accueil = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <Hero />
      <div className="container">
        <Titre
          subTitre=""
          titre="Tout votre aménagement, dedans comme dehors."
        />
        <Services />
        <Doubleimage />
        <Imagegauche />
        <Titre subTitre="Contactez nous" titre="Venez" />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Accueil;
