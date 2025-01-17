import React, { useEffect } from "react";
// [Custom Hook #2.]
// - 동적으로 페이지 제목 설정,
//   컴포넌트가 언마운트 될 때 이전 제목으로 복원하는 기능.

export default function useTitle(title) {
  useEffect(() => {
    // mount 시 실행 공간
    console.log(document.title);

    const prevTitle = document.title; // 기존 제목을 저장.
    document.title = title; // 새로운 제목으로 설정

    return () => {
      document.title = prevTitle;
    }; // 언마운트 시 기존 제목으로 복원
    // unMount 시 실행 공간
  }, [title]); // title이 변경 될 때마다 문서의 제목을 업데이트 함.
}
