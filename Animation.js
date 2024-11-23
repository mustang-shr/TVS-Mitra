// src/components/Animation.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Animation() {
  const [animationEnded, setAnimationEnded] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    // Delay the navigation for 5 seconds after the video starts playing
    const timeout = setTimeout(() => {
      setAnimationEnded(true);
    }, 23000); // Adjust the delay as needed (5000ms = 5 seconds)
   
    return () => clearTimeout(timeout); // Clean up the timeout when the component unmounts
  }, []);


  useEffect(() => {
    if (animationEnded) {
      setTimeout(() => {
        navigate('/main');
      }, 2000); // Wait 2 seconds after setting animationEnded to true
    }
  }, [animationEnded, navigate]);


  return (
    <div className="animation-container">
      <iframe
        width="100%"
        height="100%"
        src="https://drive.google.com/file/d/1BjGPOjAhaa-cZqh8rHVCdpQC01kiV7-t/preview"
         allow="autoplay"
        frameBorder="0"
        allowFullScreen
        title="TVS Mitra Intro Animation"
      />
    </div>
  );
}


export default Animation;