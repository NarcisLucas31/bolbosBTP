import React from "react";
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
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f60a3fe9-7012-4466-8166-a91d6beed629");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Envoyez nous un message</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          natus, sequi eligendi obcaecati cum molestiae quae atque, repudiandae
          cumque necessitatibus sapiente consectetur accusantium fugit incidunt
          iste, suscipit ut soluta. Ab!
        </p>
      </div>
      <div className="contact-form">
        <form onSubmit={onSubmit}>
          <div className="input-group">
            <img src={user_icon} alt="user" />
            <input type="text" name="nom" placeholder="Nom *" required />
          </div>

          <div className="input-group">
            <img src={company_icon} alt="company" />
            <input type="text" name="societe" placeholder="Société" />
          </div>

          <div className="input-group">
            <img src={address_icon} alt="address" />
            <input type="text" name="adresse" placeholder="Adresse" />
          </div>

          <div className="input-group">
            <img src={city_icon} alt="city" />
            <input type="text" name="ville" placeholder="Ville" />
          </div>

          <div className="input-group">
            <img src={postal_icon} alt="postal" />
            <input type="text" name="code_postal" placeholder="Code postal" />
          </div>

          <div className="input-group">
            <img src={phone_icon} alt="phone" />
            <input
              type="text"
              name="telephone"
              placeholder="Téléphone *"
              required
            />
          </div>

          <div className="input-group">
            <img src={email_icon} alt="email" />
            <input type="text" name="email" placeholder="E-mail *" required />
          </div>

          <div className="input-group">
            <img src={message_icon} alt="message" />
            <textarea
              name="message"
              placeholder="Votre message"
              required
            ></textarea>
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
