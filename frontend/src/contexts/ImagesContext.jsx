import React, { createContext, useState } from "react";


const ImagesContext = createContext();

export default ImagesContext;

export const ImagesContextProvider = ({ children }) => {

  const [continent, setContinent] = useState("test");
  const [mermount, setMermount] = useState("");
  const [relsport, setRelsport] = useState("");
  const [citycountry, setCitycountry] = useState("");

  return (
    <ImagesContext.Provider
      value={{
        continent,
        setContinent,
        mermount,
        setMermount,
        relsport,
        setRelsport,
        citycountry,
        setCitycountry,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
}
