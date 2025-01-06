// 클래스 컴포넌트 State
// 스니펫 단축 명령어
// - 내가 지은 파일명을 클래스 이름으로 가져감.
import React, { Component } from "react";

export default class CounterClass extends Component {
  // React 16.3 이후 최신 버전 방법
  // state를 클래스 필드로 선언.
  // *state 란?
  // - 컴포넌트의 상태를 관리할 수 있도록 도와주는 객체.
  state = {
    count: 0,
  };

  render() {
    console.log("State : ", this.state); // state 객체 형태
    console.log("State : ", this.state.count); // 0
    const { count } = this.state;
    return (
      <>
        <div>CounterClass</div>
        {/* #1. state 값 출력 (구조분해 할당 x) */}
        <h1>Count : {this.state.count}</h1>
        {/* #1-2 state 값 출력 (구조분해 할당 o) */}
        <h1>Count : {count}</h1>

        {/* #2. state 값 변경 하기 */}
        {/* - 직접 변경은 불가능 */}
        {/*   ㄴ 직접 변경 시, React가 상태 변경을 감지하지 못해 컴포넌트가 리렌더링 되지 않습니다. */}
        {/* - setState 메서드 사용 */}
        {/*   ㄴ 컴포넌트의 state를 변경하고, 리렌더링을 트리거하는 메서드 */}
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          + 1
        </button>
        <button
          onClick={() => {
            alert(count);
          }}
        >
          Alert Number
        </button>
      </>
    );
  }
}
