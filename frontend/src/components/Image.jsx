import React from "react";

export default function Image({ image }) {
  return (
    <div>
      <img src={image.src.large} alt={image.alt} className="landscape" />
    </div>
  );
}
