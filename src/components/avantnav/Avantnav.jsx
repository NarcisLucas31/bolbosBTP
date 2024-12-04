import React, { useState } from "react";
import "./Avantnav.css";

const Avantnav = () => {
  const [contactText, setContactText] = useState("Contacter Nous");

  const handleContactClick = () => {
    setContactText((prevText) =>
      prevText === "Contacter Nous" ? "06 50 07 52 40" : "Contacter Nous"
    );
  };

  return (
    <div className="avantnav">
      <button className="avantnav-button" onClick={handleContactClick}>
        {contactText}
      </button>
      <button className="avantnav-button">Avis</button>
    </div>
  );
};

export default Avantnav;
