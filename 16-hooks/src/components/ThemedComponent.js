import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
// ## 자식 컴포넌트 (소비)

export const ThemedComponent = () => {
  // #4. useContext 훅을 사용하여 ThemeContext 값 직접 가져와서 사용.
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        textAlign: "center",
        border: "1px solid purple",
      }}
    >
      <h3>자식 컴포넌트</h3>
      <p>현재 테마 : {theme}</p>
      <button onClick={toggleTheme}>테마 변경</button>
    </div>
  );
};

// useTheme 사용한 버전
// import React, { useContext } from 'react';
// import ThemeContext from '../context/ThemeContext';
// import useTheme from '../hooks/useTheme'; // ThemeContext에서 제공하는 커스텀 훅 가져옴.
// // ## 자식 컴포넌트 (소비)

// export const ThemedComponent = () => {
//     // #4. useContext 훅을 사용하여 ThemeContext 값 직접 가져와서 사용.
//     // const { theme, toggleTheme } = useContext(ThemeContext);

//     // #(커스텀 훅 사용)
//     const { theme, toggleTheme } = useTheme();

//     return (
//         <div
//             style={{
//                 backgroundColor: theme === 'light' ? '#fff' : '#333',
//                 color: theme === 'light' ? '#000' : '#fff',
//                 padding: '20px',
//                 textAlign: 'center',
//                 border: '1px solid purple',
//             }}
//         >
//             <h3>자식 컴포넌트</h3>
//             <p>현재 테마 : {theme}</p>
//             <button onClick={toggleTheme}>테마 변경</button>
//         </div>
//     );
// };
