import React from "react";

import moment from "../../../utils/moment";

import DaysList from "../../DaysList";
import HoursList from "../../HoursList";
import Button from "../../Button";

const FirstStep = (props) => {
  return (
    <div className="card card-content">
      <div className="card-title">Agende o dia e horário da sua visita</div>
      <div className="card-body">
        <div className="card-subtitle">{moment().format("MMMM [de] YYYY")}</div>
        <DaysList onSelectDate={(date) => console.log(date)} />
        <HoursList onSelectHour={(hour) => console.log(hour)} />
        <div className="card-button">
          <Button>Agendar Visita</Button>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
