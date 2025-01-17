import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Header</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Product</Link>
        </li>
      </ul>
    </div>
  );
}
/**
 * #4. Link 컴포넌트
 * - SPA에서 페이지 간 이동을 제공하는 요소
 * - HTML의 <a>태그 처럼 동작하지만, 새로고침 없이 경로를 변경하기 때문에, 더 빠르고 부드러운 UX을 제공
 * - to : 필수 속성으로, 이동할 경로 지정
 */
