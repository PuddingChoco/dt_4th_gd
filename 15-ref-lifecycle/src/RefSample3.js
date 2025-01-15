import React, { Component } from "react";

export default class RefSample3 extends Component {
  handleFocus = () => {
    console.log("this >>> ", this); // 컴포넌트 자기자신
    // #2. ref로 선택한 요소에 접근해서 사용
    this.inputRef.focus();
    console.log("this.inputRef >>> ", this.inputRef); // <input><input/>
  };
  render() {
    return (
      <div>
        <p>클래스형 컴포넌트에서 버튼 클릭시 input에 focusing 처리!</p>
        {/* #1. ref 속성에 ref prop 설정 */}
        {/* 만들어진 변수 inputRef 해당 요소의 ref prop로 넣어주면 ref 설정 완료*/}
        <input
          type="text"
          ref={(inputEl) => {
            this.inputRef = inputEl; // inputEl => <input><input/>
          }}
        />
        {/* ref를 사용하는 목적은 요소 선택! */}
        {/* inputRef라는 변수를 만들어서 사용하려고! */}
        {/* inputEl 를 통해 input 태그와 연결 시켜주려함! */}
        {/* #3. 함수 실행 */}
        <button onClick={this.handleFocus}>Focus</button>
      </div>
    );
  }
}
/**
 * ref 속성에 함수를 전달.
 * DOM 요소가 렌더링 될 때 해당 요소를 직접 다룰 수 있게 함.
 *
 * 콜백함수는 <input> 이 렌더링 될 때 실행되며, inputEl에 해당 DOM 요소가 전달 됨.
 * 이 전달된 DOM 요소를 클래스의 속성인 this.inputRef에 저장하여 이후에 사용할 수 있음.
 */
