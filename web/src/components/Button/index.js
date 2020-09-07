import React from "react";

import "./styles.css";

const Button = (props) => (
  <React.Fragment>
    <a className="btn" {...props}>
      {props.children}
    </a>
  </React.Fragment>
);

export default Button;
