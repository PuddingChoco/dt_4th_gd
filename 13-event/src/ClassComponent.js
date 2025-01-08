// 클래스 컴포넌트에서의 이벤트 사용.
// - 화살표 함수 사용 (ES6)
import React, { Component } from "react";

export default class ClassComponent extends Component {
  /**
   * 화살표 함수의 'this'는 상위 스코프(여기서는 classComponent)의 'this'를 참조하므로 바인딩이 필요 없음. (원노트 0106(2)_React Handling p7 참고하기)
   * =(Lexical this) 렉시컬 스코프의 this 라고도 함
   * 즉, 자신만의 this를 가지지 않는다.
   */

  // 클래스라 딱히 변수 만들지 않고 아래와 같이 진행하면 됨.
  // msg, msg2 : 추가로 전달된 인자
  // evt : 이벤트 객체
  // - 이벤트 객체가 마지막 매개변수로 오는 것이 일반적 (코드 작성 시 관례) 그러나, 인자가 없는데 인자를 받고 있는 경우는, 리엑트 이벤트 객체가 자동으로 첫 번째 인수로 들어가진다. 그래서 인자가 없는경우 첫 번째 인자인 msg 로 들어가서 콘솔에 evt >>> 가 아닌, msg >>> 하고 나옴. 인자가 있는 경우는 e 라고 이게 이벤트 객체라고 정확하게 명시해 주었기 때문에 evt >>> 라고 자기 자리 정확하게 찾아서 나오는것.
  printConsole = (msg, msg2, evt) => {
    console.log("evt >>>", evt);
    console.log("evt.target >>>", evt.target);
    console.log("evt.currentTarget >>>", evt.currentTarget); // 자식이 없으니<button> 그대로 나옴
    console.log("msg >>>", msg);
    console.log("msg2 >>>", msg2);
    console.log("this >>>", this); // 클래스 인스턴스럴 참조함 (바인딩해서)
    console.log("----------------");
  };
  render() {
    return (
      <>
        <div>ClassComponent</div>
        {/* 이벤트 객체와 인자 전달 */}
        {/* 클래스형에서는 this 써줘야함. */}
        <button
          onClick={(e) => {
            this.printConsole("msg", "msg2", e);
          }}
        >
          printConsole(인자 O)
        </button>

        {/* 이벤트 객체만 전달 */}
        {/* 이벤트 객체가 없어서 undefined 가 적용됨 */}
        {/* 합성 이벤트는 인자로 따로 넘겨주지 않아도 알아서 자동으로 이벤트 객체 넘어가짐 */}
        <button onClick={this.printConsole}>printConsole(인자 X)</button>
      </>
    );
  }
}
