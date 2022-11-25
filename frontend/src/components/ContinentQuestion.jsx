import { React, useState, useEffect } from "react";
import axios from "axios";
import Image from "./Image";
import { Link } from "react-router-dom";

function ContinentQuestion() {
  
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [keyword, setKeyword] = useState("continent");
  const [images, setImages] = useState([]);
  const API = `https://api.pexels.com/v1/search?query=${keyword}&page=3&orientation=landscape&per_page=9`;
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
    <Link to={"/"} >
    <p className="home">Home</p>
    </Link>
      <h1 className="title">CONTINENT ?</h1>
      <Link to={"/mermontagne"}>
      <p className="reponse1">Asia/Oceania</p>
      <p className="reponse2">Europe</p>
      <p className="reponse3">Africa</p>
      <p className="reponse4">América</p>
      <p className="surprise">Surprise Me !</p>
      </Link>
    </>
  );
}

export default ContinentQuestion;
