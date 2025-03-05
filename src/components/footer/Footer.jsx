import React from "react";
import "./Footer.css";
import tel_img from "../../assets/tel.png";
import mail_img from "../../assets/mail.png";
import adresse_img from "../../assets/adresse.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Renseignements utiles :</h3>
          <p>
            <img src={adresse_img} alt="" />
            <i className="fas fa-map-marker-alt"></i> 12 Grande rue,
            Nogent-l'Artaud 02310
          </p>
          <p>
            <img src={tel_img} alt="" />
            <i className="fas fa-phone"></i> 06 50 07 52 40
          </p>
          <p>
            <img src={mail_img} alt="" />
            <i className="fas fa-envelope"></i> Bolbosbtp@gmail.com
          </p>
        </div>
        <div className="footer-section">
          <h3>Nos avis :</h3>
          <Link to="/avis">
            <button className="avantnav-button">Avis</button>
          </Link>
        </div>
        <div className="footer-section">
          <h3>Nous contacter :</h3>
          <Link to="/contact">
            <button className="avantnav-button">Contact</button>
          </Link>
        </div>
      </div>
      <div className="footer-legal">
        <p>
          <Link
            to="/mentionslegales"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Mentions légales
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
