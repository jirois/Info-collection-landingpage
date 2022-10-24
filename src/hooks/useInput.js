import { useState } from "react";

const useInput = (validateValue) => {
  const [enterValue, setEnterValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enterValue);
  let hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnterValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnterValue("");
    setIsTouched(false);
  };

  return {
    value: enterValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
