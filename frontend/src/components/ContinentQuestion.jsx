import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Image from "./Image";
import { Link } from "react-router-dom";
import ImagesContext from "../contexts/ImagesContext";

function ContinentQuestion() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [keyword, setKeyword] = useState("continent");
  const [images, setImages] = useState([]);
  const API = `https://api.pexels.com/v1/search?query=${keyword}&page=3&orientation=landscape&per_page=9`;
  const autorisation = { Authorization: `Bearer ${API_KEY}` };
  const { setContinent } = useContext(ImagesContext);

  useEffect(() => {
    axios
      .get(API, { headers: autorisation })
      .then((response) => response.data)
      .then((data) => {
        setImages(data.photos);
      })
      .catch((err) => console.error("Error in useEffect:", err));
  }, []);

  const handleClickCont = (e) => {
    setContinent(e.target.value);
  };

  return (
    <>
      <div className="imgs">
        {images.map((image) => {
          return <Image key={image.id} image={image} />;
        })}
      </div>
      <Link to={"/"}>
        <p className="home">Home</p>
      </Link>
      <h1 className="title">CONTINENT ?</h1>
      <Link to={"/mermontagne"}>
        <button className="reponse1" value="asia" onClick={handleClickCont}>Asia/Oceania</button>
        <button className="reponse2" value="europe" onClick={handleClickCont}>Europe</button>
        <button className="reponse3" value="africa" onClick={handleClickCont}>Africa</button>
        <button className="reponse4" value="america" onClick={handleClickCont}>América</button>
        <button className="surprise" value="surprise" onClick={handleClickCont}>Surprise Me !</button>
      </Link>
    </>
  );
}

export default ContinentQuestion;
