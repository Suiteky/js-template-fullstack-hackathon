import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Image from "./Image";
import ImagesContext from "../contexts/ImagesContext";

function MerMontagneQuestion() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [keyword, setKeyword] = useState("beach,mountain");
  const [images, setImages] = useState([]);
  const API = `https://api.pexels.com/v1/search?query=${keyword}&page=34&orientation=landscape&per_page=9`;
  const autorisation = { Authorization: `Bearer ${API_KEY}` };
  const { setMermount } = useContext(ImagesContext);

  useEffect(() => {
    axios
      .get(API, { headers: autorisation })
      .then((response) => response.data)
      .then((data) => {
        setImages(data.photos);
      })
      .catch((err) => console.error("Error in useEffect:", err));
  }, []);

  const handleClickmermount = (e) => {
    setMermount(e.target.value);
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
      <h1 className="title">BEACH or MOUNTAIN ?</h1>
      <Link to={"/villecampagne"} onClick={handleClickmermount}>
        <button className="reponse1" value="beach" onClick={handleClickmermount}>Beach</button>
        <button className="reponse2" value="mountain" onClick={handleClickmermount}>Mountain</button>
        <button className="surprise" value="surprise" onClick={handleClickmermount}>Surprise Me !</button>
      </Link>
    </>
  );
}

export default MerMontagneQuestion;
