import { useState, useEffect } from "react";

import motorStart from "./audio/motor-start.mp3"; // Correct file import

const LandingPage = () => {
    const [audio, setAudio] = useState(null);
    const [email, setEmail] = useState(null);
    // Initialize audio once when the component mounts
    useEffect(() => {
        const motorAudio = new Audio(motorStart);
        setAudio(motorAudio);
    }, []);

    const start = () => {
        if (audio) {
            audio
                .play()
                .catch((error) =>
                    console.error("Audio playback failed:", error)
                );
        }
    };

    return (
        <div className="landing">
            <div className="landing-text">
                <h1 className="hero glitch layers">Riding Moto</h1>
                <div>
                    The ultimate riding experience is just around the corner.
                    While we prepare to launch, stay connected and be part of
                    the journey. Register now and join the community!
                </div>
            </div>
            <div className="register-button" onClick={start}>
                Register
                <br />
                Now
            </div>
        </div>
    );
};

export default LandingPage;
