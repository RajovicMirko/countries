import React, { createContext } from "react";

import countries from "./Countries";

export const ApiContext = createContext();

function Api({ children }) {
  const provide = {
    countries,
  };

  return <ApiContext.Provider value={provide}>{children}</ApiContext.Provider>;
}

export default Api;
