import {useState, useEffect} from 'react'
import { volume, size } from "./StlModel"

const InputSize = ({ modelRenderStatus }) =>{

    const [sizeX, setSizeX] = useState('');
    const [sizeY, setSizeY] = useState('');
    const [sizeZ, setSizeZ] = useState('');

    useEffect(() =>{
        if (modelRenderStatus === true){
          setSizeX((size.x).toString());
          setSizeY((size.y).toString());
          setSizeZ((size.z).toString());
        }
      }, []);

    function handleChangeX(e){
        setSizeX(e.target.value);
        let sizeY = (size.y/size.x)*Number(e.target.value)
        setSizeY(sizeY.toString());
        let sizeZ = (size.z/size.x)*Number(e.target.value)
        setSizeZ(sizeZ.toString());
    }

    function handleChangeY(e){
        setSizeY(e.target.value);
        let sizeX = (size.x/size.y)*Number(e.target.value)
        setSizeX(sizeX.toString());
        let sizeZ = (size.z/size.y)*Number(e.target.value)
        setSizeZ(sizeZ.toString());
    }

    function handleChangeZ(e){
        setSizeZ(e.target.value);
        let sizeY = (size.y/size.z)*Number(e.target.value)
        setSizeY(sizeY.toString());
        let sizeX = (size.x/size.z)*Number(e.target.value)
        setSizeX(sizeX.toString());
    }

    return(
        <>
        <input type="text" value={sizeX} onChange={handleChangeX}></input>
        <input type="text" value={sizeY} onChange={handleChangeY}></input>
        <input type="text" value={sizeZ} onChange={handleChangeZ}></input>
        </>
    )
}

export default InputSize;