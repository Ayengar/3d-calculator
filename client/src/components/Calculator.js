import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import OptionSelector from "./OptionSelector";
import UploadFile from "./UploadFile";
import ModelViewer from "./ModelViewer";
import InputSize from "./InputSize";

const Calculator = () =>{
  const [uploadStatus, setUploadStatus] = useState(false);
  const [modelRenderStatus, setModelRenderStatus] = useState(false);
  const [modelPath, setModelPath] = useState(''); 
  const [modelVolume, setModelVolume] = useState('');
  const [selectedColor, setSelectedColor] = useState('gray');
  const [selectedMaterial, setSelectedMaterial] = useState('');

  
  const colors = [
    { value: "red", label: "Red" },
    { value: "orange", label:"Orange"},
    { value: "yellow", label: "Yellow" },
    { value: "green", label:"Green"},
    { value: "blue", label: "Blue" },
    { value: "indigo", label:"Indigo"},
    { value: "violet", label:"Violet"},
    { value: "gray", label:"Gray"},
    { value: "#564742", label:"Brown"},
    { value: "Black", label:"Black"},
    { value: "White", label:"White"},
  ];

  const materials = [
    {value: "PLA", label: "PLA"},
    {value: "ABS", label: "ABS"},
    {value: "PETG", label: "PETG"},
    {value: "HIPS", label:"HIPS"},
    {value: "FLEX", label:"FLEX"},    
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
                  {((modelVolume > 0) && (modelVolume < 125000)) ? <Alert variant="info">Estimated price: {setPrice(modelVolume)} €</Alert> : <Alert variant="danger">Can't be printed. Mesh error or too big!</Alert>}
                  <Button onClick={() => goBack(false)} style={{float:"left"}} >← Back</Button>   
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

export default Calculator;