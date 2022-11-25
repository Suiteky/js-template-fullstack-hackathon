import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Image from "./Image";

function DetenteQuestion() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [keyword, setKeyword] = useState("relax&sport");
  const [images, setImages] = useState([]);
  const API = `https://api.pexels.com/v1/search?query=${keyword}&orientation=landscape&per_page=9`;
  const autorisation = { Authorization: `Bearer ${API_KEY}` };

  useEffect(() => {
    axios
      .get(API, { headers: autorisation })
      .then((response) => response.data)
      .then((data) => {
        setImages(data.photos);
      })
      .catch((err) => console.error("Error in useEffect:", err));
  }, []);

  return (
    <>
      <div className="imgs">
        {images.map((image) => {
          return <Image key={image.id} image={image} />;
        })}
      </div>
      <Link to="/">
        <p className="home">Home</p>
      </Link>
      <Link to="/villecampagne">
        <p className="back">Back</p>
      </Link>
      <h1 className="detenteTitle">RELAX or SPORTS ?</h1>
      <a
        href={`https://webcams.windy.com/webcams/stream/1181820895?lookr.com:00e5a4a8ecc510065bf170d8769ef220:1669297233`}
      >
        <p className="reponse3">Relax</p>
        <p className="reponse2">Sports</p>
        <p className="surprise">Surprise Me !</p>
        </a>
    </>
  );
}

export default DetenteQuestion;
