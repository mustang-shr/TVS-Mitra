// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Animation from './components/Animation';
import MainInterface from './components/MainInterface';
import Chatbot from './components/Chatbot';
import ModelWithChatbot from './components/ModelWithChatbot';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Animation />} />
        <Route path="/main" element={<MainInterface />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/ModelWithChatbot" element={<ModelWithChatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
