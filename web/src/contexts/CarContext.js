import React, { useState, useEffect, createContext } from "react";

import api from "../services/api";

export const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [car, setCar] = useState({});
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const { data: carData } = await api.get("/cars/1");
        setCar(carData);

        const { data: schedulesData } = await api.get("/cars/1/schedules");
        setSchedules(schedulesData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCar();
  }, []);

  return (
    <CarContext.Provider value={{ car, schedules }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarProvider;
