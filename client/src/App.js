import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App-style.css";

import Navigation from "./components/Navigation";
import OptionSelector from "./components/OptionSelector";
import UploadFile from "./components/UploadFile";
import ModelViewer from "./components/ModelViewer";
import Container from "react-bootstrap/esm/Container";


const App = () => {

  const [uploadStatus, setUploadStatus] = useState(false);
  const [modelPath, setModelPath] = useState('http://localhost:9000/cube.stl')

  return (
    <>
    <Container>
    <div style={{ width: "50vw", height: "50vh" }}>
      {(!uploadStatus) ? <UploadFile setUploadStatus={setUploadStatus} setModelPath={setModelPath}/> : <ModelViewer scale = {1000} modelPath={modelPath} />}
    </div>
    </Container>
    <Button style={{position:'absolute', top:'500px'}} onClick={() => setUploadStatus(false)}>← Back</Button>
    </>
  );
}

export default App;