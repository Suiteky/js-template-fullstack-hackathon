import { React, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Image from "./Image";
import ImagesContext from "../contexts/ImagesContext";

function DetenteQuestion() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [keyword, setKeyword] = useState("relax&sports");
  const [images, setImages] = useState([]);
  const API = `https://api.pexels.com/v1/search?query=${keyword}&orientation=landscape&per_page=9`;
  const autorisation = { Authorization: `Bearer ${API_KEY}` };
  const { relsport, setRelsport } = useContext(ImagesContext);

  useEffect(() => {
    axios
      .get(API, { headers: autorisation })
      .then((response) => response.data)
      .then((data) => {
        setImages(data.photos);
      })
      .catch((err) => console.error("Error in useEffect:", err));
  }, []);

  const handleClickrelsport = (e) => {
    setRelsport(e.target.value);
  };

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
      <h1 className="title">RELAX or SPORTS ?</h1>
      <Link to="/finish">
      <button className="reponse1" value="relax" onClick={handleClickrelsport}>Relax</button>
      <button className="reponse2" value="sports" onClick={handleClickrelsport}>Sports</button>
      <button className="surprise" value="surprise" onClick={handleClickrelsport}>Surprise Me !</button>
      </Link>
    </>
  );
}

export default DetenteQuestion;
