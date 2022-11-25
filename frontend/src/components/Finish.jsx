import { React, useState, useEffect, useContext } from "react";
import axios from "axios";
import Image from "./Image";
import ImagesContext from "../contexts/ImagesContext";
import { Link } from "react-router-dom";

function Finish() {
  
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [images, setImages] = useState([]);
  const [API, setAPI] = useState("");
  const autorisation = { Authorization: `Bearer ${API_KEY}` };
  const { continent, citycountry, mermount } = useContext(ImagesContext);
  // const fyd = (continent, citycountry, mermount) => {
  //   if (continent === "asia" && citycountry === "city" && mermount === "beach") {
  //     setAPI("https://api.pexels.com/v1/search?query=matsuyama&orientation=landscape&per_page=1")
  //   } else if (continent === "asia" && citycountry === "city" && mermount === "mountain") {
  //     setAPI("https://api.pexels.com/v1/search?query=hoian&orientation=landscape&per_page=1")
  //   } else if (continent === "asia" && citycountry === "city" && mermount === "surprise") {
  //     setAPI("https://api.pexels.com/v1/search?query=bangkok&orientation=landscape&per_page=1")
  //   } 
  //   else if (continent === "asia" && citycountry === "country" && mermount === "beach") {
  //     setAPI("https://api.pexels.com/v1/search?query=hue&orientation=landscape&per_page=1")
  //   } else if (continent === "asia" && citycountry === "country" && mermont === "mountain") {
  //     setAPI("https://api.pexels.com/v1/search?query=vinh&orientation=landscape&per_page=1")
  //   } else if (continent === "asia" && citycountry === "country" && mermont === "surprise") {
  //     setAPI("https://api.pexels.com/v1/search?query=thanhhao&orientation=landscape&per_page=1")
  //   } else if (continent === "asia" && citycountry === "surprise" && mermount === "beach") {
  //     setAPI("https://api.pexels.com/v1/search?query=bangkok&orientation=landscape&per_page=1")
  //   } else if (continent === "asia" && citycountry === "surprise" && mermount === "mountain") {
  //     setAPI("https://api.pexels.com/v1/search?query=tibet&orientation=landscape&per_page=1")
  //   } else if (continent === "asia" && citycountry === "surprise" && mermount === "surprise") {
  //     setAPI("https://api.pexels.com/v1/search?query=mumbai&orientation=landscape&per_page=1")
  //   } 
  //   else if (continent === "america" && citycountry === "city" && mermount === "mountain") {
  //     setAPI("https://api.pexels.com/v1/search?query=saltlakecity&orientation=landscape&per_page=1")
  //   } else if (continent === "america" && citycountry === "city" && mermount === "beach") {
  //     setAPI("https://api.pexels.com/v1/search?query=montevideo&orientation=landscape&per_page=1")
  //   } else if (continent === "america" && citycountry === "city" && mermount === "surprise") {
  //     setAPI("https://api.pexels.com/v1/search?query=chicago&orientation=landscape&per_page=1")
  //   } else if (continent === "america" && citycountry === "country" && mermount === "mountain") {
  //     setAPI("https://api.pexels.com/v1/search?query=sequoiaforest&orientation=landscape&per_page=1")
  //   } else if (continent === "america" && citycountry === "country" && mermount === "surprise") {
  //     setAPI("https://api.pexels.com/v1/search?query=mardelplata&orientation=landscape&per_page=1")
  //   } else if (continent === "america" && citycountry === "country" && mermount === "beach") {
  //     setAPI("https://api.pexels.com/v1/search?query=baracoa&orientation=landscape&per_page=1")
  //   } else if (continent === "america" && citycountry === "surprise" && mermount === "mountain") {
  //     setAPI("https://api.pexels.com/v1/search?query=ottawa&orientation=landscape&per_page=1")
  //   } else if (continent === "america" && citycountry === "surprise" && mermont === "beach") {
  //     setAPI("https://api.pexels.com/v1/search?query=bahamas&orientation=landscape&per_page=1")
  //   } else if (continent === "america" && citycountry === "surprise" && mermount === "surprise") {
  //     setAPI("https://api.pexels.com/v1/search?query=lima&orientation=landscape&per_page=1")
  //   } 
  //   else if (continent === "europe" && citycountry === "city" && mermount === "mountain") {
  //     setAPI("https://api.pexels.com/v1/search?query=Gruyères&orientation=landscape&per_page=1")
  //   } else if (continent === "europe" && citycountry === "city" && mermount === "beach") {
  //     setAPI("https://api.pexels.com/v1/search?query=Madère&orientation=landscape&per_page=1")
  //   } else if (continent === "europe" && citycountry === "city" && mermont === "surprise") {
  //     setAPI("https://api.pexels.com/v1/search?query=Monténégro&orientation=landscape&per_page=1")
  //   } else if (continent === "europe" && citycountry === "country" && mermount === "mountain") {
  //     setAPI("https://api.pexels.com/v1/search?query=Chamonix&orientation=landscape&per_page=1")
  //   } else if (continent === "europe" && citycountry === "country" && mermont === "surprise") {
  //     setAPI("https://api.pexels.com/v1/search?query=Malmö&orientation=landscape&per_page=1")
  //   } else if (continent === "europe" && citycountry === "country" && mermount === "beach") {
  //     setAPI("https://api.pexels.com/v1/search?query=Cefalu&orientation=landscape&per_page=1")
  //   } else if (continent === "europe" && citycountry === "surprise" && mermount === "mountain") {
  //     setAPI("https://api.pexels.com/v1/search?query=Hallstatt&orientation=landscape&per_page=1")
  //   } else if (continent === "europe" && citycountry === "surprise" && mermount === "beach") {
  //     setAPI("https://api.pexels.com/v1/search?query=SaoJacinto&orientation=landscape&per_page=1")
  //   } else if (continent === "europe" && citycountry === "surprise" && mermount === "surprise") {
  //     setAPI("https://api.pexels.com/v1/search?query=Ronda&orientation=landscape&per_page=1")
  //   } 
  //   else if (continent === "africa" && citycountry === "city" && mermount === "beach") { 
  //     setAPI("https://api.pexels.com/v1/search?query=muizenberg&orientation=landscape&per_page=1")
  //   } else if (continent === "africa" && citycountry === "city" && mermount === "mountain") {
  //     setAPI("https://api.pexels.com/v1/search?query=tanzanie&orientation=landscape&per_page=1")
  //   } else if (continent === "africa" && citycountry === "city" && mermount === "surprise") {
  //     setAPI("https://api.pexels.com/v1/search?query=oran&orientation=landscape&per_page=1")
  //   } else if (continent === "africa" && citycountry === "country" && mermount === "beach") {
  //     setAPI("https://api.pexels.com/v1/search?query=taghazout&orientation=landscape&per_page=1")
  //   } else if (continent === "africa" && citycountry === "country" && mermount === "mountain") {
  //     setAPI("https://api.pexels.com/v1/search?query=tchad&orientation=landscape&per_page=1")
  //   } else if (continent === "africa" && citycountry === "country" && mermount === "surprise") {
  //     setAPI("https://api.pexels.com/v1/search?query=marrakech&orientation=landscape&per_page=1")
  //   } else if (continent === "africa" && citycountry === "surprise" && mermount === "beach") {
  //     setAPI("https://api.pexels.com/v1/search?query=praia&orientation=landscape&per_page=1")
  //   } else if (continent === "africa" && citycountry === "surprise" && mermount === "mountain") {
  //     setAPI("https://api.pexels.com/v1/search?query=ethiopie&orientation=landscape&per_page=1")
  //   } else if (continent === "africa" && citycountry === "surprise" && mermount === "surprise") {
  //     setAPI("https://api.pexels.com/v1/search?query=zanzibar&orientation=landscape&per_page=1")
  //    }  
  //    else if (continent === "surprise" && citycountry === "country" && mermount === "beach") {
  //     setAPI("https://api.pexels.com/v1/search?query=Portofino&orientation=landscape&per_page=1")
  //   } else if (continent === "surprise" && citycountry === "country" && mermount === "mountain") {
  //     setAPI("https://api.pexels.com/v1/search?query=Mittenwald&orientation=landscape&per_page=1")
  //   } else if (continent === "surprise" && citycountry === "country" && mermount === "surprise") {
  //     setAPI("https://api.pexels.com/v1/search?query=Positano&orientation=landscape&per_page=1")
  //   } else if (continent === "surprise" && citycountry === "city" && mermount === "beach") {
  //     setAPI("https://api.pexels.com/v1/search?query=Sydney&orientation=landscape&per_page=1")
  //   } else if (continent === "surprise" && citycountry === "city" && mermount === "mountain") {
  //     setAPI("https://api.pexels.com/v1/search?query=Potosí&orientation=landscape&per_page=1")
  //   } else if (continent === "surprise" && citycountry === "city" && mermount === "surprise") {
  //     setAPI("https://api.pexels.com/v1/search?query=Willemstad&orientation=landscape&per_page=1")
  //   } else if (continent === "surprise" && citycountry === "surprise" && mermount === "beach") {
  //     setAPI("https://api.pexels.com/v1/search?query=Tendby&orientation=landscape&per_page=1")
  //   } else if (continent === "surprise" && citycountry === "surprise" && mermount === "mountain") {
  //     setAPI("https://api.pexels.com/v1/search?query=Shigatsé&orientation=landscape&per_page=1")
  //   } else if (continent === "surprise" && citycountry === "surprise" && mermount === "surprise") {
  //     setAPI("https://api.pexels.com/v1/search?query=Cassis&orientation=landscape&per_page=1")
  //   } else {
  //     setAPI("https://api.pexels.com/v1/search?query=Cassis&orientation=landscape&per_page=1")
  //   }
  // };

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
    <h1 className="finish">THIS IS DREAM!</h1>
    </>
  );
}

export default Finish;