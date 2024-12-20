import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import ThemeContext from "./hooks/ThemeContext";

import AppStore from "./features/cart/AppStore";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={AppStore}>
        <ThemeContext>
          <Navbar />
          <Outlet></Outlet>
        </ThemeContext>
      </Provider>
    </>
  );
}

export default App;
