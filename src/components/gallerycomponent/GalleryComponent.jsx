import { useState } from "react";
import React from "react";
import "./GalleryComponent.css";
import projet2 from "../../assets/projet2.jpg";
import projet3 from "../../assets/projet3.jpg";
import projet4 from "../../assets/projet4.jpg";
import projet5 from "../../assets/projet5.jpg";
import projet6 from "../../assets/projet6.jpg";
import projet7 from "../../assets/projet7.jpg";
import projet8 from "../../assets/projet8.jpg";
import projet9 from "../../assets/projet9.jpg";

const images = [
  projet2,
  projet3,
  projet4,
  projet5,
  projet6,
  projet7,
  projet8,
  projet9,
];

const GalleryComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <div className="gallery-scroll">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={"Projet ${index + 2}"}
            className="gallery-image"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <button
            className="close-button"
            onClick={() => setSelectedImage(null)}
          >
            X
          </button>
          <img src={selectedImage} alt="Agrandissement" />
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;
