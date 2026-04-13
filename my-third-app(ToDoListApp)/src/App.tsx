import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import { useState } from "react";
import todos from "./data/todo";
import { TodosContext } from "./contexts/TodosContext";
import { SnackbarProvider } from "notistack";

function App() {
  const [todosList, setTodosList] = useState(todos);
  return (
    <>
      <div className="App">
        <SnackbarProvider maxSnack={3}>
          <TodosContext.Provider value={[{ todosList, setTodosList }]}>
            <ToDoList />
          </TodosContext.Provider>
        </SnackbarProvider>
      </div>
    </>
  );
}

export default App;
