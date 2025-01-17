// store->actions->index.js 에서 (모은거) 다 가져옴.

import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { minus, plus } from '../store/actions/counterActions';
// import { changeVisibility } from '../store/actions/isVisibleActions';
// ## 추가) 한번에 가져오기
import { minus, plus, changeVisibility } from "../store/actions";

export default function UseRedux2() {
  // #6. redux 사용!
  const count = useSelector((state) => state.counter.count);
  console.log("count >>> ", count);

  return (
    <div>
      <h1>UseRedux2</h1>
      <h2>Redux 사용!</h2>
      <h2>리듀서 새로 추가!</h2>
      <h2>count : {count}</h2>
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
  const count = useSelector((state) => state.counter.count);
  const isVisible = useSelector((state) => state.isVisible);

  // #7. dispatch 사용
  const dispatch = useDispatch();
  return (
    <div className="Box4">
      <h2>Box4 : {count} </h2>
      <h2>isVisible 값은 "{isVisible ? "참" : "거짓"}" 이다.</h2>

      <button onClick={() => dispatch(plus())}>PLUS</button>
      <button onClick={() => dispatch(minus())}>MINUS</button>

      {/* Q) CHANGE 버튼을 클릭하면 '참', '거짓' 글자가 토글 */}
      <button onClick={() => dispatch(changeVisibility())}>CHANGE</button>
    </div>
  );
};
