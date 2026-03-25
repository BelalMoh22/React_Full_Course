/* eslint-disable prefer-const */
import { createContext } from "react";

// 1. Create a context
let loanInputs = {
  label: "",
  id: "",
  type: "",
  placeholder: "",
  value: "",
  handleChange: null,
};

export let LoanInputContext = createContext(loanInputs);
