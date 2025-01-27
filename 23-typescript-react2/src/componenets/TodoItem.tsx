import React from "react";
import { ToDoItem } from "../types/types";
import "../styles/TodoList.scss";
// #2. TodoItem 작성 (초안 작성)

// TodoItem의 Props 타입 정의
// {todo} => {todo: id, text, completed}
interface TodoItemProps {
  todo: ToDoItem;
  toggleComplete(id: number): void;
}

export default function TodoItem({ todo, toggleComplete }: TodoItemProps) {
  return (
    <>
      {/* #8. CSS 추가. */}
      <li className={todo.completed ? "completed" : ""}>
        <label htmlFor="todoItem">
          <input
            type="checkbox"
            id="todoItem"
            defaultChecked={todo.completed}
            // #7-3. 토글 실행 이벤트 핸들러
            onChange={() => toggleComplete(todo.id)}
          />
          {todo.text}
        </label>
      </li>
    </>
  );
}
