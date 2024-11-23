// src/components/ThreeDModel.js
import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';

function ThreeDModel() {
  const gltf = useLoader(GLTFLoader, '/assets/models/tvs_apache_rtr_180.gltf/scene.gltf');

  return (
    <>
      {/* Model with adjusted scale for visibility */}
      <primitive object={gltf.scene} scale={0.5} />

      {/* Lights to improve model appearance */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Camera controls for interaction */}
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
    </>
  );
}

export default ThreeDModel;