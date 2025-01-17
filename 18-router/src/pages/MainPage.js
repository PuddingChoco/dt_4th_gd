import React from "react";
import { useSearchParams } from "react-router-dom";
import "../main.css";

/**
 * #7. useSearchParams
 * - URL의 쿼리 파라미터를 읽고 설정할 때 사용. (추출, 변경)
 * - 쿼리파라미터
 *   ㄴ URL? 뒤에 위치, 데이터를 키-값 쌍으로 전달.
 * - 내부적으로 URLSearchParams API 사용
 * [주요 메서드]
 * - get(key) : 특정 키의 값 가져오기.
 * - set(key, value) : 특정 키의 값을 설정.
 */

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("searchParams >>> ", searchParams);

  // mode 라는 key
  // 'mode' 쿼리 파라미터의 값을 콘솔로 출력 - 값이 없으면 null 출력함.
  // URL?mode=value  ex. value 값이 다크면 라이트모드로, 저 값이 라이트면 다크로 변경
  // L 값이 없으면 null 값, 있으면 해당 값 출력
  console.log(searchParams.get("mode")); // 결과는 null 값

  const mode = searchParams.get("mode"); // 해당 키 값을 mode 라는 변수에 저장

  // 테마 토글 함수
  const toggleMode = () => {
    // 현재 모드(currentMode)는 light
    const currentMode = searchParams.get("mode");
    setSearchParams({
      mode: currentMode === "Dark" ? "Light" : "Dark",
    });
  };

  return (
    // searchParams.get('mode') -> 모드 값 읽어오기
    // <div className={["Main", searchParams.get("mode").join("")]}>
    <div className={["Main", mode].join(" ")}>
      <h1>MainPage</h1>
      {/* 테마모드 바꿔주기 -> 다크모드면 라이트모드로, 다크모드가 아니면 다크모드로 바꿔줘 */}
      <button onClick={toggleMode}>
        {mode === "Dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
/**
 * setSearchParams VS searchParams.set() 차이점
 *
 * setSearchParams
 * - 새로운 객체를 전달
 * - 기존의 쿼리 파라미터가 "전부 덮어 씌워짐"
 * 
 * searchParams.set()
 *  const params = new URLSearchParams(searchParams);
    params.set('mode', 'dark'); // 기존 파라미터 유지하며 'mode'만 변경
    setSearchParams(params);

 * - URLSearchParams 객체에서 제공하는 메서드.
 *   ㄴ 객체 내부에서 수정.
 * - 기존의 쿼리 파라미터는 유지하면서 특정 파라미터만 수정
 * - 사용 후 setSearchParams 호출로 URL 업데이트 해야함.
 */
