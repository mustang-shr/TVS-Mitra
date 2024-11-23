// src/components/Chatbot.js
import React, { useState } from 'react';
import SpeechRecognition from 'react-speech-recognition';
import gsap from 'gsap';


function Chatbot() {
  const [chatOpen, setChatOpen] = useState(false);
  const { transcript } = SpeechRecognition.useSpeechRecognition(); // Removed resetTranscript


  const startChat = () => {
    setChatOpen(true);
    SpeechRecognition.startListening({ continuous: true });
    gsap.from('.chat-interface', { opacity: 0, y: 50, duration: 1 });
  };


  const stopChat = () => {
    setChatOpen(false);
    SpeechRecognition.stopListening();
  };


  return (
    <div className="chatbot-container">
      {!chatOpen ? (
        <button onClick={startChat} className="chatbot-button">Talk to TVS Mitra</button>
      ) : (
        <div className="chat-interface">
          <p>{transcript}</p>
          <button onClick={stopChat} className="stop-chat">Stop</button>
        </div>
      )}
    </div>
  );
}


export default Chatbot;
