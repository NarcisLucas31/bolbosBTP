import React from "react";
import "./Contact.css";
import msg_img from "../../assets/message.png";

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
        <h3>
          Envoyez nous un message <img src={msg_img} alt="" />
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          natus, sequi eligendi obcaecati cum molestiae quae atque, repudiandae
          cumque necessitatibus sapiente consectetur accusantium fugit incidunt
          iste, suscipit ut soluta. Ab!
        </p>
      </div>
      <div className="contact-form">
        <form onSubmit={onSubmit}>
          <input type="text" name="" placeholder="Nom *" required />
          <input type="text" name="" placeholder="Société" />
          <input type="text" name="" placeholder="Adresse" />
          <input type="text" name="" placeholder="Ville" />
          <input type="text" name="" placeholder="Code postal" />
          <input type="text" name="" placeholder="Téléphone *" required />
          <input type="text" name="" placeholder="E-mail *" required />
          <textarea
            name="message"
            placeholder="Votre message"
            required
          ></textarea>
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
