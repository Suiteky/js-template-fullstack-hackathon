import { react, useState, useEffect } from "react";
import axios from "axios";
import Image from "./Image";

function ContinentQuestion() {
  const [keyword, setKeyword] = useState("continent");
  const [images, setImages] = useState([]);
  const API = `https://api.pexels.com/v1/search?query=${keyword}&orientation=landscape&per_page=9`;
  const API_KEY = import.meta.env.VITE_API_KEY;
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
      {images.map((image) => {
        return <Image key={image.id} image={image} />;
      })}
      <h1 className="title">CONTINENT ?</h1>
      <p className="reponse1">Asie/Océanie</p>
      <p className="reponse2">Europe</p>
      <p className="reponse3">Afrique</p>
      <p className="reponse4">Amérique</p>
    </>
  );
}

export default ContinentQuestion;
