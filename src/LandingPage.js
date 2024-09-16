// LandingPage.js
import React from "react";

const LandingPage = ({ onRegisterClick }) => {
  return (
    <div className="landing">
      <div className="landing-text">
        <h1 className="glitch" title="RidingMoto">
          RidingMoto
        </h1>
        <div>
          The ultimate riding experience is just around the corner. While we
          prepare to launch, stay connected and be part of the journey. Register
          now and join the community!
        </div>
      </div>
      <div className="register-button" onClick={onRegisterClick}>
        Register
        <br />
        Now
      </div>
    </div>
  );
};

export default LandingPage;
