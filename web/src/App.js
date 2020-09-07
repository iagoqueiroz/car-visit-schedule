import React from "react";

import Header from "./components/Header";
import Content from "./components/Content";

import CarCard from "./components/CarCard";
import FirstStep from "./components/Steps/FirstStep";
import SecondStep from "./components/Steps/SecondStep";

import "./App.css";

const App = (props) => (
  <React.Fragment>
    <Header />

    <Content>
      <aside>
        <CarCard />
      </aside>
      <section>
        <FirstStep />
        <br />
        <br />
        <SecondStep />
      </section>
    </Content>
  </React.Fragment>
);

export default App;
