import React from "react";

export default function Image({ image }) {
  return (
    <div>
      <div className="filtre">
        <img src={image.src.large} alt={image.alt} className="landscape" />
      </div>
    </div>
  );
}
