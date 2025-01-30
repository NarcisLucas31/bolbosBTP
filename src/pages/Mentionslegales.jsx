import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import MentionsLegales from "../components/mentionslegales/MentionsLegales";
import Avantnav from "../components/avantnav/Avantnav";

const Mentionslegales = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <Hero />
      <MentionsLegales />
      <Footer />
    </div>
  );
};

export default Mentionslegales;
