// spread (...) 연산자
// - 배열이나 객체를 개별 요소로 펼치거나,
//   새로운 배열이나 객체를 복사하거나 병합 하는데 사용하는 ES6 기능.
// - 더 간결하고 유연하게 데이터 처리 가능.

// 배열에서의 스프레드 연산자
// #1. 배열 복사
const arr = ["a", "b", "c"];
const copyArr = [...arr]; // 복사
console.log(copyArr); // ['a', 'b', 'c']
console.log(arr === copyArr); // false -> why? 복사본 이므로 다른 참조

// #2. 배열 병합
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b];
console.log(spread); // [1, 2, 3, 4, 5]

// 기존 방식
// - concat()
// - 두 개 이상의 배열을 하나로 합칠 때 사용.
const concatEx = a.concat(b);
console.log(concatEx); // [1, 2, 3, 4, 5]

// #3. 펼치기
// - 바로 분해하여 배열로 만듬.
const c = [..."Hello"];
console.log(c); // ['H', 'e', 'l', 'l', 'o']

// 기존 방식
// - .split() - 문자열 나누기
const d = "HELLO".split("");
console.log(d); // ['H', 'E', 'L', 'L', 'O']

//////////////////////////////////////
// 객체에서의 스프레드 연산자
// #1. 객체 복사
const obj = {
  name: "IU",
  gender: "women",
};
const copyObj = { ...obj };

console.log(copyObj); // {name: 'IU', gender: 'women'}
console.log(copyObj === obj); // false

// #2. 객체 병합
const burger = {
  base: "meat patty",
  company: "버거킹",
};

const whopper = {
  ...burger,
  name: "와퍼",
};
console.log("burger >>> ", burger); // {base: 'meat patty', company: '버거킹'}
console.log("whopper >>> ", whopper); // {base: 'meat patty', company: '버거킹', name: '와퍼'}
////////////////////////////////////////
// rest 파라미터
// - 함수가 여러 개의 인자를 받을 때, 나머지 인자들을 배열로 모아주는 역할.
// - "마지막 인자"로만 사용
// - 함수에서 여러 rest 파라미터 사용 불가. 한 번만 등장 가능!

// 함수에서 사용시
const values = [10, 20, 30, 40, 50, 60];
function get(a, b, c, ...rest) {
  console.log(a, b, c); // 10 20 30
  console.log("rest >>> ", rest); // [40, 50, 60]
}
get(...values);

// --- 객체
const icecream = {
  company: "lotte",
  flavor: "choco",
  price: 1000,
};
// 객체에서의 구조분해 할당
const { flavor, ...abc } = icecream;
console.log(flavor); // choco
console.log(abc); // {company: 'lotte', price: 1000}

// --- 배열
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [one1, two1, ...rest2] = number;
console.log(one1, two1); // 1 2
console.log(rest2); // [3, 4, 5, 6, 7, 8]

///////////////////////////////////////
// spread 연산자 vs rest 연산자

// Spread - 함수 호출 시
function Details(name, age) {
  console.log(`Name: ${name}, Age: ${age}`);
}
const details = ["IU", 30];

// Spread 문법으로 배열의 개별 요소를 인자로 펼쳐서 전달.
Details(...details); // Name: IU, Age: 30

// Rest - 함수 정의 시
function Numbers(...numbers) {
  console.log(numbers); // [1, 2, 3, 4, 5]
}

Numbers(1, 2, 3, 4, 5);

/**
 * 얕은 복사 vs 깊은 복사
 * - 객체나 배열과 같은 참조 타입 데이터를 처리 할 때, 데이터를 복사하는 두 가지 주요 방식.
 *
 * 1. 얕은 복사 (Shallow Copy)
 * - 복사 대상 객체의 "1단계 깊이" 까지만 새로운 데이터를 생성.
 * - 그 안에 중첩된 (2단계 이상) 객체나 배열은 "참조를 복사"하는 방식.
 * 즉, 복사된 객체와 원본 객체는 중첩된 데이터에 대해 같은 참조를 공유함.
 *
 * *특징
 * - 원본 객체의 최상위 속성을 수정해도 복사본엔 영향을 미치지 않음.
 * - 하지만 중첩된 데이터를 수정하면, 원본과 복사본 모두 영향을 받음.
 * - 간단하고 빠르지만, 중첩된 데이터에서 참조 문제 일어날 수 있음.
 *
 * ** 1단계 복사
 * - 최상위 레벨의 속성, 요소만 복사하는 것.
 * - 1단계 까지만 독립적.
 *
 * * 얕은 복사 만드는 방법
 * - 스프레드 연산자(...) -> 제일 대중적.
 */

const arrEx = [1, { name: "Damon" }];
const shallowCopy = [...arrEx]; // 얕은 복사
console.log(arrEx === shallowCopy); // false (참조가 다름)

shallowCopy[0] = 2; // 1단계 데이터 변경 -> 원본에는 영향이 없음.
console.log(arrEx[0]); // 1 -> 원본 유지

shallowCopy[1].name = "Lora"; // 중첩 객체 수정 -> 원본에 영향
console.log(arrEx[1]); // {name: 'Lora'} -> 참조를 공유하므로 변경.

/**
 * 2. 깊은 복사 (Deep Copy)
 * - 복사 대상 객체의 모든 데이터를 재귀적으로 완전히 새롭게 생성함.
 * - 원본과 복사본이 완전히 독립적인 상태.
 * 즉, 중첩된 객체나 배열까지 모두 복사되기 때문에, 복사본을 수정해도 원본에 아무 영향이 없음.
 *
 * *특징
 * - 모든 데이터가 독립적으로 복사됨. (중첩된 참조 포함)
 * - 복사본과 원본이 완전히 분리됨.
 * - 다만, 성능적으로 더 많은 비용(시간, 메모리)이 들 수 있음.
 *
 * * 깊은 복사를 만드는 방법
 * - JSON.parse(JSON.stringify(obj))
 *      - 간단하고 직관적, 하지만 undefined 같은 특수 데이터는 복사되지 않음.
 *
 * -- JSON.stringify(obj) => 객체를 JSON 형식의 문자열로 변환.
 * -- JSON.parse(jsonString) => JSON 형식의 문자열을 다시 객체로 반환.
 *
 * ---> 문자열을 다시 객체로 파싱하면서, 새로운 독립적인 객체가 생성.
 * ---> 모든 객체가 새로운 메모리 위치에 할당되므로, 독립적 복사.
 */

const arrEx2 = [1, { name: "Damon" }];
const deepCopy = JSON.parse(JSON.stringify(arrEx2));
console.log(deepCopy);

deepCopy[1].name = "Ari";
console.log(arrEx2[1]); // {name: 'Damon'}
