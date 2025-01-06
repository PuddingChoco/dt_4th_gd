// 함수형 컴포넌트 State
import React, { useState } from "react";

export const StateFunction = ({ value }) => {
  /**
   * const [a, b] = useState(""); 형태
   * a : state에 저장할 자료.
   * b : state 변경을 도와주는 함수.
   * useState('') : 상태 초기값, (숫자, 문자, 배열 등 값의 형태는 자유로움)
   */

  const [number, setNumber] = useState(0); // (초기값) = 0
  // number : 현재 상태 값
  // setNumber : 상태를 변경하는 함수

  // * state 값 변경하기.
  const onClickAdd = () => {
    setNumber(number + 1);
    // setNumber를 호출하면 상태가 변경되고 컴포넌트가 리렌더링!
  };
  const onClickMin = () => {
    setNumber(number - 2);
    // setNumber를 호출하면 상태가 변경되고 컴포넌트가 리렌더링!
  };
  return (
    <>
      <div>함수형 컴포넌트</div>
      <h1>Number : {number}</h1>
      <button onClick={onClickAdd}>{value}+1</button>
      <button onClick={onClickMin}>{value}-2</button>
    </>
  );
};
