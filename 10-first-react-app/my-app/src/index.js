import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Clock from "./Clock";
import Pet from "./Pet";
import Conditional from "./Conditional";
import Larger from "./Larger";
import Practice from "./Practice";
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Pet />
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Conditional />
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Larger />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Practice />
  </React.StrictMode>
);

// </React.StrictMode>
// - 개발 모드에서만 작동하는 특수 컴포넌트
// - 문제 감지나 경고 하기 위해 사용

// #1.가장 단순한 예시
// root.render(<h1>Hello, world!</h1>);
// ReactDom.render() 메서드를 사용하여 React 컴포넌트를 'index.html'의
// 빈 <div></div> 요소에 렌더링 함.

// #2. element rendering
// - element: react 앱의 가장 작은 단위 -> 화면에 표시할 내용 기술
// - 매초 전체 UI를 다시 그리도록 element를 만들었지만
// - React DOM은 내용이 변경된 텍스트 노드만 업데이트 하고 있다.

// Clock.js 에서 Clock 컴포넌트 가져와서 쓰기 -> 맨 위에 import 먼저 해야함.
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock></Clock>
//     </React.StrictMode>
//   );
// }, 1000);
