import React, { useState, createContext } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    visit_date: "",
    visitant_name: "",
    visitant_email: "",
    visitant_phone: "",
  });

  return (
    <FormContext.Provider value={{ form, setForm, step, setStep }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
