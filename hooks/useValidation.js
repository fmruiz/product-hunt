import React, { useEffect, useState } from "react";

export const useValidation = (initialState, validate, fn) => {
  // initial data
  const [values, setValues] = useState(initialState);

  // errors
  const [error, setError] = useState({});
  
  // submit action
  const [submitForm, setSubmitForm] = useState(false);
  useEffect(() => {
    if (submitForm) {
      const noErrors = Object.keys(error).length === 0;
      if (noErrors) {
        fn(); // fn === fn of component
      }
      setSubmitForm(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if user typing
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  //if user submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setError(validationErrors);
    setSubmitForm(true);
  };

  return {
    values,
    error,
    submitForm,
    handleChange,
    handleSubmit,
  };
};
