import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import ThemeContext from "./utility/ThemeContext";

function App() {
  return (
    <>
      <ThemeContext>
        <Navbar />
        <Outlet></Outlet>
      </ThemeContext>
    </>
  );
}

export default App;
