import React from "react";

import "./styles.css";

const Button = ({ disabled = false, ...props }) => (
  <React.Fragment>
    <button type="button" disabled={disabled} className="btn" {...props}>
      {props.children}
    </button>
  </React.Fragment>
);

export default Button;
