import React, { useState } from "react";
import "./CharacterImage.css";

const CharacterImage = ({ src, alt }) => {
  const [imageError, setImageError] = useState(false);
  const placeholderImage = "https://via.placeholder.com/300x300?text=No+disponible";

  const handleImageError = () => {
    console.error(`Error al cargar la imagen: ${src}`);
    setImageError(true);
  };

  return (
    <div className="character-image-container">
      <img
        src={imageError ? placeholderImage : src}
        alt={alt}
        className="character-image"
        onError={handleImageError}
        loading="lazy"
      />
      {imageError && (
        <div className="image-error-message">
          No se pudo cargar la imagen
        </div>
      )}
    </div>
  );
};

export default CharacterImage;
