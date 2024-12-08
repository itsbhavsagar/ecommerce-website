import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./components/Cart.jsx";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";

let Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct></SingleProduct>
      }
    ],
    errorElement : <ErrorPage></ErrorPage>
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router}></RouterProvider>
);
