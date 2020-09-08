import React, { useState, useEffect } from "react";
import { MdLocationOn } from "react-icons/md";

import api from "../../services/api";

import "./styles.css";

const CarCard = (props) => {
  const [car, setCar] = useState({});

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const { data } = await api.get("/cars/1");

        setCar(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCar();
  }, []);

  return (
    <div className="card car-card">
      <div className="card-image">
        <img
          src="https://cdn-motorshow-ssl.akamaized.net/wp-content/uploads/sites/2/2020/04/26.jpg"
          alt={`${car.company} ${car.model}`}
        />
      </div>
      <div className="card-title">
        {car.company} {car.model}
      </div>
      <div className="card-body">
        {car.description}
        <div className="price">
          {Number(car.price).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      </div>
      <div className="card-footer">
        <div className="location">
          <MdLocationOn />
          Fortaleza - CE
        </div>
      </div>
    </div>
  );
};

export default CarCard;
