// 실습 4 종합실습(props, state, event)
// 함수형 컴포넌트 State
import React, { useState } from "react";

export const FruitSelection = () => {
  const [isDropdownView, setDropdownView] = useState(false); // (초기값)
  const [text, setText] = useState(""); // (초기값)

  // * state 값 변경하기.
  const onClickFruit = () => {
    isDropdownView(!isDropdownView);
  };

  // 배열
  const fruits = ["사과", "바나나", "복숭아", "오렌지"];
  const bg = [
    "검정",
    "하양",
    "빨강",
    "주황",
    "노랑",
    "초록",
    "파랑",
    "보라",
    "분홍",
  ];
  const textColor = [
    "검정",
    "하양",
    "빨강",
    "주황",
    "노랑",
    "초록",
    "파랑",
    "보라",
    "분홍",
  ];

  const fruitMenu = fruits.map((index, item) => {
    console.log(index, item);
  });

  return (
    <>
      <div>실습4</div>
      <label>과일: </label>
      <select>
        <option>{fruitMenu}</option>
      </select>

      <label>배경색: </label>
      <selection>
        <option></option>
      </selection>

      <label>글자색: </label>
      <selection>
        <option></option>
      </selection>

      <label>내용: </label>
      <input type="text" />
    </>
  );
};
