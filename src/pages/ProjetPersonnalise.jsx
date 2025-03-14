import React from "react";
import Navbar from "../components/navbar/Navbar";
import Titre from "../components/titre/Titre";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Avantnav from "../components/avantnav/Avantnav";
import Heroback from "../components/heroback/Heroback";
import projet1 from "../assets/projet1.jpg";
import Pavdev from "../components/pavdev/Pavdev";
import GalleryComponent from "../components/gallerycomponent/GalleryComponent";

const ProjetPersonnalise = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <Heroback
        imageSrc={projet1}
        text="Votre projet, notre expertise : maçonnerie, toiture, et plus encore. Dites-nous vos besoins, nous le concrétisons !"
        titre=""
      />
      <Pavdev />
      <Titre subTitre="Contactez-nous" titre="" />
      <Contact />
      <div className="container">
        <GalleryComponent />
      </div>
      <Titre subTitre="" titre="" />
      <Footer />
    </div>
  );
};

export default ProjetPersonnalise;
