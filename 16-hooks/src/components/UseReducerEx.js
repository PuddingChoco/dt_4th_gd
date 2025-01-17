import React, { useReducer } from "react";
// #1. 초기 상태값 정의
const initState = { value: 0 }; // 초기 상태 값

// #2. reducer 함수 정의 (상태 변경 로직)
// - 이 함수는 현재 상태와 액션을 받아 새로운 상태를 반환함.
const reducer = (prevState, action) => {
  // preveState = 현재 상태
  console.log("현재 상태 : ", prevState); // {value: 0}
  console.log("현재 상태의 값 : ", prevState.value); // 0 (현재 상태 값)

  // action = {type: xxx}
  console.log("action : ", action); // {type: 'INCREMENT'}
  console.log("action.type : ", action.type); //  INCREMENT

  switch (action.type) {
    case "INCREMENT":
      return { value: prevState.value + 1 };
    case "DECREMENT":
      return { value: prevState.value - action.payload };
    case "RESET":
      return initState;
    default:
      return { value: prevState.value };
  }
};

// - 업데이트 로직을 컴포넌트 외부로 뺌!
export default function UseReducerEx() {
  // #3. useReducer 훅 사용.
  const [state, dispatch] = useReducer(reducer, initState);
  // state : 현재 상태
  // dispatch : 액션을 발생 시키는 함수 (= state가 어떻게 변경되어야 하는지에 대한 힌트 제공)
  // reducer : state를 업데이트 하는 함수.
  console.log("state 초기 상태 >>> ", state);

  // #4. 액션 핸들러 함수 정의
  // - 이 함수들은 'dispatch'를 호출하여 액션을 발생 시킴.
  // - dispatch는 액션 객체를 인수로 받으며 {type : 'ACTION_TYPE', payload: data} 형태
  // *payload
  // - 액션 객체에 담아 보내는 추가적인 데이터 (숫자, 문자열, 객체 등 모든 형태 데이터 가능)

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT", payload: 1 });
  const reset = () => dispatch({ type: "RESET" });

  return (
    <div>
      <h1>UseReducerEx</h1>
      <h2>{state.value}</h2>
      {/* #5. 컴포넌트 렌더링 */}
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
