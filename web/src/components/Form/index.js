import React, { useContext } from "react";

import { FormContext } from "../../contexts/FormContext";

import FirstStep from "../Steps/FirstStep";
import SecondStep from "../Steps/SecondStep";
import FinalStep from "../Steps/FinalStep";

const Form = (props) => {
  const { step } = useContext(FormContext);

  return (
    <React.Fragment>
      {step === 1 && <FirstStep />}
      {step === 2 && <SecondStep />}
      {step === 3 && <FinalStep />}
    </React.Fragment>
  );
};

export default Form;
