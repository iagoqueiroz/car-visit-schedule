import React, { useState, createContext } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [form, setForm] = useState({
    step: 1,
    visit_date: "",
    visitant_name: "",
    visitant_email: "",
    visitant_phone: "",
  });

  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
