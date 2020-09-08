import React, { useState, useContext } from "react";

import moment from "../../../utils/moment";

import { FormContext } from "../../../contexts/FormContext";

import DaysList from "../../DaysList";
import HoursList from "../../HoursList";
import Button from "../../Button";

const FirstStep = (props) => {
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  const { form, setForm, setStep } = useContext(FormContext);

  function nextStep(e) {
    e.preventDefault();

    setForm({
      ...form,
      visit_date: `${date} ${hour}`,
    });

    setStep(2);
  }

  return (
    <div className="card card-content">
      <div className="card-title">Agende o dia e horário da sua visita</div>
      <div className="card-body">
        <div className="card-subtitle">{moment().format("MMMM [de] YYYY")}</div>
        <DaysList onSelectDate={(date) => setDate(date)} />
        <HoursList onSelectHour={(hour) => setHour(hour)} />
        <div className="card-button">
          <Button onClick={nextStep} disabled={!date || !hour}>
            Agendar Visita
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
