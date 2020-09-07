import React from "react";

import Button from "../../Button";

const FirstStep = (props) => {
  return (
    <div className="card card-content">
      <div className="card-title">Agende o dia e horário da sua visita</div>
      <div className="card-body">
        <div className="card-subtitle">Terça, 23 de Março, 14 horas</div>
        <div className="form">
          <div className="input-group">
            <label htmlFor="name">Nome</label>
            <input type="text" />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="input-group" style={{ width: "48%" }}>
              <label htmlFor="name">E-mail</label>
              <input type="text" />
            </div>
            <div className="input-group" style={{ width: "48%" }}>
              <label htmlFor="name">Telefone</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="card-button">
          <Button>Concluir</Button>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
