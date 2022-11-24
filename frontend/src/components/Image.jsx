import React from "react";

export default function Image({ image }) {
  return (
    <div>
      <img src={image.url} alt="img" />
    </div>
  );
}
