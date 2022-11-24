import React, { createContext, useState } from "react";

const WebcamContext = createContext();

export default WebcamContext;

export function WebcamContextProvider({ children }) {
  const [currentCam, setCurrentCam] = useState([]);

  return (
    <WebcamContext.Provider value={{ currentCam, setCurrentCam }}>
      {children}
    </WebcamContext.Provider>
  );
}
