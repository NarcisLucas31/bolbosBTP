import React from "react";
import Navbar from "../components/navbar/Navbar";
import TitreHero from "../components/titrehero/TitreHero";
import Footer from "../components/footer/Footer";
import Doubleimagebtn from "../components/doubleimagebtn/Doubleimagebtn";
import Imagegauchebtn from "../components/imagegauchebtn/Imagegauchebtn";
import Avantnav from "../components/avantnav/Avantnav";
import Parquet1 from "../assets/parquet1.jpg";
import Mur1 from "../assets/mur1.jpg";
import Salledebain1 from "../assets/salledebain1.webp";

const TravauxInt = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <TitreHero titre="Travaux Intérieur" sousTitre="" />
      <div className="container">
        <Doubleimagebtn
          imageSrc={Parquet1}
          subTitre="Revêtement sol"
          text="Parquet massif, stratifié ou contrecollé, grès cérame, faïence ou terre cuite : chaque revêtement apporte son style et 
          ses avantages. Alliez élégance et durabilité avec le parquet massif, praticité avec le stratifié ou stabilité avec le contrecollé. 
          Optez pour la résistance du grès cérame, l’esthétique de la faïence ou le charme authentique de la terre cuite. Trouvez le sol parfait 
          pour sublimer votre intérieur !"
          linkText=""
          linkTo="/travauxInt/revetementSol"
        />
        <Imagegauchebtn
          imageSrc={Mur1}
          subTitre="Revêtement muraux"
          text="Avant d'appliquer peinture ou papier peint, un enduit de préparation assure une surface lisse et uniforme. Optez pour la 
          peinture Unikalo, reconnue pour sa qualité et sa durabilité, ou personnalisez vos murs avec du papier peint aux motifs variés. 
          Les panneaux en bois ajoutent chaleur et élégance, tandis que le carrelage mural allie esthétique et résistance, idéal pour les 
          pièces humides. Pour une solution pratique et facile à entretenir, les revêtements en PVC offrent une protection durable et un 
          large choix de styles. Sublimez vos murs avec des finitions adaptées à vos envies !"
          linkText=""
          linkTo="/travauxInt/revetementMurs"
        />
        <Doubleimagebtn
          imageSrc={Salledebain1}
          subTitre="Salle de bain"
          text="Créez une salle de bain à la fois élégante et fonctionnelle avec des solutions sur mesure. Profitez de matériaux haut de 
          gamme, d’équipements modernes et d’un agencement optimisé pour allier confort et design. Nos installations soignées et rapides 
          garantissent un résultat impeccable, adapté à votre espace et à vos besoins."
          linkText=""
          linkTo="/travauxInt/salleDeBain"
        />
      </div>
      <Footer />
    </div>
  );
};

export default TravauxInt;
