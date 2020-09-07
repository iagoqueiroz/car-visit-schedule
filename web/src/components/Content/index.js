import React from "react";

import "./styles.css";

const Content = ({ children }) => (
  <main id="main-content" className="container">
    {children}
  </main>
);

export default Content;
