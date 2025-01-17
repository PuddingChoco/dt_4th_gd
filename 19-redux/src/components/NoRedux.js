import React, { useState } from "react";
import "../styles/Box.css";
// Redux 안쓰면 아래와같이 Props 지옥을 맛볼 수 있음.

export default function NoRedux() {
  const [number, setNumber] = useState(100);
  const plus = () => setNumber(number + 1);
  const minus = () => setNumber(number - 1);
  return (
    <div>
      <h1>NoRedux</h1>
      <h2>Redux를 사용하지 않을 때 Props로 전달.</h2>
      <Box1 number={number} plus={plus} minus={minus} />
    </div>
  );
}

// 아래의것도 하나의 컴포넌트
// NoRedux.js 에서는 쓸 수 있지만, export 하지 않는 이상 다른곳에서는 쓸 수 없음.

// Box1 컴포넌트
// 구조분해 할당으로 부모에게서 number, plus, minus 넘겨받음
const Box1 = ({ number, plus, minus }) => {
  return (
    <div className="Box">
      <h2>Box1 : {number}</h2>
      {/* 이때, Box2 는 Box1의 자식이 되고, NoRedux(?) 자손이 됨 (NoRedux가 부모(?)이므로) */}
      <Box2 number={number} plus={plus} minus={minus} />
    </div>
  );
};

// Box2 컴포넌트
const Box2 = ({ number, plus, minus }) => {
  return (
    <div className="Box2">
      <h2>Box2 : </h2>
      <Box3 number={number} plus={plus} minus={minus} />
    </div>
  );
};

// Box3 컴포넌트
const Box3 = ({ number, plus, minus }) => {
  return (
    <div className="Box3">
      <h2>Box3 : </h2>
      <Box4 number={number} plus={plus} minus={minus} />
    </div>
  );
};

// Box4 컴포넌트 (data 사용할 컴포넌트)
const Box4 = ({ number, plus, minus }) => {
  return (
    <div className="Box4">
      <h2>Box4 : {number}</h2>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
    </div>
  );
};
