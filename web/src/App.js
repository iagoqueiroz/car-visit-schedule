import React from "react";

import Header from "./components/Header";
import Content from "./components/Content";

import CarProvider from "./contexts/CarContext";
import FormProvider from "./contexts/FormContext";

import CarCard from "./components/CarCard";
import Form from "./components/Form";

import "./App.css";

const App = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Content>
        <CarProvider>
          <aside>
            <CarCard />
          </aside>
          <section>
            <FormProvider>
              <Form />
            </FormProvider>
          </section>
        </CarProvider>
      </Content>
    </React.Fragment>
  );
};

export default App;
