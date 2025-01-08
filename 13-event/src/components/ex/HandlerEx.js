// 실습 1
// 클래스형 컴포넌트
import React, { Component } from "react";

export default class HandlerEx extends Component {
  state = {
    msg: "Hello World!",
  };

  render() {
    console.log("State : ", this.state);
    console.log("State : ", this.state.mgs);
    const { msg } = this.state;
    return (
      <>
        <h1>실습1</h1>
        <h1>Message : {msg}</h1>
        <button
          onClick={() => {
            this.setState({ msg: "Goodbye World!" });
          }}
        >
          버튼
        </button>
      </>
    );
  }
}
