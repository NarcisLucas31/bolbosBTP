import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import Titre from "../components/titre/Titre";
import Apropos from "../components/apropos/Apropos";
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
          subTitre="Tout votre aménagement, dedans comme dehors."
          titre=""
        />
        <Services />
        <Apropos />
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
