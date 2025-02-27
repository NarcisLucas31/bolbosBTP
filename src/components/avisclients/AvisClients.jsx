// AvisClients.jsx
import React from "react";
import "./AvisClients.css";

const AvisClients = () => {
  // Liste d'avis fictifs
  const avis = [
    { id: 1, note: 5, date: "2023-11-20" },
    { id: 2, note: 4, date: "2024-02-18" },
    { id: 3, note: 3, date: "2024-03-15" },
    { id: 4, note: 5, date: "2024-04-10" },
    { id: 5, note: 5, date: "2025-02-05" },
  ];

  // Fonction pour afficher les étoiles
  const renderStars = (note) => {
    return "★".repeat(note) + "☆".repeat(5 - note);
  };

  return (
    <div className="avis-container">
      <h2>Avis des clients</h2>
      <ul className="avis-list">
        {avis.map((item) => (
          <li key={item.id} className="avis-item">
            <div className="avis-note">{renderStars(item.note)}</div>
            <div className="avis-date">
              {new Date(item.date).toLocaleDateString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvisClients;
