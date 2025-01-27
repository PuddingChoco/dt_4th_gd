import React from "react";
import { GnToDoItem, ToDoItem } from "../types/types";
import "../styles/TodoList.scss";

// export interface GnToDoItem<T> {
//     id: number;
//     text: T; // 텍스트 타입을 제네릭으로 정의
//     completed: boolean;
// }

// 제네릭을 적용한 props 타입 정의
interface TodoItemProps<T extends React.ReactNode> {
  todo: GnToDoItem<T>;
  toggleComplete(id: number): void;
}

export default function GnTodoItem<T extends React.ReactNode>({
  todo,
  toggleComplete,
}: TodoItemProps<T>) {
  return (
    <>
      <li className={todo.completed ? "completed" : ""}>
        <label htmlFor={`todoItem-${todo.id}`}>
          <input
            type="checkbox"
            id={`todoItem-${todo.id}`}
            defaultChecked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          {todo.text}
        </label>
      </li>
    </>
  );
}
