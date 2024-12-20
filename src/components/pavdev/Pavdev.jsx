import React from "react";
import "./Pavdev.css";

const Pavdev = () => {
  return (
    <div className="pavdev-container">
      <div className="pavdev-content">
        <h2 className="pavdev-title">Demandez votre devis personnalisé</h2>
        <p>
          Vous avez un projet de construction, de rénovation ou d'aménagement en
          tête ? Nous sommes là pour vous accompagner dans chaque étape de la
          réalisation, qu’il s’agisse de maçonnerie, de toiture, d’isolation ou
          de tout autre service sur mesure.
        </p>
        <p>
          Notre équipe est à l’écoute de vos besoins spécifiques, pour vous
          offrir les meilleures solutions, adaptées à vos attentes et à votre
          budget. Décrivez-nous votre projet en quelques mots et nous vous
          proposerons une offre personnalisée, avec des conseils d’experts pour
          chaque domaine.
        </p>
        <ul className="pavdev-steps">
          <li>
            <strong>1. Décrivez votre projet :</strong> Indiquez-nous vos
            besoins, vos contraintes, vos préférences.
          </li>
          <li>
            <strong>2. Recevez des conseils :</strong> Nous vous contacterons
            pour vous conseiller sur les meilleures solutions et vous fournir un
            devis précis.
          </li>
          <li>
            <strong>3. Lancez les travaux :</strong> Dès validation de votre
            devis, nous débutons les travaux avec professionnalisme, en
            respectant les délais et le budget convenus.
          </li>
        </ul>
        <p className="pavdev-ready">
          <strong>Prêt à démarrer ?</strong>
          <br />
          Remplissez le formulaire ci-dessous ou contactez-nous directement pour
          discuter de votre projet. Notre équipe est impatiente de vous aider à
          concrétiser vos idées !
        </p>
      </div>
    </div>
  );
};

export default Pavdev;
