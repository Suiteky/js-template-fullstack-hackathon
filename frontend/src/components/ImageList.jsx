import { useEffect, useState } from "react";
import axios from "axios";
import ImagesContext from "../contexts/ImagesContext";
import Image from "./Image";

function ImageList() {
  // import API Key from .env
  const API_KEY = import.meta.env.VITE_API_KEY;

  // const [keyword, setKeyword, images, setImages] = useContext(ImagesContext);
  const [keyword, setKeyword] = useState("landscape");
  const [images, setImages] = useState([]);
  const API = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

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

  console.warn(images);
  return (
    <>
      {images.map((image) => {
        return <Image key={image.id} image={image} />;
      })}
    </>
  );
}

export default ImageList;
