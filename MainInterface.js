// src/components/MainInterface.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import ThreeDModel from './ThreeDModel';


function MainInterface() {
  return (
    <div>
      <Canvas style={{ width: '100%', height: '600px' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ThreeDModel />
      </Canvas>
    </div>
  );
}


export default MainInterface;