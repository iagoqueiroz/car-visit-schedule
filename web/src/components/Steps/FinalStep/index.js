import React, { useContext } from "react";
import moment from "../../../utils/moment";
import { MdCheck, MdDateRange, MdLocationOn } from "react-icons/md";

import { FormContext } from "../../../contexts/FormContext";

import Button from "../../Button";

import "./styles.css";

const FinalStep = (props) => {
  const { form } = useContext(FormContext);

  return (
    <div className="card final-step">
      <div className="card-body">
        <div className="icon">
          <MdCheck />
        </div>
        <h3>Agendamento Concluído!</h3>
        <p>
          <MdDateRange />
          {moment(form.visit_date).format("dddd, DD [de] MMMM [às] HH:mm")}
          {" | "}
          <MdLocationOn /> Avenida Bandeirantes, 1100 - Mogi das Cruzes
        </p>
        <Button style={{ marginTop: "15px" }}>Outros Veículos</Button>
      </div>
    </div>
  );
};

export default FinalStep;
