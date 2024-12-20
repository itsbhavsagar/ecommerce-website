import React from "react";
import { createContext, useState } from "react";

export const Theme = createContext(null);

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <Theme.Provider value={{ theme, setTheme }}>{children}</Theme.Provider>
    </div>
  );
};

export default ThemeContext;
