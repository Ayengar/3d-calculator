import React, { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { getVolume, getSize, rotateObject } from "./CalculateVolume";

let volume;
let size;
let modelRenderStatus;

const StlModel = ({ modelPath, scale, position = [0, 0, 0], color, setModelRenderStatus }) => {
  const ref = useRef();
  const stl = useLoader(STLLoader, modelPath);

  useEffect(() => {
    volume = getVolume(stl);
    size = getSize(stl);
    setModelRenderStatus(true);
    rotateObject(stl, -90, 0, 0);
  }, []);
  

  return (
    
  <mesh
    ref={ref}
    geometry={stl}
    position={position}>
    <meshStandardMaterial color={color}/>
  </mesh>
    
  );
};

export default StlModel;
export {volume, size, modelRenderStatus};