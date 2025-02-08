import React from "react";
import "./Contact.css";
import user_icon from "../../assets/user_icon.png";
import company_icon from "../../assets/company_icon.png";
import address_icon from "../../assets/address_icon.png";
import city_icon from "../../assets/city_icon.png";
import postal_icon from "../../assets/postal_icon.png";
import phone_icon from "../../assets/phone_icon.png";
import email_icon from "../../assets/email_icon.png";
import message_icon from "../../assets/message_icon.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi en cours...");

    const formData = new FormData(event.target);

    const response = await fetch("https://formspree.io/f/mdkadwea", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      setResult("Formulaire envoyé avec succès !");
      event.target.reset();
    } else {
      setResult("Une erreur est survenue. Veuillez réessayer.");
      console.log("Erreur", data);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Envoyez nous un message</h3>
        <p>
          Vous avez un projet de construction, de rénovation ou d’aménagement ?
          Besoin d’un devis ou de conseils personnalisés ? Notre équipe est à
          votre disposition pour répondre à toutes vos questions. Remplissez le
          formulaire ci-contre et nous vous contacterons dans les plus brefs
          délais.
        </p>
      </div>
      <div className="contact-form">
        <form onSubmit={onSubmit}>
          <div className="input-group">
            <img src={user_icon} alt="user" />
            <input type="text" name="nom" placeholder="Nom *" required />
          </div>

          <div className="input-group">
            <img src={user_icon} alt="user" />
            <input type="text" name="prenom" placeholder="Prénom *" required />
          </div>

          <div className="input-group">
            <img src={company_icon} alt="company" />
            <input type="text" name="societe" placeholder="Société" />
          </div>

          <div className="input-group">
            <img src={address_icon} alt="address" />
            <input type="text" name="adresse" placeholder="Adresse" />
          </div>

          <div className="input-group">
            <img src={city_icon} alt="city" />
            <input type="text" name="ville" placeholder="Ville" />
          </div>

          <div className="input-group">
            <img src={postal_icon} alt="postal" />
            <input type="text" name="code_postal" placeholder="Code postal" />
          </div>

          <div className="input-group">
            <img src={phone_icon} alt="phone" />
            <input
              type="text"
              name="telephone"
              placeholder="Téléphone *"
              required
            />
          </div>

          <div className="input-group">
            <img src={email_icon} alt="email" />
            <input type="email" name="email" placeholder="E-mail *" required />
          </div>

          <div className="input-group-msg">
            <img src={message_icon} alt="message" />
            <textarea
              name="message"
              placeholder="Votre message"
              required
            ></textarea>
          </div>

          <p className="required-fields">* Champs obligatoires</p>

          <div className="checkbox-group">
            <input type="checkbox" id="accept" name="accept" required />
            <label htmlFor="accept">
              J'accepte que mes données personnelles soient utilisées pour être
              contacté(e).
            </label>
          </div>

          <button type="submit" className="contact-button">
            Envoyer
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
