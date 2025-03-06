import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Avantnav from "../components/avantnav/Avantnav";
import Heroback from "../components/heroback/Heroback";
import Aproposdroite from "../components/aporposdroite/Aproposdroite";
import Apropos from "../components/apropos/Apropos";
import menuisExt1 from "../assets/menuisExt1.jpg";
import menuisExt2 from "../assets/menuisExt2.jpg";
import menuisExt3 from "../assets/menuisExt3.webp";
import menuisExt4 from "../assets/menuisExt4.png";
import menuisExt5 from "../assets/menuisExt5.webp";

const MenuiserieExt = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <Heroback
        imageSrc={menuisExt1}
        text="Optez pour l'installation de menuiseries extérieures, alliant style et performance"
        titre=""
      />
      <div className="container">
        <Apropos
          imageSrc={menuisExt2}
          text="Nous vous proposons une large gamme de fenêtres et de portes sur mesure, conçues pour s’adapter parfaitement à vos besoins 
          et à votre style de vie. Que ce soit en termes de forme, de style, de taille ou de couleur, nous avons une solution pour chaque projet. 
          Grâce à nos partenariats avec des fournisseurs de confiance, nous vous offrons une personnalisation complète, avec la possibilité de choisir 
          des fenêtres et portes avec double couleur : une couleur extérieure pour s'harmoniser avec l'architecture de votre maison, et une autre 
          couleur intérieure pour parfaitement s’intégrer à la décoration de votre intérieur. Cette option permet de créer une harmonie parfaite 
          entre votre extérieur et votre intérieur, tout en optimisant l’esthétique de chaque espace."
          titre="Personnalisation totale pour vos fenêtres et portes"
        />
        <Aproposdroite
          imageSrc={menuisExt3}
          text="Les baies vitrées apportent une touche moderne et lumineuse à votre intérieur, tout en offrant une vue dégagée sur votre jardin 
          ou votre terrasse. Conçues sur mesure, elles s’adaptent parfaitement à vos besoins, qu'il s'agisse de grandes baies coulissantes ou à 
          galandage. Grâce à des vitrages performants, elles assurent une excellente isolation thermique et acoustique, optimisant ainsi votre 
          confort tout en réduisant les pertes d'énergie. Elles permettent également une transition fluide entre l'intérieur et l'extérieur, 
          créant un espace lumineux et accueillant, idéal pour profiter pleinement de chaque saison."
          titre="Baies vitrées : L'Ouverture sur votre extérieur"
        />
        <Apropos
          imageSrc={menuisExt4}
          text="Nous proposons des fenêtres et portes avec des vitrages simples, doubles ou triples pour garantir une isolation thermique 
          et acoustique optimale. Le double et triple vitrage permet de maintenir une température agréable toute l'année, réduisant vos dépenses 
          énergétiques. De plus, nos vitrages améliorent l'insonorisation, offrant un environnement intérieur plus calme en limitant les nuisances 
          sonores extérieures. Profitez ainsi d’un confort accru et d’une meilleure efficacité énergétique, tout en contribuant à la réduction de 
          votre empreinte carbone."
          titre="Performance et isolation exceptionnelles"
        />
        <Aproposdroite
          imageSrc={menuisExt5}
          text="Nos équipes d'experts s'assurent d'une pose impeccable de vos fenêtres, portes et autres menuiseries, en veillant à des finitions 
          soignées pour un résultat à la fois esthétique et durable. Chaque détail est pris en compte afin de garantir une installation 
          irréprochable qui répond à vos exigences les plus strictes. De plus, grâce à une organisation efficace et des délais de livraison 
          rapides, nous vous assurons que votre projet sera réalisé dans les meilleurs délais, sans jamais compromettre la qualité ou l'attention 
          portée à chaque étape de l'installation."
          titre="Finitions soignées, installation de qualité et rapidité d'exécution"
        />
      </div>
      <Footer />
    </div>
  );
};

export default MenuiserieExt;
