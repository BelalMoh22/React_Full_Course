import { useContext } from "react";
import { LoanInputContext } from "../../contexts/LoanFormInputContext";
/* 
useContext Hook : Consumer
*/
export default function MyInput() {
  const inputContext = useContext(LoanInputContext);

  console.log(inputContext);
  return (
    <>
      <label htmlFor={inputContext.id}>{inputContext.label}</label>
      <input
        type={inputContext.type}
        name={inputContext.id}
        id={inputContext.id}
        placeholder={inputContext.placeholder}
        value={inputContext.value}
        onChange={(e) => {
          inputContext.handleChange(e.target.value);
          //props.handleChange({ ...props.currentInputs, phone: e.target.value });
          //setLoanInputs({ ...loanInputs, phone: e.target.value });
        }}
      />
    </>
  );
}
