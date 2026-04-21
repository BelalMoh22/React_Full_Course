import { type ReactNode, useReducer } from "react";
import { TodosContext } from "../contexts/TodosContext";
import todosReducer from "../Reducers/todosReducer";
import { DispatchContext } from "../contexts/DispatchContext";

interface TodosProviderProps {
  children: ReactNode;
}

export default function TodosProvider({ children }: TodosProviderProps) {
  const [todosState, dispatch] = useReducer(todosReducer, []);
  return (
    <TodosContext.Provider value={ todosState }>
      <DispatchContext.Provider value={ dispatch }>
        {children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
