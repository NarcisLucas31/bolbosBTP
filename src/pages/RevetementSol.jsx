import React from "react";
import Navbar from "../components/navbar/Navbar";
import Titre from "../components/titre/Titre";
import Footer from "../components/footer/Footer";
import Apropos from "../components/apropos/Apropos";
import Aproposdroite from "../components/aporposdroite/Aproposdroite";
import Avantnav from "../components/avantnav/Avantnav";
import Heroback from "../components/heroback/Heroback";
import parquet1 from "../assets/parquet1.jpg";
import parquet2 from "../assets/parquet2.jpg";
import parquet3 from "../assets/parquet3.avif";
import parquet4 from "../assets/parquet4.avif";
import parquet5 from "../assets/parquet5.jpg";
import parquet6 from "../assets/parquet6.jpg";
import parquet7 from "../assets/parquet7.jpg";

const RevetementSol = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <Heroback
        imageSrc={parquet1}
        text="Revêtez votre intérieur avec des sols élégants et durables."
        titre=""
      />
      <div className="container">
        <Titre subTitre="" titre="Parquet" />
        <Apropos
          imageSrc={parquet2}
          text="Le parquet massif, composé entièrement de bois naturel, est un choix élégant et durable qui apporte chaleur et authenticité à 
          votre intérieur. Il se distingue par sa longévité. Disponible dans une large gamme d’essences et de finitions, il s’adapte à tous les 
          styles et reste un investissement de qualité pour des espaces de vie raffinés et intemporels."
          titre="Parquet massif : Élégance et durabilité"
        />
        <Apropos
          imageSrc={parquet3}
          text="Le parquet stratifié offre l'apparence du bois à un prix abordable. Facile à entretenir, résistant aux rayures et disponible 
          dans de nombreuses finitions, il s’adapte parfaitement à tous les styles et convient aux zones à fort passage."
          titre="Parquet stratifié : Esthétique et pratique"
        />
        <Apropos
          imageSrc={parquet4}
          text="Le parquet contrecollé offre l'aspect du bois naturel avec une installation rapide et stable. Toutefois, sa couche de bois mince 
          limite sa durabilité par rapport au parquet massif, et il peut être sensible à l'humidité."
          titre="Parquet contrecollé : Pratique avec quelques limites"
        />
        <Titre
          subTitre="Tous les différent type de parquets, qu'ils soient massifs, contrecollés ou stratifiés, offrent une grande 
        variété de formes esthétiques et de tailles, pour s'adapter parfaitement à vos envies et à votre espace."
          titre=""
        />
        <Titre subTitre="" titre="Carrelage" />
        <Aproposdroite
          imageSrc={parquet5}
          text="Le grès cérame est un revêtement de sol particulièrement résistant aux chocs, à l'humidité et à l'usure, ce qui le rend idéal 
          pour les zones à fort passage. Il offre une large gamme de styles, avec des effets imitant le bois, le béton ou la pierre, permettant 
          de s'adapter à tous les types d'intérieurs. Facile à entretenir, il combine esthétique, durabilité et praticité."
          titre="Grès cérame : Résistance et esthétique variée"
        />
        <Aproposdroite
          imageSrc={parquet6}
          text="La faïence est idéale pour les murs, mais peut aussi être utilisée au sol pour un effet décoratif, surtout dans les cuisines 
          et salles de bains. Disponible en différents motifs et finitions, elle allie esthétique et résistance à l’humidité."
          titre="Faïence : Parfaite pour les murs, décorative au sol"
        />
        <Aproposdroite
          imageSrc={parquet7}
          text="La terre cuite offre une ambiance rustique et chaleureuse grâce à ses teintes naturelles. Idéale pour un style 
          traditionnel, elle apporte du charme et de la convivialité, tout en étant durable et facile à entretenir. Parfaite pour les salons, 
          cuisines ou halls, elle crée une atmosphère authentique et intemporelle."
          titre="Terre cuite : Chaleur et authenticité"
        />
        <Titre
          subTitre="Tous les différent type de carrelages, à l'exception de la terre cuite, sont disponibles dans une large gamme de motifs, 
          de formes et de tailles, pour répondre à vos besoins esthétiques et fonctionnels."
          titre=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default RevetementSol;
