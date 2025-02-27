import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    service: "",
    adresse: "",
    ville: "",
    code_postal: "",
    telephone: "",
    email: "",
    message: "",
    accept: false,
  });

  const [result, setResult] = useState("");

  const services = [
    "Pose menuiserie extérieures",
    "Dressing sur mesure",
    "Cuisine sur mesure",
    "Revêtement sol",
    "Revêtement muraux",
    "Salle de bain",
    "Habillage sol",
    "Abris / Terrasse",
    "Projet personnalisé",
  ]; // Remplace ces services par les tiens

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi en cours...");

    try {
      const response = await fetch("https://formspree.io/f/mdkadwea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResult("Formulaire envoyé avec succès !");
        setFormData({
          nom: "",
          prenom: "",
          service: "",
          adresse: "",
          ville: "",
          code_postal: "",
          telephone: "",
          email: "",
          message: "",
          accept: false,
        });
      } else {
        setResult("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      setResult("Erreur de connexion au serveur.");
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Envoyez-nous un message</h3>
        <p>
          Vous avez un projet de construction, de rénovation ou d’aménagement ?
          Besoin d’un devis ou de conseils personnalisés ? Remplissez le
          formulaire ci-dessous.
        </p>
      </div>
      <div className="contact-form">
        <form onSubmit={onSubmit}>
          {[
            "nom",
            "prenom",
            "adresse",
            "ville",
            "code_postal",
            "telephone",
            "email",
          ].map((field, index) => (
            <div className="input-group" key={index}>
              <img
                src={
                  {
                    nom: user_icon,
                    prenom: user_icon,
                    adresse: address_icon,
                    ville: city_icon,
                    code_postal: postal_icon,
                    telephone: phone_icon,
                    email: email_icon,
                  }[field]
                }
                alt={field}
              />
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`${field.replace("_", " ").toUpperCase()}${
                  field === "prenom" || field === "email" || field === "adresse"
                    ? ""
                    : " *"
                }`}
                onChange={handleChange}
                value={formData[field]}
                required={
                  !(
                    field === "prenom" ||
                    field === "email" ||
                    field === "adresse"
                  )
                }
              />
            </div>
          ))}

          {/* Sélecteur de service avec placeholder */}
          <div className="input-group">
            <img src={company_icon} alt="service" />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={formData.service ? "" : "placeholder"}
            >
              <option value="" disabled hidden>
                SERVICE *
              </option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group-msg">
            <img src={message_icon} alt="message" />
            <textarea
              name="message"
              placeholder="VOTRE MESSAGE *"
              required
              onChange={handleChange}
              value={formData.message}
            ></textarea>
          </div>

          <p className="required-fields">* Champs obligatoires</p>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              required
              checked={formData.accept}
              onChange={handleChange}
            />
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
