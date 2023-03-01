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

  function goBack(condition){
    setUploadStatus(condition);
    setModelRenderStatus(condition);
  }

  function requestPrint(){
    alert('request sent!');
  }


  return (
    <>
    <Navigation />
    <br/>
    <Card style={{margin:"auto", width:"80%", background:"black"}}>
      <Card.Body>
        <Row>
          <Col>
              {(!uploadStatus) ? 
              <UploadFile setUploadStatus={setUploadStatus} setModelPath={setModelPath}/> 
              : 
              <ModelViewer modelPath={modelPath} color={selectedColor.value} setModelRenderStatus={setModelRenderStatus} />
              }
          </Col>
          <Col lg={true}>
            <Card className="options-Card">
              <Card.Body>
              {(modelRenderStatus === true) ? 
                <>
                  <OptionSelector placeholder={"Select color"} selected={selectedColor} setSelected={setSelectedColor} options={colors}/>
                  <OptionSelector placeholder={"Select material"} selected={selectedMaterial} setSelected={setSelectedMaterial} options={materials}/>
                  <InputSize modelRenderStatus={modelRenderStatus}/> 
                  <div>
                  <Button onClick={() => goBack(false)} style={{float:"left"}}>← Back</Button>
                  <Button onClick={() =>  requestPrint()} style={{float:"right"}}>Send request</Button>
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