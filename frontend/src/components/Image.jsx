import { react, useState, useEffect } from "react";
import axios from "axios";

function Image() {
  // import API Key from .env
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [keyword, setKeyword] = useState("random");

  const API = `https://api.pexels.com/v1/search?query=${keyword}&per_page=10`;

  const autorisation = { Authorization: `Bearer ${API_KEY}` };

  useEffect(() => {
    axios
      .get(API, { headers: autorisation })
      .then((response) => response.data)
      .then((data) => {
        console.warn(data);
      })
      .catch((err) => console.error("Error in useEffect:", err));
  }, []);

  return <div>coucou</div>;
}
export default Image;
