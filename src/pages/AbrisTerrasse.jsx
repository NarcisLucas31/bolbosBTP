import React from "react";
import Navbar from "../components/navbar/Navbar";
import Heroback from "../components/heroback/Heroback";
import Footer from "../components/footer/Footer";
import Avantnav from "../components/avantnav/Avantnav";
import abrisTerraseImg from "../assets/abrisTerraseImg.webp";
import Apropos from "../components/apropos/Apropos";
import aproposAbris from "../assets/aproposAbris.jpg";
import aproposTerrasse from "../assets/aproposTerrasse.jpg";

const AbrisTerrasse = () => {
  return (
    <div>
      <Avantnav />
      <Navbar />
      <Heroback
        imageSrc={AbrisTerraseImg}
        text="Optez pour l'installation de menuiseries extérieures, alliant style et performance"
        titre=""
      />
      <Apropos
        imageSrc={aproposAbris}
        text="Nous vous proposons des abris sur mesure, conçus pour parfaitement s’adapter à votre espace et à vos besoins.
         Avec des matériaux de qualité supérieure, chaque installation garantit à la fois résistance et esthétisme. 
         Nous sommes à votre écoute pour vous conseiller sur le type d’abri le mieux adapté à votre projet, que ce soit un abri de jardin, 
         un carport ou une pergola. Nos experts vous aident à faire le meilleur choix en fonction de vos contraintes et de vos envies,    
          tout en assurant un résultat durable et fonctionnel."
        titre="Abris"
      />
      <Apropos
        imageSrc={aproposTerrasse}
        text="  Nous créons des terrasses sur mesure, 
        parfaitement adaptées à votre espace et à vos besoins. En utilisant des matériaux de qualité, nous garantissons des installations durables 
        et esthétiques. À l’écoute de vos envies, nous vous conseillons sur le type de terrasse qui correspond le mieux à votre projet, 
        qu'il s'agisse d’une terrasse en bois, en composite ou en carrelage. Nos experts vous aident à choisir la solution la plus adaptée, 
        tout en tenant compte de vos contraintes et de vos attentes, pour un espace extérieur à la fois pratique et élégant."
        titre="Terrasses"
      />
      <Footer />
    </div>
  );
};

export default AbrisTerrasse;
