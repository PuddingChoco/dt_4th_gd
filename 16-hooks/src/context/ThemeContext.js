import { createContext } from "react";

// #1. Context 생성
// - React.createContext를 호출하여 "Context 객체" 만들기.
const ThemeContext = createContext();
console.log("ThemeContext >>> ", ThemeContext);

// Provider / Consumer 라는 두 가지 속성 가짐.
// - Provider : Context 값을 전달하는 컴포넌트
// - Consumer : Context 값을 가져오는 컴포넌트 // = useContext 훅! 대체!

export default ThemeContext;
