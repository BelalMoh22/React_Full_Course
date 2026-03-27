import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import { useState } from "react";
import todos from "./data/todo";
import { TodosContext } from "./contexts/todosContext";

function App() {
  const [todosList, setTodosList] = useState(todos);
  return (
    <>
      <div className="App">
        <TodosContext.Provider value={[{ todosList, setTodosList }]}>
          <ToDoList />
        </TodosContext.Provider>
      </div>
    </>
  );
}

export default App;
