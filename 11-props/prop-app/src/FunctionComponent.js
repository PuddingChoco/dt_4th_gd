// 함수형 컴포넌트
// - 간단한 함수 형태로 컴포넌트 정의.
// - 간단한 문법, React Hooks 등 더 유용한 기능을 제공하기 때문에
//   함수형 컴포넌트를 사용하는 것이 권장됨.

import PropTypes from "prop-types";

// 1) 함수 선언문 방식
// function FunctionComponent() {
//     return <h1>여기는 Function Component</h1>;
// }

// export default FunctionComponent;

// 2) 화살표 함수 방식
const FunctionComponent = ({ name = "Sally", age = 28 }) => {
  // #1. 변수 선언
  const student = "춘향";
  // console.log('props >>> ', props);
  // #2-2. 구조 분해 할당 (최신 방식)
  // const { name, age } = props;
  // +) 매개변수에 직접 넣어서 구조분해할당 해도 됨!

  // #3. defaultProps 매개변수 문법 활용
  // ({ name = 'Sally', age = 28 })
  return (
    <>
      <h1>여기는 Function Component</h1>
      <h2>Hello, {student}</h2>
      {/* #2. Props 사용 */}
      {/* - 함수의 매개변수로 props를 받아 사용. */}
      {/* - props.xxx 형태로 출력 */}

      <p>
        {/* #2-1. 전체 Props로 넘겨줄 때 (구조분해할당 x) */}
        {/* 새로운 리더의 이름은 <b>{props.name}</b>
                <br />
                나이는 <b>{props.age}</b> */}
        {/* #2-2. 개별적으로 가져올 때 (구조분해할당 o) */}
        새로운 리더의 이름은 <b>{name}</b>
        <br />
        나이는 <b>{age}</b>
      </p>
    </>
  );
};

// #3. defaultProps 설정
// - 함수 외부에서 설정 (이제는 지양하는 편이 좋다!)
// FunctionComponent.defaultProps = {
//     name: 'Sally',
//     age: 24,
// };

// #4. propTypes 설정
// - 함수 외부에서 설정
FunctionComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

// (!) 함수 외부 defaultProps와 충돌.
// -> React 18 이후 부터 함수형 컴포넌트에서 defaultProps 지원을 중단할 예정.
// -> 매개변수 문법 활용 방법이 있기 때문!

// (!) 기본 매개변수 문법 사용 시 propTypes에서 isRequired 충돌.
// -> 기본 매개변수를 사용하면 propTypes에서 isRequired를 제거하는 것이 일반적!
// -> 기본 값으로 설정되어 있기 때문에 undefined가 될 가능성이 없으므로 isRequired가 불필요!

export default FunctionComponent;

// React 18 부터, React.StrictMode가 기본적으로 활성화.
// 이는 개발 모드에서 컴포넌트의 렌더링과 life cycle 메서드가 두 번 호출되도록 하여,
// 부작용(side effects)을 테스트하고 식별하는데 도움을 줌.
// 이로 인해 console.log가 두 번 찍힐 수 있음.
