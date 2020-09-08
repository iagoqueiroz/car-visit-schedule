import React, { useContext } from "react";
import { MdLocationOn } from "react-icons/md";

import { CarContext } from "../../contexts/CarContext";

import "./styles.css";

const CarCard = (props) => {
  const { car } = useContext(CarContext);

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
