import React, { createContext, useState } from "react";

const ImagesContext = createContext();

export default ImagesContext;

export function ImagesContextProvider({ children }) {
  const [keyword, setKeyword] = useState("mountain");
  const [images, setImages] = useState([]);
  const [currentImg, setCurrentImg] = useState([]);

  return (
    <ImagesContext.Provider
      value={{
        currentImg,
        setCurrentImg,
        keyword,
        setKeyword,
        images,
        setImages,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
}
