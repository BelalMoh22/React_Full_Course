import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import { useState, useReducer } from "react";
import todos from "./data/todo";
import { TodosContext } from "./contexts/TodosContext";
import { ToastProvider } from "./Providers/ToastProvider";
import { resultReducer } from "./Reducers/resultReducer";
//import { SnackbarProvider } from "notistack";

function App() {
  const [todosList, setTodosList] = useState(todos);

  // with UseReducer
  const [newResult, dispatch] = useReducer(resultReducer, 0); // two parameters where the first one is the reducer function that use to handle the actions of the state  and the second one is the initial state

  // Without UseReducer
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  // const [result, setResult] = useState(0);

  const handleAdd = () => {
    // without useReducer
    //setResult(firstNumber + secondNumber);

    // with useReducer
    dispatch({
      type: "add", // type : the type of the action
      payload: { firstNum: firstNumber, secondNum: secondNumber }, // payload : additional data that we want to send with the action
    });
  };

  const handleSubtract = () => {
    // without useReducer
    //setResult(firstNumber - secondNumber);

    // with useReducer
    dispatch({
      type: "subtract",
      payload: { firstNum: firstNumber, secondNum: secondNumber },
    });
  };

  const handleMultiply = () => {
    // without useReducer
    //setResult(firstNumber * secondNumber);

    // with useReducer
    dispatch({
      type: "multiply",
      payload: { firstNum: firstNumber, secondNum: secondNumber },
    });
  };

  const handleDivide = () => {
    // without useReducer
    //setResult(firstNumber / secondNumber);

    // with useReducer
    dispatch({
      type: "divide",
      payload: { firstNum: firstNumber, secondNum: secondNumber },
    });
  };
  return (
    <>
      <div className="App">
        <ToastProvider>
          {/* <SnackbarProvider maxSnack={3}> */}
          <TodosContext.Provider value={[{ todosList, setTodosList }]}>
            <ToDoList />
          </TodosContext.Provider>
          {/* </SnackbarProvider> */}
        </ToastProvider>
      </div>
      <hr /> <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightblue",
        }}
      >
        {/* UseReducer */}
        <label htmlFor="fNum">First Number</label>
        <input
          type="number"
          id="fNum"
          onChange={(e) => setFirstNumber(parseInt(e.target.value))}
          value={firstNumber}
        />

        <label htmlFor="sNum">Second Number</label>
        <input
          type="number"
          id="sNum"
          onChange={(e) => setSecondNumber(parseInt(e.target.value))}
          value={secondNumber}
        />
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>
        {/* <p>{result}</p> */}
        <h3>{newResult}</h3>
      </div>
    </>
  );
}

export default App;
