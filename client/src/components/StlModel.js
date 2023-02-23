import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const StlModel = ({ modelPath, scale, position = [0, 0, 0] }) => {
  const ref = useRef();
  const stl = useLoader(STLLoader, modelPath);
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
        <meshStandardMaterial color={"orange"}/>
      </mesh>
    
  );
};

export default StlModel;