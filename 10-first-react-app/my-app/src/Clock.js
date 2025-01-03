// * 컴포넌트 작성법
// 1. Function 만들기
// 2. return() 안에 html 작성.
// 3. <함수명><함수명> Tmrl. -- 호출할 곳에 <함수명 /> 도 가능

// Q) 언제 사용하면 좋은가?
// A) 1. 반복적인 html 축약 할 때.
// A) 2. 큰 페이지들
// A) 3. 자주 변경되는것들 UI

function Clock() {
  // 함수형 컴포넌트
  return (
    <div className="clock-container">
      {/* toLocaleDateString() : 사용자의 문화권에 맞는 시간 표기법으로 시간을 리턴. */}
      <h1>현재 시간은 {new Date().toLocaleDateString()} </h1>
    </div>
  );
}
export default Clock;
// export 로 내보내기  (가져다가 쓰기만 하면 됨.)
