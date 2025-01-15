import React, { useState } from "react";
import LifeCycleClassChild from "./LifeCycleClassChild";
import LifeCycleFuncChild from "./LifeCycleFuncChild";

// 부모 컴포넌트
export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(false);

  const changeNumber = () => {
    setNumber(number + 1);
  };
  // [Q] 자식 컴포넌트 토글 효과 함수 작성
  const changeVisible = () => {
    setVisible(!visible); // 토글 효과
  };

  return (
    <div>
      <button onClick={changeNumber}>Plus</button>
      <button onClick={changeVisible}>On / Off</button>
      {/* 자식 컴포넌트 다루기 */}
      {/* [Q2] 단축평가로 자식 컴포넌트 on / off */}
      {visible && <LifeCycleFuncChild number={number} />}
    </div>
  );
}
