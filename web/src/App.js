import React from "react";

import CarCard from "./components/CarCard";
import Button from "./components/Button";

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
      <section>
        <div className="card card-content">
          <div className="card-title">Agende o dia e horário da sua visita</div>
          <div className="card-body">
            <div className="card-subtitle">Março 2020</div>
            <div className="days-list">
              <div className="day-group">
                <div className="week_day">SEG</div>
                <div className="day_number">22</div>
              </div>
              <div className="day-group active">
                <div className="week_day">TER</div>
                <div className="day_number">23</div>
              </div>
              <div className="day-group">
                <div className="week_day">QUA</div>
                <div className="day_number">24</div>
              </div>
              <div className="day-group">
                <div className="week_day">QUI</div>
                <div className="day_number">25</div>
              </div>
              <div className="day-group">
                <div className="week_day">SEX</div>
                <div className="day_number">26</div>
              </div>
              <div className="day-group">
                <div className="week_day">SAB</div>
                <div className="day_number">27</div>
              </div>
              <div className="day-group">
                <div className="week_day">DOM</div>
                <div className="day_number">28</div>
              </div>
            </div>
            <div className="hour-list">
              <div className="hour-item">09:00</div>
              <div className="hour-item">10:00</div>
              <div className="hour-item">11:00</div>
              <div className="hour-item active">14:00</div>
              <div className="hour-item">15:00</div>
              <div className="hour-item">16:00</div>
              <div className="hour-item">17:00</div>
            </div>
            <div className="card-button">
              <Button>Agendar Visita</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </React.Fragment>
);

export default App;
