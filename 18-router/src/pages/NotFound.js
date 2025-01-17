import React from "react";
import { Link } from "react-router-dom";
// 유저들이 경로를 벗어나서 접근하는 경우 -> Not Found 페이지 보여주기! -> 404 페이지 설정 (wild page route) OR 200 성공 300 등등 에러페이지 다르게 보여줄 수 있음

// 와일드카드 라우트
// 404 페이지 설정
// - 사용자가 정의하지 않은 경로로 접근했을 때, Not Found 페이지 보여주기.
export default function NotFound() {
  return (
    <div>
      <h1>NotFound</h1>
      <Link to={"/"}>홈으로 이동하기</Link>
      <br />
      <a href="http://localhost:3000">a 태그로 홈 이동</a>
    </div>
  );
}
