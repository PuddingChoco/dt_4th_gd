import React from "react";

// # interface 사용한 props 타입 정의
// 학생 데이터를 위한 인터페이스
interface StudentData {
  name: string;
  age: number;
  major: string;
}

// 부모로부터 받을 props 타입 정의
interface StudentProps {
  data: StudentData; // 객체 형태로 전달된 data prop
  children?: React.ReactNode;
  handleClick(name: string, major: string): void;
}

export default function Student({ data, children, handleClick }: StudentProps) {
  const { name, age, major } = data;
  return (
    <div onClick={() => handleClick(name, major)}>
      <h1>자식 컴포넌트</h1>
      <li>이름 : {name}</li>
      <li>나이 : {age}</li>
      <li>전공 : {major}</li>
      {children}
    </div>
  );
}
