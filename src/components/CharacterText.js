import React from "react";
import "./CharacterText.css";

const CharacterText = ({ name, species, status }) => (
  <div className="character-text">
    <h2 className="character-name">{name}</h2>
    <p className="character-species">{species}</p>
    <span className={`character-status ${status}`}>{status}</span>
  </div>
);

export default CharacterText;
