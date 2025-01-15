import React, { useRef } from "react";

// useRef Hook
// - 1. DOM 요소에 접근
// - 2. 값을 기억
export default function RefSample1() {
  // #1. ref 객체 만들기
  const inputRef = useRef();
  console.log("Ref 객체 : ", inputRef);

  // #3. useRef()를 이용해서 만든 객체의 current 값에 focus() DOM API 사용
  const handleFocus = () => {
    // * .current
    // - ref 객체가 가지고 있는 속성.
    // - 'ref' 객체가 가리키는 값을 저장하는 곳.
    console.log("current >>> ", inputRef.current);

    // #4. DOM 조작.
    inputRef.current.focus();
  };
  return (
    <div>
      <p>함수형 컴포넌트에서 버튼 클릭 시 input에 focusing 처리해보기!</p>
      {/* #2. 직접 접근하고 싶은 DOM 요소에 ref prop 설정 */}
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Foucs</button>
    </div>
  );
}
