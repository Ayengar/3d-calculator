import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App-style.css";

import Navigation from "./components/Navigation"
import OptionSelector from "./components/OptionSelector"
import UploadFile from "./components/UploadFile";
import ModelViewer from "./components/ModelViewer";
import Container from "react-bootstrap/esm/Container";

const App = () => {

  return (
    <>
    <div style={{ width: "50vw", height: "50vh" }}>
    <ModelViewer scale = {1} modelPath={"http://localhost:9000/cube.stl"} />
    </div>
    </>
  );
}

export default App;