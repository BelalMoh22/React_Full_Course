/* eslint-disable @typescript-eslint/no-unused-vars */
import { v4 as uuidv4 } from "uuid";

export default function todosReducer(currentTodos, action) {
  switch (action.type) {
    case "init": {
      const todos = localStorage.getItem("todos");
      return todos ? JSON.parse(todos) : [];
    }

    case "add": {
      const newTodo = {
        id: uuidv4(),
        title: action.payload.title, // title is key
        description: `هذا وصف لمهمه ${action.payload.title}`,
        isCompleted: false,
      };

      if (action.payload.title.trim() === "") {
        return currentTodos;
      }

      const newTodosList = [...currentTodos, newTodo];
      // Save to local storage
      localStorage.setItem("todos", JSON.stringify(newTodosList));
      return newTodosList; // return the new state
    }

    case "delete": {
      const newTodosList = currentTodos.filter(
        (t) => action.payload.id !== t.id,
      );
      // Save to local storage
      localStorage.setItem("todos", JSON.stringify(newTodosList));
      return newTodosList;
    }

    case "edit": {
      const updatedTodos = currentTodos.map((t) => {
        if (t.id === action.payload.id) {
          return {
            ...t,
            title: action.payload.title,
            description: action.payload.description,
          };
        }
        return t;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }

    case "complete": {
      const newTodosList = currentTodos.map((t) => {
        if (t.id === action.payload.id) {
          return { ...t, isCompleted: !t.isCompleted };
        }
        return t;
      });
      localStorage.setItem("todos", JSON.stringify(newTodosList));
      return newTodosList;
    }

    default: {
      throw new Error("Unknown action" + action.type);
    }
  }
}
