import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App-style.css";

import  Navigation  from "./components/Navigation";
import Calculator from "./components/Calculator";
import About from "./components/About";
import Contacts from "./components/Contacts";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <>
          <br />
          <Calculator />
          <br />
          </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
        <br />
        <About />
        <br />
        </>
      ),
    },
    {
      path: "/contacts",
      element: (
        <>
        <br />
        <Contacts />
        <br />
        </>
      ),
    },
  ]);

  return (
    <>
    <Navigation />
    <RouterProvider router={router} />
    </>
  );
}

export default App;
