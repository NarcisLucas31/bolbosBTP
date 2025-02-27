import "./PolitiqueConfidentialite.css";
import React from "react";

const PolitiqueConfidentialite = () => {
  return (
    <div className="politique-container">
      <h1>Politique de Confidentialité</h1>

      <h2>1. Introduction</h2>
      <p>
        La présente Politique de Confidentialité a pour objectif d'informer les
        utilisateurs du site Bolbos BTP sur la collecte et le traitement de
        leurs données personnelles. Nous nous engageons à respecter la
        confidentialité et la protection de ces données conformément à la
        réglementation en vigueur, notamment le Règlement Général sur la
        Protection des Données (RGPD).
      </p>

      <h2>2. Données collectées</h2>
      <p>
        Nous collectons des informations personnelles via notre formulaire de
        contact, notamment :
        <ul>
          <li>Nom et prénom</li>
          <li>Adresse e-mail</li>
          <li>Numéro de téléphone</li>
          <li>Adresse postale</li>
          <li>
            Toute autre information fournie volontairement par l'utilisateur
          </li>
        </ul>
      </p>

      <h2>3. Finalités de la collecte</h2>
      <p>
        Les données personnelles collectées sont utilisées pour :
        <ul>
          <li>Répondre aux demandes envoyées via le formulaire de contact</li>
          <li>
            Établir des devis et fournir des informations sur nos services
          </li>
          <li>Améliorer l’expérience utilisateur sur le site</li>
          <li>Respecter nos obligations légales</li>
        </ul>
      </p>

      <h2>4. Partage des données</h2>
      <p>
        Les données personnelles ne sont ni vendues, ni échangées, ni partagées
        avec des tiers à des fins commerciales. Toutefois, elles peuvent être
        transmises aux prestataires techniques qui nous aident à exploiter le
        site (hébergement, maintenance, etc.), dans le respect des règles de
        confidentialité.
      </p>

      <h2>5. Sécurité des données</h2>
      <p>
        Nous mettons en place des mesures de sécurité appropriées pour protéger
        les données personnelles contre tout accès non autorisé, altération,
        divulgation ou destruction.
      </p>

      <h2>6. Droits des utilisateurs</h2>
      <p>
        Conformément à la réglementation, vous disposez des droits suivants :
        <ul>
          <li>
            <strong>Droit d’accès</strong> : obtenir une copie des données vous
            concernant
          </li>
          <li>
            <strong>Droit de rectification</strong> : modifier les informations
            inexactes
          </li>
          <li>
            <strong>Droit de suppression</strong> : demander l’effacement de vos
            données
          </li>
          <li>
            <strong>Droit d’opposition</strong> : refuser le traitement de vos
            données dans certains cas
          </li>
          <li>
            <strong>Droit à la portabilité</strong> : récupérer vos données dans
            un format structuré
          </li>
        </ul>
        Pour exercer ces droits, contactez-nous à l’adresse suivante :
        Bolbosbtp@gmail.com
      </p>

      <h2>7. Modification de la Politique de Confidentialité</h2>
      <p>
        Nous nous réservons le droit de modifier cette Politique à tout moment.
        La version mise à jour sera publiée sur cette page.
      </p>
    </div>
  );
};

export default PolitiqueConfidentialite;
