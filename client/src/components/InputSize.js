import Alert from 'react-bootstrap/Alert';
import {useState, useEffect} from 'react'
import { volume, size } from "./StlModel"

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/esm/Button';

const InputSize = ({ modelRenderStatus, modelVolume, setModelVolume }) =>{

    let mmSizeX = size.x*1000;
    let mmSizeY = size.y*1000;
    let mmSizeZ = size.z*1000;
    let cmVolume = volume*1000000;

    function roundit(num){
        let rounded = Math.round((num + Number.EPSILON) * 100) / 100;
        return rounded;
    }

    function getOrderOfMagnitude(n) {
        var order = Math.floor(Math.log(n) / Math.LN10
                           + 0.000000001); // because float math sucks like that
        return Math.pow(10,order);
    }

    const [sizeX, setSizeX] = useState('');
    const [sizeY, setSizeY] = useState('');
    const [sizeZ, setSizeZ] = useState('');

    useEffect(() =>{
        if (modelRenderStatus === true){
            if (mmSizeX > 500 || mmSizeY > 500 || mmSizeZ > 500) {
                    let coeff = (getOrderOfMagnitude(mmSizeX)/10);
                    setSizeX(roundit(mmSizeX / coeff));
                    setSizeY(roundit(mmSizeY / coeff));
                    setSizeZ(roundit(mmSizeZ / coeff)); 
                    setModelVolume(roundit(cmVolume/(coeff)**3));
                 
            } else{ 
                    setSizeX(roundit(mmSizeX));
                    setSizeY(roundit(mmSizeY));
                    setSizeZ(roundit(mmSizeZ));
                    setModelVolume(roundit(cmVolume));
                }
         
        }
      }, []);

    function reset(){
        setSizeX(roundit(mmSizeX));
        setSizeY(roundit(mmSizeY));
        setSizeZ(roundit(mmSizeZ));
        setModelVolume(roundit(cmVolume));
    }  

    function handleChangeX(e){
        setSizeX(e.target.value);
        let sizeY = (mmSizeY/mmSizeX)*(e.target.value)
        setSizeY(roundit(sizeY));
        let sizeZ = (mmSizeZ/mmSizeX)*(e.target.value)
        setSizeZ(roundit(sizeZ));
        setModelVolume(roundit((e.target.value/mmSizeX)**3*cmVolume));
    }

    function handleChangeY(e){
        setSizeY(e.target.value);
        let sizeX = (mmSizeX/mmSizeY)*(e.target.value)
        setSizeX(roundit(sizeX));
        let sizeZ = (mmSizeZ/mmSizeY)*(e.target.value)
        setSizeZ(roundit(sizeZ));
        setModelVolume(roundit((e.target.value/mmSizeY)**3*cmVolume));
    }

    function handleChangeZ(e){
        setSizeZ(e.target.value);
        let sizeY = (mmSizeY/mmSizeZ)*(e.target.value)
        setSizeY(roundit(sizeY));
        let sizeX = (mmSizeX/mmSizeZ)*(e.target.value)
        setSizeX(roundit(sizeX));
        setModelVolume(roundit((e.target.value/mmSizeZ)**3*cmVolume));
    }

    return(
        <>
        <Alert className="mt-3">
            <Alert.Heading>Model dimensions: 
                <Button onClick={() => reset()} style={{float:"right", fontSize:"16px"}}>⟳</Button>
            </Alert.Heading>
            <hr />
            <div className="Dimensions-Container">
                <InputGroup className="mb-3" >
                    <InputGroup.Text style={{background: "#d13030", opacity:"80%"}}>X</InputGroup.Text>
                    <Form.Control type="number" value={sizeX} onChange={handleChangeX} style={{minWidth:"50px", fontSize:"small"}} />
                    <InputGroup.Text>mm</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text  style={{background: "#1c60d3", opacity:"80%"}}>Y</InputGroup.Text>
                    <Form.Control type="number" value={sizeY} onChange={handleChangeY} style={{minWidth:"50px", fontSize:"small"}} />
                    <InputGroup.Text>mm</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text style={{background: "#4ba669", opacity:"80%"}}>Z</InputGroup.Text>
                    <Form.Control type="number" value={sizeZ} onChange={handleChangeZ} style={{minWidth:"50px", fontSize:"small"}} />
                    <InputGroup.Text>mm</InputGroup.Text>
                </InputGroup>
            </div>
        </Alert>
        <Alert>Model volume: {roundit(modelVolume)} cm³</Alert>
        </>
    )
}

export default InputSize;