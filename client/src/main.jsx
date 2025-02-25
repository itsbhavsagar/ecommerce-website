import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import ThemeContext from './hooks/ThemeContext';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Cart from './features/cart/Cart.jsx';
import Home from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
// import Food from "./Food.jsx";

let Food = lazy(() => import('./Food.jsx'));

let Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },

      { path: '/about', element: <About /> },

      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/product/:id',
        element: <SingleProduct />,
      },
      {
        path: '/food',
        element: (
          <Suspense fallback={<h1>....Loading</h1>}>
            <Food />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/Signup',
    element: <Signup />,
  },
]);

createRoot(document.getElementById('root')).render(
  <ThemeContext>
    <RouterProvider router={Router}></RouterProvider>
  </ThemeContext>
);
