import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';


import "bootstrap/dist/css/bootstrap.min.css";
import "./App-style.css";

import Navigation from "./components/Navigation";
import OptionSelector from "./components/OptionSelector";
import UploadFile from "./components/UploadFile";
import ModelViewer from "./components/ModelViewer";
import InputSize from "./components/InputSize";


const App = () => {

  const [uploadStatus, setUploadStatus] = useState(false);
  const [modelPath, setModelPath] = useState('https://threed-calculator.onrender.com/cube.stl');
  
  const [modelRenderStatus, setModelRenderStatus] = useState(false);
  const [modelVolume, setModelVolume] = useState('');

  const [selectedColor, setSelectedColor] = useState('gray');
  const [selectedMaterial, setSelectedMaterial] = useState('');

  
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

  function setPrice(volume){
    let price = 0.076*volume;
    let roundedPrice = Math.round((price + Number.EPSILON) * 100) / 100;
    return roundedPrice;
  }

  function goBack(condition){
    setUploadStatus(condition);
    setModelRenderStatus(condition);
    setSelectedColor('gray');
    setSelectedMaterial('');
  }

  return (
    <>
    <Navigation />
    <br/>
    <Card className="Calculator-Card">
      <Card.Body>
        <Row>
          <Col lg={true}>
            <div className="Canvas-Container">
              {(!uploadStatus) ? 
              <UploadFile setUploadStatus={setUploadStatus} setModelPath={setModelPath}/> 
              : 
              <ModelViewer modelPath={modelPath} color={selectedColor.value} setModelRenderStatus={setModelRenderStatus} />
              }
            </div>
          </Col>
          <Col lg={true}>
            <Card className="Options-Card">
              <Card.Body>
              {(modelRenderStatus === true) ? 
                <>
                  <OptionSelector placeholder={"Select color"} selected={selectedColor} setSelected={setSelectedColor} options={colors}/>
                  <OptionSelector placeholder={"Select material"} selected={selectedMaterial} setSelected={setSelectedMaterial} options={materials}/>
                  <InputSize modelRenderStatus={modelRenderStatus} modelVolume={modelVolume} setModelVolume={setModelVolume} /> 
                  <Alert variant="info">Estimated price: {setPrice(modelVolume)} €</Alert>
                  <div>
                    <Button onClick={() => goBack(false)} style={{float:"left"}} >← Back</Button>
                  </div>
                </>
                : 
                <>
                  <Alert>
                    To estimate the price of 3D-printing, load your model in .stl format, choose desired material and color.
                    Send request to order.
                  </Alert>
                  <Alert variant="warning">
                    Note that this calculator is based on theoretical values and gives only a rough approximation,
                    real deal might be higher or lower based on your needs ☺️
                  </Alert>
                </>
              }
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    </>
  );
}

export default App;
