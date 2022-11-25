import { react, useState, useEffect } from "react";
import axios from "axios";

const Webcam = () => {
  // import API Key from .env
  const ApiKey = import.meta.env.VITE_API_KEY;

  const API = `https://api.windy.com/api/webcams/v2/?key=${ApiKey}`;

  useEffect(() => {
    axios
      .get(API)
      .then((response) => response.data)
      .then((data) => {
        console.warn(data);
      })
      .catch((err) => console.error("Error in useEffect:", err));
  }, []);
};

export default Webcam;
