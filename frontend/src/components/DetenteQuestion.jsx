import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Image from "./Image";

function DetenteQuestion() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [keyword, setKeyword] = useState("relax&sports");
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
    <Link to={"/"} >
    <p className="home">Home</p>
    </Link>
        <h1 className="title">RELAX or SPORTS ?</h1>
        <p className="reponse1">Relax</p>
        <p className="reponse2">Sports</p>
        <p className="surprise">Surprise Me !</p>
      </>
    );
  }
  
  export default DetenteQuestion;
  