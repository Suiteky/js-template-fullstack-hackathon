import { React, useState, useEffect } from "react";
import axios from "axios";
import Image from "./Image";
import { Link } from "react-router-dom";

function ContinentQuestion() {
  
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [keyword, setKeyword] = useState("");
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

)
}