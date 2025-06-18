import React from "react";
import "./CharacterImage.css";

const CharacterImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="character-image"
  />
);

export default CharacterImage;
