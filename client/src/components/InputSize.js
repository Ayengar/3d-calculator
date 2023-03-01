import Alert from 'react-bootstrap/Alert';
import {useState, useEffect} from 'react'
import { volume, size } from "./StlModel"

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/esm/Button';

const InputSize = ({ modelRenderStatus }) =>{

    console.log("you touched inputSize");

    let mmSizeX = size.x*1000;
    let mmSizeY = size.y*1000;
    let mmSizeZ = size.z*1000;
    let cmVolume = volume*1000000;

    function roundit(num){
        let rounded = Math.round((num + Number.EPSILON) * 100) / 100;
        return rounded;
    }

    const [sizeX, setSizeX] = useState('');
    const [sizeY, setSizeY] = useState('');
    const [sizeZ, setSizeZ] = useState('');
    const [modelVolume, setModelVolume] = useState('');

    useEffect(() =>{
        if (modelRenderStatus === true){
          setSizeX(roundit(mmSizeX));
          setSizeY(roundit(mmSizeY));
          setSizeZ(roundit(mmSizeZ));
          setModelVolume(roundit(cmVolume));
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
            <div className='dimensionsContainer'>
                <InputGroup className="mb-3">
                    <InputGroup.Text>X</InputGroup.Text>
                    <Form.Control type="number" value={sizeX} onChange={handleChangeX} />
                    <InputGroup.Text>mm</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Y</InputGroup.Text>
                    <Form.Control type="number" value={sizeY} onChange={handleChangeY} />
                    <InputGroup.Text>mm</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Z</InputGroup.Text>
                    <Form.Control type="number" value={sizeZ} onChange={handleChangeZ} />
                    <InputGroup.Text>mm</InputGroup.Text>
                </InputGroup>
            </div>
        </Alert>
        <Alert>Model volume: {roundit(modelVolume)} cm³</Alert>
        <Alert>Estimated price: {roundit(0.076*modelVolume)} €</Alert>
        </>
    )
}

export default InputSize;