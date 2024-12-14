import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Apropos from "../components/apropos/Apropos";
import Aproposdroite from "../components/aporposdroite/Aproposdroite";
import Avantnav from "../components/avantnav/Avantnav";
import Heroback from "../components/heroback/Heroback";
import salledebain1 from "../assets/salledebain1.webp";
import salledebain2 from "../assets/salledebain2.webp";
import salledebain3 from "../assets/salledebain3.jpg";
import salledebain4 from "../assets/salledebain4.jpg";

const salleDeBain = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <Heroback
        imageSrc={salledebain1}
        text="Donnez vie à la salle de bain de vos rêves avec des solutions personnalisées."
        titre=""
      />
      <Aproposdroite
        imageSrc={salledebain2}
        text="Optez pour une salle de bain qui allie esthétique et praticité grâce à des solutions sur mesure. Chaque détail est 
        pensé pour refléter vos goûts tout en s’adaptant parfaitement à la configuration de votre espace. Maximisez le confort et la 
        fonctionnalité avec un agencement intelligent et des équipements modernes, le tout conçu selon vos besoins."
        titre="Design et fonctionnalité"
      />
      <Apropos
        imageSrc={salledebain3}
        text="Transformez votre salle de bain en un espace élégant et fonctionnel grâce à des matériaux de qualité supérieure et des finitions 
        soignées. Optez pour des équipements modernes, comme des douches à l’italienne, des éclairages LED et des rangements astucieux, pour un 
        design qui allie confort et innovation. De plus, notre processus d’installation rapide et organisé garantit un résultat impeccable dans 
        les délais impartis, sans compromis sur la qualité."
        titre="Matériaux haut de gamme et installation optimale"
      />
      <Aproposdroite
        imageSrc={salledebain4}
        text="Exploitez pleinement chaque mètre carré de votre salle de bain avec des meubles et agencements sur mesure. Que votre espace 
        soit petit ou grand, nous créons des solutions personnalisées pour maximiser le rangement et le confort."
        titre="Optimisation des espaces"
      />
      <Footer />
    </div>
  );
};

export default salleDeBain;
