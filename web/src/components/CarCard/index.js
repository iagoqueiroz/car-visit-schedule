import React from "react";
import { MdLocationOn } from "react-icons/md";

import "./styles.css";

const CarCard = (props) => (
  <div className="card car-card">
    <div className="card-image">
      <img
        src="https://cdn-motorshow-ssl.akamaized.net/wp-content/uploads/sites/2/2020/04/26.jpg"
        alt="Fiat Argo"
      />
    </div>
    <div className="card-title">Fiat Argo</div>
    <div className="card-body">
      FLEX 1.0 8V MANUAL 4P
      <div className="price">R$ 13.000,00</div>
    </div>
    <div className="card-footer">
      <div className="location">
        <MdLocationOn />
        Fortaleza - CE
      </div>
    </div>
  </div>
);

export default CarCard;
