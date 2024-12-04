import React, { useState, useEffect } from "react";
import "./Avantnav.css";

const Avantnav = () => {
  const [contactText, setContactText] = useState("Contacter Nous");
  const [isMobile, setIsMobile] = useState(false);

  // Détecte si l'utilisateur est sur un appareil mobile
  useEffect(() => {
    const checkMobile = () => {
      if (navigator.userAgent.match(/Mobi/)) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile); // Re-vérifie lors du redimensionnement
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleContactClick = () => {
    if (!isMobile) {
      setContactText((prevText) =>
        prevText === "Contacter Nous" ? "06 50 07 52 40" : "Contacter Nous"
      );
    }
  };

  return (
    <div className="avantnav">
      <button className="avantnav-button" onClick={handleContactClick}>
        {/* Si sur mobile, redirige vers le numéro, sinon affiche le texte */}
        {isMobile ? (
          <a
            href="tel:+33650075240"
            style={{ textDecoration: "none", color: "black" }}
          >
            {contactText}
          </a>
        ) : (
          contactText
        )}
      </button>
      <button className="avantnav-button">Avis</button>
    </div>
  );
};

export default Avantnav;
