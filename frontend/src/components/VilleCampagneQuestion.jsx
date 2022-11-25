import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Image from "./Image";


function VilleCampagneQuestion() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [keyword, setKeyword] = useState("city&countryside");
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
      <h1 className="title">CITY or COUNTRYSIDE ?</h1>
      <Link to={"/detente"}>
      <p className="reponse1">City</p>
      <p className="reponse2">Countryside</p>
      <p className="surprise">Surprise Me !</p>
      </Link>
    </>
  );
}

export default VilleCampagneQuestion;
