import React from "react";
import "./CharacterText.css";

const CharacterText = ({ name, species, status, gender, type }) => (
  <div className="character-text">
    <h2 className="character-name">{name}</h2>
    <p className="character-species">{species}</p>
    <p className="character-gender">Género: {gender}</p>
    <p className="character-type">Tipo: {type}</p>
    <span className={`character-status ${status}`}>{status}</span>
  </div>
);

export default CharacterText;
