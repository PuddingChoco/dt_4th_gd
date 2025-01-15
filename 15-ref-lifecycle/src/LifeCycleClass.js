import React, { Component } from "react";
import LifeCycleClassChild from "./LifeCycleClassChild";

export default class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };

  changeNumberState = () => {
    return this.setState({
      number: this.state.number + 1,
    });
  };

  changeVisibleState = () => {
    return this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <>
        <div>부모 컴포넌트</div>
        <button onClick={this.changeNumberState}>Plus</button>
        <button onClick={this.changeVisibleState}>On / Off</button>
        {this.state.visible && (
          <LifeCycleClassChild number={this.state.number} />
        )}
      </>
    );
  }
}
/**
 * *단축평가*
 * - 불필요한 평가를 건너뛰고 결과를 바로 반환하는 방법.
 *
 * A && B // 논리곱 - 두 값 모두 "참"일 때 "참"을 반환
 * - A가 참이면 B 반환
 * - A가 거짓이면 B 평가 x -> A 출력
 *
 * A || B // 논리합 - 두 값 중 하나라도 "참"이면 "참"을 반환
 * - A가 참이면 B 평가 x -> A 출력
 * - A가 거짓이면 B 반환
 *
 * [공식 문서 내용]
 * true && anything // anything // 논리곱
 * false && anythig // false
 *
 * true || anything // true // 논리합
 * false || anything // anything
 */
