// 함수형 컴포넌트에서의 이벤트 사용
// - 이벤트 핸들러를 함수로 정의한 뒤, JSX의 이벤트 속성 전달
import React, { useState } from "react";

export const FuncComponent = () => {
  const [number, setNumber] = useState(0);

  // #1. 인자 X
  const increase = () => {
    setNumber(number + 1);
  };

  // #2. 인자 1개
  const alertMsg = (msg) => {
    alert(`${msg}~ 현재 숫자는 ${number} 입니다.`);
  };

  // #3. 인자 2개
  const consoleMsg = (msg, e) => {
    // 이벤트 객체와, 인자 (이벤트객체는 항상 마지막 인자로 넣어서 전달해주는게 관례)
    console.log(e.target); // 이벤트 메소드의 속성 하나인 target 가져옴
    console.log(`${msg}~ 현재 숫자는 ${number} 입니다.`);
  };

  // #4. e.target  VS  e.currentTarget
  // - e.target : 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 즉, 내가 클릭한 자식 요소  ex. onClick()이 <button>에 있는데 콘솔에는 <span> 이 나옴.
  // -e.currentTarget : 이벤트 핸들러가 있는 요소.  ex. 얘는 그대로 <span> 나옴.
  const handleEvent = (e) => {
    console.log("e.target >>> ", e.target);
    console.log("e.currentTarget >>> ", e.currentTarget);
  };

  return (
    <>
      <div>FuncComponent</div>
      <h1>Numbmer Counter</h1>
      <h2>{number}</h2>

      {/* #1. 함수에 인자가 없는 경우: 함수 이름만 전달 */}
      <button onClick={increase}>더하기</button>

      {/* #2. 함수에 인자 1개 */}
      {/* 아래와 같이 하면 함수가 즉시 실행되는 표현식임. 결과값 있으면 바로 반환받겠다 라는 뜻. 그리고 onClick 에 반환값을 넣어서 전달해주겠다는 뜻이 됨. onClick 이 클릭이벤트로 실행되는것이 아니라서 alert 함수가 바로 실행됨 */}
      {/* <button onClick={alertMsg("hello")}>alert 출력</button> */}

      {/* 그래서 콜백함수로 만들어줘야 바로 실행하지 않고 클릭이 일어났을때 콜백함수가 실행되면서 alert 메시지가 실행됨. 콜백함수: 어떤 함수를 참조하고 있다가 onClick 이벤트가 실행되었을때 아까 그 함수를 실행하는것. 즉, 이벤트 발생 했을때만 실행됨.*/}
      <button onClick={() => alertMsg("hello")}>alert 출력</button>

      {/* #3. 함수에 인자 2개 */}
      <button
        onClick={(e) => {
          // 여기서 e 빼면 매개변수 없다고함(인지 못함)
          consoleMsg(e, "hello");
        }}
      >
        console 출력
      </button>

      {/* #4. e.target  VS  e.currentTarget */}
      <button onClick={handleEvent}>
        <span>handle event</span>
      </button>
    </>
  );
};
