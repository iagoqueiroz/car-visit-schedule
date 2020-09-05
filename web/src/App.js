import React from "react";

import CarCard from "./components/CarCard";

import "./App.css";

const App = (props) => (
  <React.Fragment>
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

    <main id="main-content" className="container">
      <aside>
        <CarCard />
      </aside>
      <section>Content</section>
    </main>
  </React.Fragment>
);

export default App;
