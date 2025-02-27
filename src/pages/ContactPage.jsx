import React from "react";
import Navbar from "../components/navbar/Navbar";
import Titre from "../components/titre/Titre";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Avantnav from "../components/avantnav/Avantnav";
import Hero from "../components/hero/Hero";

const ContactPage = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <Hero />
      <Titre subTitre="Contactez-nous" titre="" />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
