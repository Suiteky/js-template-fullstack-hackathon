import { React, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Image from "./Image";
import ImagesContext from "../contexts/ImagesContext";

function VilleCampagneQuestion() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [keyword, setKeyword] = useState("city&countryside");
  const [images, setImages] = useState([]);
  const API = `https://api.pexels.com/v1/search?query=${keyword}&orientation=landscape&per_page=9`;
  const autorisation = { Authorization: `Bearer ${API_KEY}` };
  const { citycountry, setCitycountry } = useContext(ImagesContext);

  useEffect(() => {
    axios
      .get(API, { headers: autorisation })
      .then((response) => response.data)
      .then((data) => {
        setImages(data.photos);
      })
      .catch((err) => console.error("Error in useEffect:", err));
  }, []);

  const handleClickcitycountry = (e) => {
    setCitycountry(e.target.value);
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
      <h1 className="title">CITY or COUNTRYSIDE ?</h1>
      <Link to={"/detente"}>
        <button className="reponse1" value="city" onClick={handleClickcitycountry}>City</button>
        <button className="reponse2" value="country" onClick={handleClickcitycountry}>Countryside</button>
        <button className="surprise" value="surprise" onClick={handleClickcitycountry}>Surprise Me !</button>
      </Link>
    </>
  );
}

export default VilleCampagneQuestion;
