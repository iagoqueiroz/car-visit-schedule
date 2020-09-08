import React, { useContext } from "react";

import { FormContext } from "../../contexts/FormContext";

import FirstStep from "../Steps/FirstStep";
import SecondStep from "../Steps/SecondStep";

const Form = (props) => {
  const context = useContext(FormContext);

  return (
    <React.Fragment>
      {context.form.step === 1 && <FirstStep />}
      {context.form.step === 2 && <SecondStep />}
    </React.Fragment>
  );
};

export default Form;
