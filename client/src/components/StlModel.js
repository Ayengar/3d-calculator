import React, { useRef, useState, useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { getVolume, getSize } from "./CalculateVolume";

let volume;
let size;
let modelRenderStatus;

const StlModel = ({ modelPath, scale, position = [0, 0, 0], color, setModelRenderStatus }) => {
  const ref = useRef();
  const stl = useLoader(STLLoader, modelPath);

  volume = getVolume(stl)
  console.log(volume);
  
  size = getSize(stl);
  console.log(size);

  setModelRenderStatus(true);

  const [hovered, hover] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.003));

  return (
    
      <mesh ref={ref}>
        <primitive 
          object={stl}
          attach="geometry"
          position={position}
          scale={hovered ? scale * 1.2 : scale}
          onPointerOver={(event) => hover(true)}
          onPointerOut={(event) => hover(false)} 
        />
        <meshStandardMaterial color={color}/>
      </mesh>
    
  );
};

export default StlModel;
export {volume, size, modelRenderStatus};