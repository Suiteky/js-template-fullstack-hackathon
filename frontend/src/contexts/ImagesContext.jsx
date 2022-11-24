import React, { createContext, useState } from "react";

const ImagesContext = createContext();

export default ImagesContext;

export function ImagesContextProvider({ children }) {
  const [currentImg, setCurrentImg] = useState([]);

  return (
    <ImagesContext.Provider value={{ currentImg, setCurrentImg }}>
      {children}
    </ImagesContext.Provider>
  );
}
