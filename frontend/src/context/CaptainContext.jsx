import React, { createContext, useState, useContext } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState();
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };
  const contextValues = {
    captain,
    setCaptain,
    isloading,
    setIsloading,
    error,
    setError,
    updateCaptain,
  };
  return (
    <div>
      <CaptainDataContext.Provider value={contextValues}>
        {children}
      </CaptainDataContext.Provider>
    </div>
  );
};

export default CaptainContext;
