import React from "react";
import "./MentionsLegales.css";

const MentionsLegales = () => {
  return (
    <div className="mentions-legales">
      <h1>
        Mentions légales de BTPBolbos domiciliée 12 Grande rue, 02310
        Nogent-l'Artaud
      </h1>

      <section>
        <h2>Éditeur du site</h2>
        <p>
          <strong>Nom de l'entreprise :</strong> BOLBOS BTP
          <br />
          <strong>Adresse :</strong> 12 Grande rue, Nogent-l'Artaud 02310
          <br />
          <strong>Téléphone :</strong> 06 50 07 52 40
          <br />
          <strong>Email :</strong> Bolbosbtp@gmail.com
          <br />
          <strong>SIRET :</strong> 93277069600015
          <br />
          <strong>RCS :</strong> [Numéro RCS et ville]
          <br />
          <strong>Capital social :</strong> [Montant]
          <br />
          <strong>Directeur de la publication :</strong> [Nom]
        </p>
      </section>

      <section>
        <h2>Hébergeur du site</h2>
        <p>
          <strong>Nom de l'hébergeur :</strong> [Nom]
          <br />
          <strong>Adresse :</strong> [Adresse complète]
          <br />
          <strong>Téléphone :</strong> [Numéro de téléphone]
        </p>
      </section>

      <section>
        <h2>Conditions générales d'utilisation</h2>
        <p>
          Pour consulter nos conditions générales d'utilisation, veuillez
          cliquer sur ce lien : <a href="/cgu">CGU</a>.
        </p>
      </section>

      <section>
        <h2>Politique de confidentialité</h2>
        <p>
          Pour consulter notre politique de confidentialité, veuillez cliquer
          sur ce lien :{" "}
          <a href="/confidentialite">Politique de confidentialité</a>.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          Notre site utilise uniquement des cookies strictement nécessaires à
          son bon fonctionnement. Ces cookies ne collectent aucune donnée
          personnelle à des fins commerciales ou analytiques. Ils sont
          indispensables pour garantir une expérience utilisateur optimale et
          assurer la sécurité du site. Conformément à la réglementation en
          vigueur, ces cookies ne nécessitent pas de consentement de votre part.
          Aucune donnée n'est partagée avec des tiers à des fins publicitaires
          ou de suivi.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Pour toute question ou réclamation, vous pouvez nous contacter à
          l'adresse suivante :{" "}
          <a href="mailto:[Bolbosbtp@gmail.com]">Bolbosbtp@gmail.com</a>.
        </p>
      </section>
    </div>
  );
};

export default MentionsLegales;
