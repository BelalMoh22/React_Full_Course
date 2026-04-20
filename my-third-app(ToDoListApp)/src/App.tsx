import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import { useState } from "react";
import todos from "./data/todo";
import { TodosContext } from "./contexts/TodosContext";
import { ToastProvider } from "./Providers/ToastProvider";
//import { SnackbarProvider } from "notistack";

function App() {
  const [todosList, setTodosList] = useState(todos);
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
    </>
  );
}

export default App;
