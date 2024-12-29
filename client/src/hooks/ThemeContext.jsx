import React from "react";
import { createContext, useState } from "react";

export const Theme = createContext(null);

const ThemeContext = ({ children }) => {
  let defaultTheme = localStorage.getItem("Theme") || "dark";
  const [theme, setTheme] = useState(defaultTheme);
  return (
    <div>
      <Theme.Provider value={{ theme, setTheme }}>
        {children}
      </Theme.Provider>
    </div>
  );
};

export default ThemeContext;
