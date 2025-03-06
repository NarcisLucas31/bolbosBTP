import React from "react";
import Navbar from "../components/navbar/Navbar";
import TitreHero from "../components/titrehero/TitreHero";
import Footer from "../components/footer/Footer";
import Doubleimagebtn from "../components/doubleimagebtn/Doubleimagebtn";
import Imagegauchebtn from "../components/imagegauchebtn/Imagegauchebtn";
import Avantnav from "../components/avantnav/Avantnav";
import AbrisTerraseImg from "../assets/abrisTerraseImg.webp";
import Projet1 from "../assets/projet1.jpg";

const TravauxExt = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <TitreHero titre="Travaux Extérieur" sousTitre="" />
      <div className="container">
        <Doubleimagebtn
          imageSrc={AbrisTerraseImg}
          subTitre="Habillage sol"
          text="Sublimez vos extérieurs avec des revêtements adaptés à vos besoins et à votre style. Optez pour le carrelage extérieur, 
          les dalles en béton ou le pavage pour une durabilité et un entretien facile. La pierre naturelle apporte une touche d’élégance 
          intemporelle, tandis que le bois composite et les lames en bois offrent chaleur et authenticité. Pour une solution naturelle et 
          économique, le gravier ou sable stabilisé assure un drainage efficace. Enfin, le gazon synthétique garantit une verdure impeccable 
          toute l’année sans entretien. Créez des espaces extérieurs esthétiques et fonctionnels !"
          linkText=""
          linkTo="/travauxExt/habillageSol"
        />
        <Imagegauchebtn
          imageSrc={AbrisTerraseImg}
          subTitre="Abris et terrasses"
          text="Optez pour des abris et terrasses sur mesure, conçus pour allier esthétisme et durabilité. Que ce soit un abri de jardin, 
          un carport ou une pergola, nous vous guidons vers la meilleure solution adaptée à votre espace. Pour votre terrasse, choisissez 
          entre bois, composite ou carrelage, et bénéficiez d’une installation soignée et personnalisée. Profitez d’un extérieur harmonieux 
          et fonctionnel, pensé selon vos envies !"
          linkText=""
          linkTo="/travauxExt/abrisTerrasse"
        />
        <Doubleimagebtn
          imageSrc={Projet1}
          subTitre="Vos projets personnalisé"
          text="Vous avez un projet de construction, rénovation ou aménagement ? Nous vous accompagnons à chaque étape, de la conception à 
          la réalisation. Décrivez votre projet, recevez des conseils personnalisés et obtenez un devis précis. Une fois validé, nous lançons 
          les travaux en respectant vos délais et votre budget. Prêt à commencer ? Contactez-nous ou remplissez le formulaire pour démarrer dès 
          aujourd’hui !"
          linkText=""
          linkTo="/travauxExt/projetPersonnalise"
        />
      </div>
      <Footer />
    </div>
  );
};

export default TravauxExt;
