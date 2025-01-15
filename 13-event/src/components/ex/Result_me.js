import React from "react";
import apple from "./assets/apple.png";
import banana from "./assets/banana.png";
import peach from "./assets/peach.png";

// data 가지고 오기
export default function Result({ data }) {
  // data 또 분해 가능. 객체 형태이기 때문에. data.key로 접근 가능하나 코드가 길어니지까 구조분해할당 하기!

  // #1. (정적) import 방식으로 가져와서 객체에 저장.
  // - 파일이나 모듈을 컴파일 시점에 미리 가져옴
  // - 파일 경로가 고정되어 있어야 함.
  const images = {
    apple,
    banana,
    peach,
  };

  // #2. (동적) require() 방식
  // - Webpack 에서 이를 지원함.
  // - 런타임시에 동적으로 단일 파일을 가져올 수 있음
  // - 경로를 동적으로 설정할 수 있음
  // - 즉, 파일이나 폴더 경로가 변수로 지정 될 때 유용 (단일 파일로 가져옴)

  // #3. requir.context() 방식
  /**
   * - Webpack에서 제공
   * - 특정 디렉토리의 파일들을 자동으로 탐색, 한 번에 가져옴 (= ex. 이미지 한번에 다 가지고 오겠다)
   *
   * [구문 분석]
   * require.context(directory, useSubdirectories, regExp)
   * -- directory: 탐색할 디렉토리 경로 (문자열 형태로 입력)
   * -- useSubdirectories: 하위 디렉토리까지 포함할지 여부 (true, false)
   * -- rgeExp: 파일 이름을 필터링할 정규 표현식 (이건 되고 저건 안되고 등등)
   */

  //   아래에서 | 는 OR 를 의미함 (이것도 저것도 좋다!)
  const images = require.context("./assets", false, /\.(png|jpe?g|svg)$/);
  /**
   *  . : 임의의 한 특수문자
   *  \. : 점을 일반 문자로 취급하여 실제 점(.)을 찾음.
   *  ? : 앞에 글자가 있을 수도 없을 수도 있음.
   * $ : 문자열의 끝을 의미 -> 끝에 .png 로 끝나야만 매칭
   */

  console.log("images >>>", images);

  //   . 메소드를 사용하면, 경로를 배열로 반환해줌
  console.log(ㅁㅇㅀㄹㅇㄹㅇ);

  const { fruit, background, color, content } = data;
  return (
    <div>
      {/* 이미지 동적 처리(바뀔때마다 이미 바뀌어야함) */}
      {/* #1. 정적 import 방식 (assets 폴더 안에 있는 애들 가지고 오려면 import 로 가져와야함 -> line2) */}
      <img src="{images[fruit]}" alt="" width={100} height={100}></img>
      <div style={{ backgroundColor: background, color: color }}>{content}</div>

      {/* #2. 동적 require 방식 */}
      <img
        src="{require(`./assets/${fruit}.png)}"
        alt=""
        width={100}
        height={100}
      ></img>
      <div style={{ backgroundColor: background, color: color }}>{content}</div>

      {/* #3. 동적 require.context 방식 */}
      {/* 여기서 100 은 100px 이라는 뜻 */}
      <img
        src="{images(`./${fruit}.png)}"
        alt=""
        width={100}
        height={100}
      ></img>
      <div style={{ backgroundColor: background, color: color }}>{content}</div>
    </div>
  );
}
