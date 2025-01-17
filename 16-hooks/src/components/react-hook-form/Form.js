import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  // #1. useForm Hook 호출!
  //     ㄴ 폼 관리에 필요한 메서드와 상태 가져옴.

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  /**
   * - register : 입력 필드를 폼 상태에 등록하는 메서드. 즉, input 할당, value 변경 감지
   * - handleSubmit : 폼 제출 시 호출 할 함수.
   * - watch : 특정 입력 필드의 변화를 실시간으로 감지.
   * - formState: { erros } : 폼 상태 객체 / 유효성 검증 오류가 발생한 필드 정보를 담고 있음.
   */

  /////////////////////////////////////////////////////////////
  /**
   * #4. formState 객체 활용.
   * formState : 폼의 상태를 나타내는 객체.
   * - 폼의 유효성 검사 상태, 제출 상태, 에러 정보 등등.. 제공함.
   *
   * [제공하는 속성]
   * - errors : 유효성 검사 에러 정보를 담고 있는 객체
   * - isDirty : 폼이 수정 되었는지 여부.
   * - isSubmitting : 모든 필드가 유효한지 여부 (제출 시작 : ture / 제출 완료 : false)
   * - isSubmitted : 폼이 한 번이라도 제출되었는지 여부.
   * 기타 등등..
   */

  // #3-2. Submit 콜백함수 지정
  /**
   * handleSubmit(funcA, [func B]) - 두개의 함수를 받는다.
   * funcA : 필수, 유효할 때 실행 <- 수집 된 폼 데이터를 인수로 받는다.
   * funcB : 선택, 유효하지 않을 때 실행 <- 에러 정보 객체 (errors)를 인수로 받는다.
   */
  const onSubmit = (data) => {
    console.log("폼 제출 성공 : ", data);
  };

  const onError = (err) => {
    console.log("폼 제출 실패 : ", err);
  };
  console.log("register 메소드 >>>> ", register());
  console.log("errors >>>> ", errors);
  // (err) 이 errors 와 똑같은것.
  console.log("watch >>>> ", watch("username"));
  // #5. watch 사용
  const username = watch("username");

  return (
    <div>
      <h1>React-hook-form 라이브러리 데모</h1>
      {/* 
                #3. handleSubmit 메서드 지정
                - 제출 시 입력된 데이터 수집 및 등록된 모든 입력 필드 유효성 검사 실행
                - 통과 -> 콜백함수(onSubmit) 실행
                - 실패 -> errors 객체에 에러 정보 저장, 콜백함수 실행 x
            */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {/* handleSubmit() 함수는 인자를 2개 받아올 수 있음 */}
        <label htmlFor="username">이름</label>
        {/* JSX 는 속성 쓸때 { } 사용! 안에 들어가는 필드네임은 알아보기 쉬운것으로 하기 {,{여기는 키:값, 키:값 이런식으로 적어주면 됨}}*/}
        <input
          type="text"
          placeholder="username"
          id="username"
          // #2. register()로 폼과 input 연결
          /**
           * register('필드명', 유효성 검사 옵션)
           * - 필드명은 필수이며, 폼 데이터를 수집 할 때 객체의 키(key)로 사용.
           * - required : 필수 여부
           * - min, max Length : 최소, 최대 입력 길이 설정
           * - pattern : 정규식 검증
           * - validate : 커스텀 검증 로직
           */
          {...register("username", {
            required: "이름은 필수 항목입니다.",
            minLength: {
              value: 2,
              message: "이름은 최소 2글자 이상 작성해주세요",
            },
            pattern: {
              // 영어 대소문자 숫자, 5-15글자 사이
              value: /^[a-zA-Z0-9_]{5,15}$/,
              message:
                "아이디는 영문, 숫자, 밑줄(_)로 5자 이상 15자 이하로 작성해야 합니다.",
            },
            // /로 감싸기 : 정규식 객체
            // ^: 문자열 시작 / $ : 문자열 끝
          })}
          // value : 유효성 검사의 기준 값 설정
          // message : 유효성 검증의 실패 시, 에러 메시지를 설정
        />

        {/* 왜 에러났는지 화면에 뜨게 해줌  */}
        {errors.username?.message}

        {/* #4-2. 폼 상태 객체 formState! 활용 */}
        {/* 
                    이 표현은 *조건부 렌더링*과 *옵셔널 체이닝*을 활용하여 폼 필드의 오류 메시지를 표시하는 방법

                    errors
                    -> 유효성 검사가 "실패한 경우에만" 해당 필드에 오류 메시지가 저장됨.

                    "errors.username" => username 필드에 대한 오류 정보가 담긴 객체

                    **옵셔널 체인지 연산자** '?.'
                    JS 에서 객체의 속성에 접근할 때 해당 속성이 존재하는지 확인하고, 없을 경우, undefined를 반환하는 연산자.
                */}
        <br />
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          placeholder="email(gmail)"
          id="email"
          // register 등록, 필드명 넣어주기
          // 공백아니 문자, 공백아닌 @ 넣어라
          {...register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "유효한 이메일 주소를 입력해주세요",
            },
            // \S+ : 공백이 아닌 문자가 1개 이상 반복해라.
            validate: {
              useGmail: (v) =>
                v.includes("gmail.com") || "gmail로만 가입 가능합니다",
            },
          })}
          /**
           * validate 옵션
           * - 기본 제공되는 유효성 검사 옵션 외에 더 복잡한 유효성 검사를 직접 정의할 때 사용.
           * - 검증 "함수"를 받으며, 검증 결과를 반환 합니다. (성공 = true / 실패 = false)
           * - 객체로 사용될 경우, 여러 개의 검증 조건 설정 가능
           * (매개변수) : 입력 필드의 현재 값.
           */
        />
        {/* 입력했던 그 값, 즉 vlaue 값을 받아오는데 그냥 v로 함. v.includes: 받아온 값에 gmail.com 이 포함되어있는지 물어보고 있음  */}
        {/* || 는 OR 로서, 참이면 앞의것이 실행되고, 거짓이면 뒤의것이 실행됨 */}
        <br />
        <label htmlFor="pwd">비밀번호</label>
        {/* register에 'password' 라고 필드명 줌.*/}
        <input
          type="password"
          placeholder="password"
          id="pwd"
          {...register("password")}
        />
        <br />
        <button type="sumbit">Sumbit</button>
      </form>
      <p>미리보기 : {username}</p>
    </div>
  );
}
//////////////////////////////////////////////////////////////////
// #2-2
// Q) ...(?)register 왜 사용하는가?
/**
 * register 메서드는 input 요소와 연결하기 위한 속성들로 구성된 "객체"를 반환함. (속성들)
 *
 * 여기에 있는 속성들을 ...연산자 통해서 register 가 가지고 있고, form 요소에 들어가고 onChange()가 실시간으로 감지해서 error 객체의 정보를 전달해줌. Submit 버튼 안눌러도 실시간으로 감지함. 원하는대로 안했을경우 error 가 뜨지만, 맞게 입력하는 순간 사라짐.
 *
 * ...연산자를 사용하여 한 번에 모든 속성 props를 전달
 * 반환 객체 ex) {name: undefined, onChange: ƒ, onBlur: ƒ, ref: ƒ}
 * {
 *      name: "name",
 *      onChange: () => {}, // 입력 값이 변경될 때 호출되는 함수
 *      onBlur: () => {},   // 입력 필드가 포커스를 잃을 때 호출되는 함수
 *      ref: () => {},      // 해당 DOM 요소에 대한 참조를 설정하는 함수
 * }
 */

// # 일반 폼 작성과 라이브러리의 차이.
/**
 * [일반 폼]
 * - 각 입력 필드의 상태를 useState로 관리해야 함.
 *   ㄴ 모든 입력 값의 상태를 관리하고 값이 바뀔때마다 전체 컴포넌트가 리렌더링 될 수 있음.
 * - 검증 로직을 직접 작성해야 함. (= 유효성 검사)
 * - 폼 제출 시, 각 입력 필드의 상태를 모아서 폼 데이터를 수집해야 함.
 * - 간단한 폼 작성에 적합.
 */

/**
 * [라이브러리]
 * - 코드의 간결화
 * - 비제어 컴포넌트 / 필요한 경우에만 리렌더링
 *   ㄴ 입력 필드 변경 시 전체 컴포넌트를 리렌더링하지 않고 필요한 필드만 리렌더링 함.
 *   ㄴ 리렌더링을 최소화하여 성능 개선.
 * - 다양한 검증 규칙 쉽게 설정
 * - 'handleSubmit' 하나로 모든 폼 데이터를 쉽게 관리.
 *    ㄴ 폼 제출 시 자동으로 입력 필드를 수집하여 하나의 객체로 만들어주기 때문에 데이터를 수동으로 관리할 필요 x
 * - 복잡하고 대규모 폼 작성에 적합.
 */

////////////////////////////////////////////////////////////////
// # 제어 vs 비제어 컴포넌트
/**
 * 제어 컴포넌트
 * - React 상태(state)로 값을 관리하는 컴포넌트
 * - 입력 필드의 값이 useState와 같은 상태 변수에 저장되고, 상태 변경에 따라 리렌더링 됨.
 * - 입력값을 실시간으로 제어할 수 있어 동적인 폼 처리에 유리함.
 */

/**
 * 비제어 컴포넌트
 * - DOM의 상태를 직접 참조하여 값을 관리하는 컴포넌트
 * - ref를 통해 입력값을 읽고 사용.
 * - 상태(state)관리가 필요 없고, 폼 데이터를 빠르게 수집할 때 유리함.
 * - 리렌더링이 적어 성능이 더 좋을 가능성이 높음.
 */

/**
 * React Hook From (RHF)
 * - 비제어 컴포넌트 기반 동작
 * - 폼 필드가 업데이트 될 때마다 전체 폼이 리렌더링 되지 않도록 성능 최적화.
 * - 필요할 때만 폼 필드의 상태를 업데이트하여 불필요한 렌더링을 줄이고,
 * - 결과적으로 애플리케이션의 성능을 향상시켜줍니다.
 * - 내부적으로 **ref**를 통해 DOM 요소에 접근하여 값 변화를 감지한다.
 */
