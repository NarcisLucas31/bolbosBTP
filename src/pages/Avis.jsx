import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Titre from "../components/titre/Titre";
import Footer from "../components/footer/Footer";
import Avantnav from "../components/avantnav/Avantnav";
import AvisClients from "../components/avisclients/AvisClients";

const Avis = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <Hero />
      <div className="container">
        <Titre
          subTitre="Découvrez les avis des clients de Bolbos BTP"
          titre=""
        />
        <AvisClients />
      </div>
      <Footer />
    </div>
  );
};

export default Avis;
