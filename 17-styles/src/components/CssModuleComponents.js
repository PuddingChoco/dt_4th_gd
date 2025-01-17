import React from "react";
import styles from "../styles/cssModule.module.css";
// #2. CSS Module 사용
// - 클래스명 중복 방지
// - 반드시 .module.css 확장자로 작성해야 함.
// - CSS Module 파일을 import 후, 객체 형태로 클래스명을 사용

/**
 * [장점]
 * - 스타일 충돌 방지
 * - 컴포넌트 기반 스타일링
 *
 * [단점]
 * - 동적 클래스명 조합이 번거로움
 * - 매번 네이밍 module.css 작성 해야하는 번거로움.
 */

// styles 객체에 module.css에서 정의한 클래스명이 속성으로 들어감.
console.log("styles >>>> ", styles);

// box : "cssModule_box__dUA33"
// container : "cssModule_container__ObhxW""
// => Module 사용시, 클래스명이 자동으로 고유한 이름으로 변환.

export default function CssModuleComponents() {
  return (
    <div className={styles.container}>
      <h1>Module CSS</h1>
      {/* .join('') 사용하면 한칸 띄워지고 작성됨 */}
      <div className={[styles.red, styles.box].join(" ")}>1</div>
      {/* 
                두 클래스를 동시에 적용
                - 배열의 요소들을 문자열로 합쳐서 클래스명을 한 줄로 만듦!
                - join(' ') 메서드를 사용하여 배열의 요소들을 공백으로 구분된 문자열로 반환.
            */}
      <div className={[styles.box, styles.orange].join(" ")}>2</div>
      <div className={`${styles.box} ${styles.yellow}`}>3</div>
      {/* 
                백틱 사용한 템플릿 리터럴. 두 클래스 동시 적용
                가장 간단하며, 가독성이 좋음.
            */}
    </div>
  );
}
