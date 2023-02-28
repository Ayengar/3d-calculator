import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App-style.css";

import Navigation from "./components/Navigation";
import OptionSelector from "./components/OptionSelector";
import UploadFile from "./components/UploadFile";
import ModelViewer from "./components/ModelViewer";
import Container from "react-bootstrap/esm/Container";
import InputSize from "./components/InputSize";

const App = () => {

  const [uploadStatus, setUploadStatus] = useState(false);
  const [modelPath, setModelPath] = useState('http://localhost:9000/cube.stl');
  
  const [modelRenderStatus, setModelRenderStatus] = useState(false);

  const [selectedColor, setSelectedColor] = useState('gray');
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const colors = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "orange", label: "Orange" },
  ];

  const materials = [
    {value: "PLA", label: "PLA"},
    {value: "ABS", label: "ABS"},
    {value: "PETG", label: "PETG"},
  ]


  return (
    <>
    <Navigation />
    <Container>
    <div className="row" style={{ width: "50vw", height: "71vh" }}>
      {(!uploadStatus) ? <UploadFile setUploadStatus={setUploadStatus} setModelPath={setModelPath}/> : <ModelViewer modelPath={modelPath} color={selectedColor.value} setModelRenderStatus={setModelRenderStatus} />}
      
      {(uploadStatus) ? <Button onClick={() => setUploadStatus(false)}>← Back</Button> : <Button onClick={() => setUploadStatus(true)}>Forward →</Button>}
      
    </div>
    </Container>
    <Container style={{margin:"10%", width:"50%"}}>
      <OptionSelector selected={selectedColor} setSelected={setSelectedColor} options={colors}/>
      <OptionSelector selected={selectedMaterial} setSelected={setSelectedMaterial} options={materials}/>
      {(modelRenderStatus === true) ? <InputSize modelRenderStatus={modelRenderStatus}/> : <h1>Load model to see something</h1>}
    </Container>
    </>
  );
}

export default App;