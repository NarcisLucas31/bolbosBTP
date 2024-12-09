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
import accueil1 from "../assets/accueil1.jpg";
import accueil2 from "../assets/accueil2.webp";
import accueil3 from "../assets/accueil3.jpg";

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
        <Titre subTitre="" titre="Présentation de l’entreprise" />
        <Doubleimage
          imageSrc={accueil1}
          text="Depuis sa création, Bolbos BTP s'engage à offrir des solutions de construction et de rénovation de qualité, 
          adaptées aux besoins uniques de chaque client. Forte d'une expertise éprouvée et d'une équipe de professionnels qualifiés, 
          notre entreprise met un point d'honneur à allier savoir-faire traditionnel et techniques modernes pour garantir des résultats 
          durables. Chez Bolbos BTP, l'écoute du client est au cœur de notre démarche."
          titre=""
          subTitre="Nos valeurs"
        />
        <Imagegauche
          imageSrc={accueil2}
          text="Nous mettons à votre disposition une large expertise dans plusieurs domaines du bâtiment, pour répondre à tous vos besoins, 
          aussi bien à l’intérieur qu’à l’extérieur de votre domicile. En menuiserie, nous réalisons des créations sur mesure telles que des 
          cuisines, des salles de bain et des dressings, en alliant design et fonctionnalité. Pour les travaux intérieurs, nous proposons des 
          services de rénovation, pose de revêtements de sols (carrelage, parquet), ainsi que des travaux de peinture et d’aménagement d’espaces. 
          À l’extérieur, notre savoir-faire couvre des projets de pavage, aménagement de terrasses, pose de clôtures et d’autres solutions pour 
          embellir vos espaces extérieurs."
          titre=""
          subTitre="Nos domaines de compétences"
        />
        <Doubleimage
          imageSrc={accueil3}
          text="Nous priorisons la qualité et le respect des normes pour garantir des résultats durables et esthétiques. 
          À l’écoute de chaque client, nous offrons des solutions sur mesure tout en respectant rigoureusement les délais. 
          Votre satisfaction est notre plus grande priorité."
          titre=""
          subTitre="Engagement qualité et satisfaction client"
        />
        <Titre subTitre="Contactez nous" titre="Venez" />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Accueil;
