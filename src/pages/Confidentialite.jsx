import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import Avantnav from "../components/avantnav/Avantnav";
import PolitiqueConfidentialite from "../components/politiqueconfidentialite/PolitiqueConfidentialite";

const Confidentialite = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <Hero />
      <PolitiqueConfidentialite />
      <Footer />
    </div>
  );
};

export default Confidentialite;
