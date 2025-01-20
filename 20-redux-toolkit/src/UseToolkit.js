import React from "react";
import "./styles/Box.css";
import { useDispatch, useSelector } from "react-redux";
import { amount, minus, plus } from "./store/counterSlice";
import { changeVisibility } from "./store/isVisibleSlice";

export default function UseToolkit() {
  // #4. 상태 가져와서 사용
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <h1>UseToolkit</h1>
      <h2>리듀서 추가!</h2>
      <h2>number : {count}</h2>
      <Box1 />
    </div>
  );
}

// Box1 컴포넌트
const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1</h2>
      <Box2 />
    </div>
  );
};

// Box2 컴포넌트
const Box2 = () => {
  return (
    <div className="Box2">
      <h2>Box2 : </h2>
      <Box3 />
    </div>
  );
};

// Box3 컴포넌트
const Box3 = () => {
  return (
    <div className="Box3">
      <h2>Box3 : </h2>
      <Box4 />
    </div>
  );
};

// Box4 컴포넌트 (data 사용할 컴포넌트)
const Box4 = () => {
  // 상태값 가져오기위해 useSelector() 사용함
  // .count 까지 접근해서 count 변수에 담아서 {count} 로 눈으로 볼 수 있음.
  const count = useSelector((state) => state.counter.count);
  const isVisible = useSelector((state) => state.isVisible);

  // #5. 액션 함수 실행!
  const dispatch = useDispatch();
  return (
    <div className="Box4">
      <h2>Box4 : {count}</h2>
      {/* dispatch() 메소드안에 내보냈던 애들 불러와서 사용함. 액션객체 반환 받아서 countSlice.js 의 reducer 의 액션값으로 전달됨. 그럼 액션 실행 가능. */}
      <button onClick={() => dispatch(plus())}>PLUS</button>
      <button onClick={() => dispatch(minus())}>Minus</button>
      <button onClick={() => dispatch(amount())}> AMOUNT</button>
      <h2>isVisible 값은 "{isVisible ? "참" : "거짓"}" 이다.</h2>

      <button onClick={() => dispatch(changeVisibility())}>CHANGE</button>
    </div>
  );
};
