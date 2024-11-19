import React from "react";
import "./Apropos.css";
import cal from "../../assets/cal.png";

const Apropos = () => {
  return (
    <div className="apropos">
      <div className="apropos-gauche">
        <img src={cal} alt="" className="apropos-img" />
      </div>

      <div className="apropos-droite">
        <h3>azertt</h3>
        <h2>azertazert</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
          veritatis porro iste fugiat quisquam repellat omnis dolore sint quae
          aperiam? Aliquam omnis molestias eaque dignissimos cum dolore.
          Repellat, ducimus atque!
        </p>
      </div>
    </div>
  );
};

export default Apropos;
