import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import Avantnav from "../components/avantnav/Avantnav";
import CGUcomp from "../components/cgucomp/CGUcomp";

const CGU = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <Hero />
      <CGUcomp />
      <Footer />
    </div>
  );
};

export default CGU;
