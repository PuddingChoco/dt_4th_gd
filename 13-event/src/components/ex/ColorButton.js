// 실습 2
// 함수형 컴포넌트 State
import React, { useState } from "react";

export const ColorButton = () => {
  const [color, setColor] = useState("black"); // (초기값)
  const [text, setText] = useState("검정색 글씨"); // (초기값)

  // * state 값 변경하기.
  const onClickRed = () => {
    setColor("red");
    setText("빨간색 글씨");
  };
  const onClickBlue = () => {
    setColor("blue");
    setText("파란색 글씨");
  };
  return (
    <>
      <div>실습2</div>
      <h1 style={{ color: color }}>{text}</h1>
      <button onClick={onClickRed}>빨간색</button>
      <button onClick={onClickBlue}>파란색</button>
    </>
  );
};
