import React, { useState, useContext } from "react";
import moment from "../../../utils/moment";
import api from "../../../services/api";

import { FormContext } from "../../../contexts/FormContext";

import Button from "../../Button";

const FirstStep = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { form, setForm, setStep } = useContext(FormContext);

  const hasEmptyFields = !name || !email || !phone;

  function updateForm(e) {
    e.preventDefault();

    const newForm = {
      ...form,
      visitant_name: name,
      visitant_email: email,
      visitant_phone: phone,
    };

    setForm(newForm);

    sendSchedule(newForm);
  }

  async function sendSchedule(form) {
    try {
      await api.post("/cars/1/schedules", form);

      setStep(3);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="card card-content">
      <div className="card-title">Agende o dia e horário da sua visita</div>
      <div className="card-body">
        <div className="card-subtitle">
          {moment(form.visit_date).format("dddd, DD [de] MMMM [às] HH [horas]")}
        </div>
        <div className="form">
          <div className="input-group">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="input-group" style={{ width: "48%" }}>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group" style={{ width: "48%" }}>
              <label htmlFor="phone">Telefone</label>
              <input
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="card-button">
          <Button onClick={updateForm} disabled={hasEmptyFields}>
            Concluir
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
