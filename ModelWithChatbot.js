// src/components/ModelWithChatbot.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import ThreeDModel from './ThreeDModel';
import Chatbot from './Chatbot';

function ModelWithChatbot() {
    return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <Canvas>
        <ThreeDModel />
      </Canvas>
      <Chatbot />
    </div>
  );
}

export default ModelWithChatbot;