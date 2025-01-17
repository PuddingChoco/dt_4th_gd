import React, { useState } from "react";
// [Custom Hook #1.]
// 토글 상태를 관리하고 전환하는 기능 구현.

// Custom Hook 만들 때 고려해야 할 점.
// - 훅의 목적 정의
// - 기능 설계
// - 구현

/**
 * Custom Hook 특징
 * - Custom Hook은 단순히 JavaScript 함수 일뿐!
 *   ㄴ 컴포넌트와 달리 props 개념이 사용되지 않음!
 *   ㄴ 대신, 함수의 매개변수를 통해 초기 값 설정 가능!
 * - 컴포넌트가 아니라 UI를 반환하지 않으며, 대신 필요한 값(상태, 함수, 등)을 반환함.
 */

export default function useToggle(initValue = false) {
  // 초기 상태 설정
  const [value, setValue] = useState(initValue);

  // 상태 전환 함수
  const toggleValue = (newValue) => {
    // 1. newValue가 boolean 타입이면 해당 값으로 상태 설정 // 명시적 설정
    // 2. 아니면 기존 상태를 반전 --> 기본 토글 동작 지원.
    setValue((current) =>
      typeof newValue === "boolean" ? newValue : !current
    );
  };

  // 훅의 결과로 반환할 값들 정의
  // - 훅의 목적에 맞는 적절한 변환 형식을 선택.
  return [value, toggleValue];
  // 현재 상태와 상태 전환함수를 배열로 반환.
}
