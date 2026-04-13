import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import { useState } from "react";
import todos from "./data/todo";
import { TodosContext } from "./contexts/TodosContext";
import MySnackbar from "./components/Snackbar/MySnackbar";
import { ToastContext } from "./contexts/ToastContext";
//import { SnackbarProvider } from "notistack";

function App() {
  const [todosList, setTodosList] = useState(todos);

  // ======================snackbar========================
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  function showHideToast(message) {
    setOpen(true);
    setMessage(message);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }
  // ======================snackbar========================
  return (
    <>
      <div className="App">
        <ToastContext.Provider value={{  showHideToast }}>
          {/* <SnackbarProvider maxSnack={3}> */}
          <TodosContext.Provider value={[{ todosList, setTodosList }]}>
            <ToDoList />
            <MySnackbar open={open} message={message} />
          </TodosContext.Provider>
          {/* </SnackbarProvider> */}
        </ToastContext.Provider>
      </div>
    </>
  );
}

export default App;
