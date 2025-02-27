import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Titre from "../components/titre/Titre";
import Footer from "../components/footer/Footer";
import Doubleimagebtn from "../components/doubleimagebtn/Doubleimagebtn";
import Imagegauchebtn from "../components/imagegauchebtn/Imagegauchebtn";
import Avantnav from "../components/avantnav/Avantnav";
import MenuiserieExt1 from "../assets/menuisExt1.jpg";
import Dressing1 from "../assets/dressing1.jpg";
import Cuisine1 from "../assets/cuisine1.webp";

const Apropo = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <Hero />
      <div className="container">
        <Titre
          subTitre="Tout votre aménagement, dedans comme dehors."
          titre=""
        />
        <Doubleimagebtn
          imageSrc={MenuiserieExt1}
          subTitre="Pose menuiserie extérieures"
          text="Offrez à votre habitat des fenêtres, portes et baies vitrées sur mesure, alliant esthétique, isolation et confort. 
          Personnalisez styles, tailles et couleurs, y compris en double teinte. Nos vitrages performants optimisent votre bien-être et 
          vos économies d’énergie. Installation rapide et finitions impeccables garanties. Transformez votre espace dès aujourd’hui !"
          linkText=""
          linkTo="/menuiserie/menuiserieExt"
        />
        <Imagegauchebtn
          imageSrc={Dressing1}
          subTitre="Dressing sur mesure"
          text="Chaque dressing est conçu sur mesure pour s’adapter parfaitement à votre espace et vos besoins. Nous allions écoute, 
          matériaux de qualité et finitions soignées pour vous offrir un rangement fonctionnel, durable et élégant. Optez pour une solution 
          unique qui allie praticité et esthétique."
          linkText=""
          linkTo="/menuiserie/dressing"
        />
        <Doubleimagebtn
          imageSrc={Cuisine1}
          subTitre="Cuisine sur mesure"
          text="Nous concevons votre cuisine sur mesure en tenant compte de vos envies et contraintes. Nos experts vous guident dans le 
          choix des matériaux et agencements pour un résultat harmonieux et fonctionnel. Alliant rapidité, qualité et finitions soignées, 
          nous garantissons une installation durable et élégante, parfaitement adaptée à votre style de vie."
          linkText=""
          linkTo="/menuiserie/cuisine"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Apropo;
