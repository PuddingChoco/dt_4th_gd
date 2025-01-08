// 실습 2
// 함수형 컴포넌트 State
import React, { useState } from "react";

export const HideButton = () => {
  const [text, setText] = useState("사라져라"); // (초기값)
  const [display, setDisplay] = useState(""); // (초기값)
  const [content, setContent] = useState("안녕하세요");

  // * state 값 변경하기.
  const onClickHide = () => {
    setDisplay("none");
    setText("보여라");
  };

  return (
    <>
      <div>실습3</div>
      <button onClick={onClickHide}>{text}</button>
      <h1 style={{ display: display }}>{content}</h1>
    </>
  );
};
