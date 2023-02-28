import React, {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import StlModel from "./StlModel";

const ModelViewer = ({ modelPath, scale, position = [0, 0, 0], color, setModelRenderStatus }) => {

  return (
    <Canvas style={{ background: "white" }} >
    <ambientLight intensity={0.3} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <pointLight position={[-10, -10, -10]} />
    <Suspense fallback={null}>
      <StlModel modelPath={modelPath} scale={scale} position={position} color={color} setModelRenderStatus={setModelRenderStatus} />
      <OrbitControls />
    </Suspense>
  </Canvas>
  );
};

export default ModelViewer;