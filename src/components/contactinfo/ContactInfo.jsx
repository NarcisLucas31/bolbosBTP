import React from "react";
import "./ContactInfo.css";
import tel_img from "../../assets/tel.png";
import mail_img from "../../assets/mail.png";
import adresse_img from "../../assets/adresse.png";

const ContactInfo = () => {
  return (
    <div className="contact-container">
      <div className="white-box"></div> {/* Grand carré blanc en haut */}
      <div className="contact-info">
        <h2>Nos coordonnées</h2>
        <div className="contact-details">
          <p>
            <img src={adresse_img} alt="Adresse" />
            12 Grande rue, Nogent-l'Artaud 02310
          </p>
          <p>
            <img src={tel_img} alt="Téléphone" />
            06 50 07 52 40
          </p>
          <p>
            <img src={mail_img} alt="Email" />
            Bolbosbtp@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
