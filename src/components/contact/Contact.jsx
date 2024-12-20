import React from "react";
import "./Contact.css";
import msg_img from "../../assets/message.png";
import fleche from "../../assets/fleche-droite.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e52d7628-0e4c-4fca-95c8-1b0019780b5e");

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
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Nom</label>
          <input
            type="text"
            name=""
            placeholder="Entrer votre prénom"
            required
          />
          <label>Numéro mobile</label>
          <input
            type="text"
            name=""
            placeholder="Entrer votre numéro"
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Ecrivez votre message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Envoyer <img src={fleche} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
