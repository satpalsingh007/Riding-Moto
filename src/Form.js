// Form.js
import React, { forwardRef } from "react";

const Form = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="form-component">
      <form className="form">
        <input type="email" placeholder="Enter your email" />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
      <div className="form-text">
        *You will receive updates on our website launch and the latest news as
        we continue to develop and enhance our offerings.
      </div>
    </div>
  );
});

export default Form;
