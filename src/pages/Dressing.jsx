import React from "react";
import Navbar from "../components/navbar/Navbar";
import Titre from "../components/titre/Titre";
import Footer from "../components/footer/Footer";
import Avantnav from "../components/avantnav/Avantnav";
import Heroback from "../components/heroback/Heroback";
import Imagemid from "../components/imagemid/Imagemid";
import Apropos from "../components/apropos/Apropos";
import dressing1 from "../assets/dressing1.jpg";
import dressing2 from "../assets/dressing2.jpg";
import dressing3 from "../assets/dressing3.jpg";

const Dressing = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <Heroback
        imageSrc={dressing1}
        text="Optimisez votre espace avec un dressing sur mesure, adapté à vos besoins."
        titre=""
      />
      <Imagemid
        imageSrc={dressing2}
        text="Chez nous, chaque dressing est unique. Nous sommes à l'écoute de vos besoins spécifiques pour concevoir un aménagement sur 
        mesure qui s'adapte parfaitement à votre espace et à vos habitudes. Grâce à une approche personnalisée, nous vous offrons des solutions 
        de rangement qui répondent à vos exigences en termes de fonctionnalité et d'esthétique. Nous sélectionnons uniquement des matériaux de 
        qualité pour garantir un résultat durable et raffiné."
        titre="Personnalisation et écoute de vos besoins"
      />
      <Apropos
        imageSrc={dressing3}
        text="Nos dressings sur mesure sont conçus avec soin, en alliant des matériaux de haute qualité à un savoir-faire minutieux. 
        Chaque détail est pris en compte pour vous offrir un aménagement élégant et pratique, parfaitement adapté à vos besoins. Grâce à des 
        finitions soignées, nous vous garantissons un espace de rangement à la fois durable, fonctionnel et esthétiquement irréprochable."
        titre=" Qualité et finitions impeccables"
      />
      <Footer />
    </div>
  );
};

export default Dressing;
