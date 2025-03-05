import React from "react";
import Navbar from "../components/navbar/Navbar";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Avantnav from "../components/avantnav/Avantnav";
import ContactInfo from "../components/contactinfo/ContactInfo";

const ContactPage = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <ContactInfo />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
