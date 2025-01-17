import React, { useCallback, useRef, useState } from "react";

// useCallback
// - 매번 함수를 생성하지 않고, 함수를 기억해두었다가 필요할 때마다 함수를 재사용.

export default function UseCallbackEx() {
  const [text, setText] = useState("");
  const prevRef = useRef(); // 이전 함수 참조값 저장용 - 리렌더링 되어도 값을 유지하는 ref 객체

  // [before]
  // text 상태가 업데이트 되면 = 컴포넌트 리렌더링 = 코드를 다시 읽음
  // = onChangeText 함수도 다시 생성. (JavaScript 함수는 object type, 참조하는 주소 값이 변경)
  // const onChangeText = (e) => {
  //     console.log('일하는 중!');
  //     setText(e.target.value);
  // };

  // [after]
  // useCallback 훅으로 함수를 기억해서
  // 컴포넌트가 리렌더링 되어도, 의존성 배열에 있는 값이 바뀌지 않는 한 기존 함수를 재사용.
  const onChangeText = useCallback((e) => {
    console.log("일하는 중!");
    setText(e.target.value);
  }, []);

  // 함수 참조 값(=주소 값) 비교
  console.log("함수 참조값이 같은가? : ", prevRef.current === onChangeText);
  // true : useCallback 덕분에 함수가 새로 생성되지 않고 기존 함수를 재사용 하는 것.
  // false : useCallback을 사용하지 않으면 리렌더링할 때마다 새로운 함수가 생성되어 참조 값이 달라짐.

  prevRef.current = onChangeText; // 이전 참조 값 업데이트 => 새로운 참조값과 비교하기 위해서!
  return (
    <div>
      <h1>useCallback Ex</h1>
      <h3>일반적</h3>
      <input type="text" onChange={onChangeText}></input>
      <div>작성한 값 : {text || "없음"}</div>
    </div>
  );
}
