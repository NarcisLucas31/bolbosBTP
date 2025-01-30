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
          <strong>Nom de l'entreprise :</strong> [Nom de l'entreprise]
          <br />
          <strong>Adresse :</strong> [Adresse complète]
          <br />
          <strong>Téléphone :</strong> [Numéro de téléphone]
          <br />
          <strong>Email :</strong> [Adresse email]
          <br />
          <strong>SIRET :</strong> [Numéro SIRET]
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
          <a href="/politique-de-confidentialite">
            Politique de confidentialité
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          Ce site utilise des cookies pour améliorer l'expérience utilisateur.
          Pour en savoir plus, consultez notre{" "}
          <a href="/politique-des-cookies">politique des cookies</a>.
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          Tous les contenus présents sur ce site (textes, images, logos, etc.)
          sont protégés par les lois sur la propriété intellectuelle. Toute
          reproduction sans autorisation est interdite.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Pour toute question ou réclamation, vous pouvez nous contacter à
          l'adresse suivante : <a href="mailto:[email]">[email]</a>.
        </p>
      </section>
    </div>
  );
};

export default MentionsLegales;
