import React from "react";
import Navbar from "../components/navbar/Navbar";
import Titre from "../components/titre/Titre";
import Footer from "../components/footer/Footer";
import Avantnav from "../components/avantnav/Avantnav";
import Heroback from "../components/heroback/Heroback";
import Apropos from "../components/apropos/Apropos";
import Aproposdroite from "../components/aporposdroite/Aproposdroite";
import mur1 from "../assets/mur1.jpg";
import mur2 from "../assets/mur2.webp";
import mur3 from "../assets/mur3.jpg";
import mur4 from "../assets/mur4.jpg";
import mur5 from "../assets/mur5.avif";
import mur6 from "../assets/mur6.avif";

const RevetementMurs = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <Heroback
        imageSrc={mur1}
        text="Donnez du caractère à vos murs avec des revêtements élégants et variés."
        titre=""
      />
      <div className="container">
        <Titre
          subTitre="Avant d'appliquer un revêtement mural comme la peinture ou le papier peint, un enduit de préparation est souvent 
        utilisé pour lisser les murs, combler les fissures et imperfections, et assurer une surface uniforme."
          titre=""
        />
        <Apropos
          imageSrc={mur2}
          text="La peinture est un choix classique et polyvalent, disponible dans une vaste gamme de couleurs pour s’adapter à tous les 
          styles et pièces. Nous travaillons avec la marque de peinture reconnue Unikalo, réputée pour son efficacité, sa durabilité et sa 
          finition impeccable. Grâce à ses produits de haute qualité, vous bénéficiez d’une peinture résistante, couvrante et esthétiquement 
          parfaite pour toutes vos surfaces."
          titre="Peinture : Flexibilité et qualité avec Unikalo"
        />
        <Aproposdroite
          imageSrc={mur3}
          text="Le papier peint est parfait pour ajouter des motifs et des textures uniques à vos murs. Disponible dans une variété de styles, 
          du classique au moderne, il permet de créer des ambiances personnalisées et élégantes. Facile à poser et à entretenir, il transforme 
          instantanément l’atmosphère de votre intérieur."
          titre="Papier peint : Personnalisez vos murs avec style"
        />
        <Apropos
          imageSrc={mur4}
          text="Les panneaux en bois apportent une touche naturelle et chaleureuse à vos murs, créant une atmosphère cosy et accueillante. 
          Idéals pour les salons, chambres ou espaces de détente, ils ajoutent du caractère et de l’élégance à votre intérieur. Le bois, avec 
          ses nuances et textures variées, s'intègre parfaitement à différents styles, du rustique au moderne. En plus de leur beauté, les 
          panneaux en bois offrent une isolation acoustique et thermique naturelle."
          titre="Panneaux en bois : Chaleur et authenticité"
        />
        <Aproposdroite
          imageSrc={mur5}
          text="Le carrelage mural est une solution idéale pour les cuisines et salles de bains grâce à sa résistance à l'humidité et sa 
          facilité d'entretien. Disponible dans une grande variété de styles, il peut également être utilisé dans d'autres pièces pour ajouter 
          un effet décoratif unique. En plus de sa fonctionnalité, il apporte une touche élégante et moderne à vos espaces. Durabilité et 
          esthétisme se combinent pour un résultat impeccable."
          titre="Carrelage mural : Esthétique et pratique"
        />
        <Apropos
          imageSrc={mur6}
          text="Les revêtements en PVC sont idéaux pour les pièces humides grâce à leur résistance à l'humidité et leur facilité d'entretien. 
          Disponibles dans une large gamme de couleurs et de motifs, ils s’adaptent à tous les styles de décoration. Ces revêtements sont 
          également durables, offrant une protection efficace tout en étant simples à nettoyer. Parfaits pour les cuisines, salles de bains ou 
          couloirs, ils combinent fonctionnalité et esthétique."
          titre="Revêtements en PVC : Praticité et esthétique"
        />
      </div>
      <Footer />
    </div>
  );
};

export default RevetementMurs;
