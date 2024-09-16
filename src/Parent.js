// App.js or ParentComponent.js
import React, { useRef, useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import Form from "./Form";
import motorStart from "./audio/motor-start.mp3"; // Correct file import

const ParentComponent = () => {
  const [audio, setAudio] = useState(null);
  const formRef = useRef(null);

  // Initialize audio once when the component mounts
  useEffect(() => {
    const motorAudio = new Audio(motorStart);
    setAudio(motorAudio);
  }, []);

  const start = () => {
    if (audio) {
      audio
        .play()
        .catch((error) => console.error("Audio playback failed:", error));
    }
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <LandingPage onRegisterClick={start} />
      <Form ref={formRef} />
    </div>
  );
};

export default ParentComponent;
