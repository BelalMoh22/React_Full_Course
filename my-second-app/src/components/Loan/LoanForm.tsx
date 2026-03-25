import "./Loan.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import MyComponent from "../MyInputs/MyComponent";
import { LoanInputContext } from "../../contexts/LoanFormInputContext";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function LoanForm({ title }) {
  const inputs = {
    name: "",
    phone: "",
    age: "",
    employee: false,
    salary: "",
  };

  const [loanInputs, setLoanInputs] = useState(inputs);
  const isDisabled =
    loanInputs.name.trim() === "" ||
    loanInputs.phone.trim() === "" ||
    loanInputs.age.trim() === "" ||
    loanInputs.salary.trim() === "";

  const [showModal, setShowModal] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
    setErrorMsg(null);
    if (Number(loanInputs.age) < 18 || Number(loanInputs.age) > 65) {
      setErrorMsg("You are not eligible for a loan");
    } else if (!Number(loanInputs.age)) {
      setErrorMsg("Please Enter your age correctly as a number");
    } else if (loanInputs.phone.length < 10 || !Number(loanInputs.phone)) {
      setErrorMsg("Please Enter your phone number(10 digits) correctly");
    }
    setShowModal(true);
  }

  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }

  const [errorMsg, setErrorMsg] = useState(null);

  function handlePhoneNoChange(value) {
    setLoanInputs({ ...loanInputs, phone: value });
  }

  function handleAgeChange(value) {
    setLoanInputs({ ...loanInputs, age: value });
  }

  function handleNameChange(value) {
    setLoanInputs({ ...loanInputs, name: value });
  }

  function handleEmployeeChange(value) {
    if (value === "on") {
      setLoanInputs({ ...loanInputs, employee: true });
    } else {
      setLoanInputs({ ...loanInputs, employee: false });
    }
  }

  const userData = useContext(UserContext);

  //title = "Hello World";
  return (
    <div className="flex" onClick={handleDivClick}>
       {/* Using (useContext) to share data from App to Children */}
      <h1 style={{ color: "red" }}>Hello {userData.username}</h1>
      <form action="" className="loan-form">
        <h1>{title}</h1>
        <span className="line"></span>

        {/* <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          value={loanInputs.name}
          onChange={(e) => {
            title = e.target.value; // here props or state cannot edit on them
            setLoanInputs({ ...loanInputs, name: e.target.value });
          }}
        /> */}

        {/* <MyComponent
          label="Name"
          id="name"
          placeholder="Enter Your Name"
          type="text"
          value={loanInputs.name}
          handleChange={handleNameChange}
        /> */}

        {/* By useContext Hook : Provider */}
        <LoanInputContext.Provider
          value={{
            label: "Name",
            id: "name",
            type: "text",
            placeholder: "Enter Your Name",
            value: loanInputs.name,
            handleChange: handleNameChange,
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        {/* <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter Your Phone Number"
          value={loanInputs.phone}
          onChange={(e) => {
            setLoanInputs({ ...loanInputs, phone: e.target.value });
          }}
        /> */}

        {/* <MyComponent
          label="Phone Number"
          id="phone"
          placeholder="Enter Your Phone Number"
          type="text"
          value={loanInputs.phone}
          handleChange={handlePhoneNoChange}
        /> */}

        {/* By useContext Hook : Provider */}
        <LoanInputContext.Provider
          value={{
            label: "Phone Number",
            id: "phone",
            type: "text",
            placeholder: "Enter Your Phone Number",
            value: loanInputs.phone,
            handleChange: handlePhoneNoChange,
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        {/* <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          id="age"
          placeholder="Enter Your Age"
          value={loanInputs.age}
          onChange={(e) =>
            setLoanInputs({ ...loanInputs, age: e.target.value })
          }
        /> */}

        {/* <MyComponent
          label="Age"
          id="age"
          placeholder="Enter Your Age"
          type="text"
          value={loanInputs.age}
          handleChange={handleAgeChange}
        /> */}

        {/* By useContext Hook : Provider */}
        <LoanInputContext.Provider
          value={{
            label: "Age",
            id: "age",
            type: "text",
            placeholder: "Enter Your Age",
            value: loanInputs.age,
            handleChange: handleAgeChange,
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        {/* <label htmlFor="question">Are You an Employee?</label>
        <input
          type="checkbox"
          name="employee"
          id="question"
          onChange={(e) => {
            if (e.target.value === "on") {
              setLoanInputs({ ...loanInputs, employee: true });
            } else {
              setLoanInputs({ ...loanInputs, employee: false });
            }
          }}
        /> */}

        {/* <MyComponent
          label="Are You an Employee?"
          id="question"
          type="checkbox"
          handleChange={handleEmployeeChange}
        /> */}

        {/* By useContext Hook : Provider */}
        <LoanInputContext.Provider
          value={{
            label: "Are You an Employee?",
            id: "question",
            type: "checkbox",
            placeholder: null,
            value: null,
            handleChange: handleEmployeeChange,
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        <label htmlFor="salary">Salary</label>
        <select
          name="salary"
          id="salary"
          value={loanInputs.salary}
          onChange={(e) =>
            setLoanInputs({ ...loanInputs, salary: e.target.value })
          }
        >
          <option hidden>Salary Range</option>
          <option>less than 500$</option>
          <option>between 500$ and 1000$</option>
          <option>more than 1000$</option>
        </select>

        <button
          type="submit"
          id="loan-btn"
          disabled={isDisabled}
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
      <Modal isVisible={showModal} errorMsg={errorMsg} />
    </div>
  );
  {
    /* Imperative Programming and Declarative Programming => Explain them*/
  }
}

export default LoanForm;
