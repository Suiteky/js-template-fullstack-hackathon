import React from "react";

export default function Image({ image }) {
  const handleClick = (e) => {
    console.warn("j'existe");
  };

  return (
    <div>
      <img
        src={image.src.large}
        alt={image.alt}
        className="landscape"
        onClick={handleClick}
      />
    </div>
  );
}
