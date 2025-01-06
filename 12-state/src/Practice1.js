// 클래스 컴포넌트 State
// 스니펫 단축 명령어
// - 내가 지은 파일명을 클래스 이름으로 가져감.
import React, { Component } from "react";

export default class StateClass extends Component {
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
        <div>클래스형 컴포넌트</div>
        {/* <h1>Count : {this.state.count}</h1> */}
        <h1>Count : {count}</h1>

        <button
          onClick={() => {
            this.setState({ count: this.state.count + 2 });
          }}
        >
          + 2
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          - 1
        </button>
      </>
    );
  }
}
