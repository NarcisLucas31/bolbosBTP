import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Avantnav from "../components/avantnav/Avantnav";
import AvisClients from "../components/avisclients/AvisClients";
import TitreHero from "../components/titrehero/TitreHero";

const Avis = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <TitreHero
        titre="Découvrez les avis des clients de Bolbos BTP"
        sousTitre=""
      />
      <div className="container">
        <AvisClients />
      </div>
      <Footer />
    </div>
  );
};

export default Avis;
