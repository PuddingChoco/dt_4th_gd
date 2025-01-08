// 실습 4 종합실습(props, state, event)
// 함수형 컴포넌트 State
import React, { useState } from "react";

export const FruitSelection = () => {
  const [text, setText] = useState("사라져라"); // (초기값)
  const [display, setDisplay] = useState(""); // (초기값)
  const [content, setContent] = useState("안녕하세요");

  // * state 값 변경하기.
  const onClickFruit = () => {
    // setDisplay("none");
    // setText("보여라");
  };

  return (
    <>
      <div>실습4</div>
      <div>
        <label>과일:</label>
        <select>
          <option>사과</option>
          <option>바나나</option>
          <option>복숭아</option>
          <option>오렌지</option>
        </select>

        <label>배경색:</label>
        <select>
          <option>검정</option>
          <option>하양</option>
          <option>빨강</option>
          <option>주황</option>
          <option>주황</option>
          <option>주황</option>
        </select>
      </div>
      {/* <button onClick={onClickHide}>{text}</button>
      <h1 style={{ display: display }}>{content}</h1> */}
    </>
  );
};
