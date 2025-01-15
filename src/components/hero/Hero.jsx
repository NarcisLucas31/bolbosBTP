// Hero.js
import React from "react";
import "./Hero.css";
import bois from "../../assets/bois.jpg";
import salonhero from "../../assets/salonhero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f60a3fe9-7012-4466-8166-a91d6beed629");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Votre demande a été envoyée avec succès !");
    } else {
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img
            src={bois}
            alt="Chambre en bois moderne"
            className="main-image"
          />
          <img
            src={salonhero}
            alt="Texture de bois"
            className="secondary-image"
          />
        </div>
        <div className="hero-overlay">
          <h1>Bolbos BTP,</h1>
          <p>votre partenaire de confiance pour des solutions sur-mesure !</p>
          <button className="contact-button">
            <Link to="/contact">Contactez Nous</Link>
          </button>
        </div>
        <div className="hero-contact">
          <h3>Contactez-nous</h3>
          <form onSubmit={onSubmit}>
            <input type="email" name="email" placeholder="Mail" required />
            <input
              type="text"
              name="secteur"
              placeholder="Secteur d'activité"
              required
            />
            <input
              type="tel"
              name="telephone"
              placeholder="Numéro de téléphone"
              required
            />
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
