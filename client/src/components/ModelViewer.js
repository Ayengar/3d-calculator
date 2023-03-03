import React, {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import StlModel from "./StlModel";

const ModelViewer = ({ modelPath, scale, position = [0, 0, 0], color, setModelRenderStatus }) => {

  return (
   
      <Canvas camera={{ position: [0, 0.5, 8], fov: 50 }} style={{background:'white'}}>
        <Stage
          intensity={0.5}
          preset="rembrandt"
          adjustCamera={2}>
          <StlModel modelPath={modelPath} position={position} color={color} setModelRenderStatus={setModelRenderStatus} />
        </Stage>
        <OrbitControls makeDefault />
        <axesHelper args={[50]} />
      </Canvas>
   
  );
};

export default ModelViewer;