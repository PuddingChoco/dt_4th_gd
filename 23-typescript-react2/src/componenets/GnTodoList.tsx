import React, { useRef, useState } from "react";
import TodoItem from "./TodoItem";
import { GnToDoItem, ToDoItem } from "../types/types";
import GnTodoItem from "./GnTodoItem";
// export interface GnToDoItem<T> {
//     id: number;
//     text: T; // 텍스트 타입을 제네릭으로 정의
//     completed: boolean;
// }

export default function TodoList() {
  const [todos, setTodos] = useState<GnToDoItem<string>[]>([]);

  const [newTodo, setNewTodo] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const updatedTodos: GnToDoItem<string>[] = [
      ...todos,
      { id: Date.now(), text: newTodo, completed: false },
    ];
    setTodos(updatedTodos);
    setNewTodo("");
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const toggleComplete = (targetId: number) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === targetId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <>
      <div>
        <h1>TodoList</h1>
        <input
          type="text"
          placeholder="add new todo!"
          value={newTodo}
          ref={inputRef}
          onKeyDown={handleKeyDown}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>ADD</button>
        <button onClick={focusInput}>FOCUS</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <GnTodoItem<string>
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </>
  );
}
