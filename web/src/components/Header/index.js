import React from "react";

import "./styles.css";

const Header = (props) => (
  <header id="main-header">
    <section className="container">
      <div className="header-logo">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/565/570/non_2x/car-line-symbol-and-logo-vector.jpg"
          alt="Car Logo"
        />
      </div>

      <nav id="header-menu">
        <ul>
          <li>
            <a href="/">Vender</a>
          </li>
          <li>
            <a href="/">Comprar</a>
          </li>
          <li>
            <a href="/">Lojas</a>
          </li>
        </ul>
      </nav>
    </section>
  </header>
);

export default Header;
