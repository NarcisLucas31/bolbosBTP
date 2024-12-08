import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Apropos from "../components/apropos/Apropos";
import Aproposdroite from "../components/aporposdroite/Aproposdroite";
import Avantnav from "../components/avantnav/Avantnav";
import abrisTerraseImg from "../assets/abrisTerraseImg.webp";
import Heroback from "../components/heroback/Heroback";
import carrelage1 from "../assets/carrelage1.jpg";
import carrelage2 from "../assets/carrelage2.jpg";
import carrelage3 from "../assets/carrelage3.jpg";
import carrelage4 from "../assets/carrelage4.jpg";
import sol1 from "../assets/sol1.jpg";
import sol2 from "../assets/sol2.jpg";
import sol3 from "../assets/sol3.jpg";
import sol4 from "../assets/sol4.webp";

const HabillageSol = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <Heroback
        imageSrc={abrisTerraseImg}
        text="Revêtez votre extérieur avec des sols élégants et durables."
        titre=""
      />
      <Aproposdroite
        imageSrc={carrelage1}
        text="Résistant aux intempéries, le carrelage extérieur est idéal pour vos terrasses, patios ou jardins. 
          Facile à entretenir, il est disponible dans une large gamme de styles et de finitions, y compris des imitations bois ou pierre. 
          Offrant une grande durabilité, il résiste aux chocs, aux rayures et aux changements de température, tout en apportant une touche 
          esthétique moderne à vos espaces extérieurs."
        titre="Carrelage extérieur"
      />
      <Aproposdroite
        imageSrc={carrelage2}
        text="Les dalles en béton sont une option moderne, robuste et pratique pour aménager des allées, terrasses ou zones pavées. 
          Disponibles dans une variété de formes et de tailles, elles s’adaptent à tous les styles d’aménagement extérieur. 
          Leur résistance aux intempéries et leur capacité à supporter un trafic élevé en font un choix idéal pour les espaces extérieurs à 
          fort passage, tout en restant faciles à entretenir."
        titre="Dalles en béton"
      />
      <Aproposdroite
        imageSrc={carrelage3}
        text="Le pavage extérieur, disponible en béton, pierre naturelle ou pavé imprimé, offre une solution durable et esthétique 
          pour vos allées et terrasses. Résistant aux intempéries et facile à entretenir, il s’adapte à tous les styles et permet un 
          drainage efficace, tout en ajoutant une touche soignée à vos espaces extérieurs."
        titre="Pavage extérieur"
      />
      <Aproposdroite
        imageSrc={carrelage4}
        text="La pierre naturelle, comme le granit ou l’ardoise, offre une durabilité et une élégance incomparables pour vos 
          aménagements extérieurs. Idéale pour des zones de luxe ou à fort passage, elle résiste aux intempéries, aux chocs et à l’usure. 
          Disponible dans différentes textures et coloris, elle permet de créer un sol extérieur intemporel, tout en ajoutant une touche 
          sophistiquée et durable à vos terrasses ou allées."
        titre="Pierre naturelle"
      />
      <Apropos
        imageSrc={sol1}
        text="Le gravier ou sable stabilisé est une solution naturelle et économique pour les allées ou jardins extérieurs. 
          Ce matériau est idéal pour gérer les eaux pluviales grâce à son système de drainage efficace, tout en apportant un aspect 
          authentique et agréable sous les pieds. Il est personnalisable selon les couleurs et types de gravier, permettant de créer des 
          aménagements extérieurs uniques et durables."
        titre="Gravier ou sable stabilisé"
      />
      <Apropos
        imageSrc={sol2}
        text="Le bois composite est une solution idéale pour les terrasses et abords de piscine, alliant l’apparence chaleureuse du 
          bois naturel et la durabilité d’un matériau conçu pour résister aux conditions extérieures. Ne nécessitant aucun traitement 
          particulier, il résiste aux intempéries, à l’humidité et aux rayons UV. Disponible dans différentes teintes et textures, il 
          offre un design moderne tout en étant facile à entretenir."
        titre="Bois composite"
      />
      <Apropos
        imageSrc={sol3}
        text="Les lames de terrasse en bois naturel ajoutent une touche chaleureuse et élégante à vos espaces extérieurs. 
          Parfaites pour les terrasses ou bords de piscine, elles apportent un charme rustique tout en étant résistantes aux conditions 
          extérieures. Toutefois, le bois nécessite un entretien régulier pour préserver sa beauté, comme un traitement contre l'humidité 
          et les insectes, assurant ainsi sa longévité tout en conservant son aspect naturel."
        titre="Lames de terrasse en bois"
      />
      <Apropos
        imageSrc={sol4}
        text="Le gazon synthétique est une alternative idéale au gazon naturel, apportant une verdure constante sans les contraintes 
          d'entretien. Parfait pour les petites surfaces ou les zones nécessitant peu de soins, il conserve sa couleur et son aspect tout 
          au long de l'année. De plus, résistant aux intempéries, offrant une solution pratique et esthétique pour vos espaces extérieurs."
        titre="Gazons synthétiques"
      />
      <Footer />
    </div>
  );
};

export default HabillageSol;
