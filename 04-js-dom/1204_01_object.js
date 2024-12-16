// 변수 or 함수 매개변수가 전달 될 때,
// 값 또는 참조가 어떻게 전달되는지? 에 대해 배워보겠습니다.

// #1. pass by value (값에 의한 전달)
/**
 * - 원시 타입(primitive type)은 값(value)이 복사되어 전달.
 * - 함수 내에서 값을 변경하더라도, 호출한 원본 변수에는 영향을 미치지 않는다.
 */

let num = 1;
let num2 = num; // 값의 복사가 일어남. => num의 값을 num2에 복사함.
// 두 변수는 메모리에서 별도의 공간에 저장됨. => 서로 독립적으로 존재.
console.log(`num: ${num} , num2: ${num2}`); // 1 1
console.log(num === num2); // true - 엄격한 동등검사

num = 5; // 1 -> 5로 재할당
console.log(`num: ${num} , num2: ${num2}`); // 5 1
console.log(num === num2); // false
// num2는 여전히 이전 값 1을 유지함.
// 이는 num2가 num의 복사본 이기 때문.
console.log("--------");

function changeValue(x) {
  x = 10; // 매개변수에 10이라는 값을 할당.
  console.log("x > ", x);
}
changeValue(num);
console.log("num >>>> ", num); // 5

// (풀이)
// 함수로 전달 될 때, 변수의 값이 복사되어 함수의 매개변수로 전달.
// 따라서 함수 내에서 매개변수의 값을 변경하더라도 원본 변수의 값은 변하지 않음.
// Why? 함수 내에서 사용되는 변수는 그 함수 스코프 내에서만 유효한 "지역 변수"이기 때문.
// = x가 num의 값의 복사본을 가지고 있기 때문.

// #2. pass by reference (참조에 의한 전달)
// - 객체나 배열 같은 참조 타입 전달될 때 사용.
// - 변수의 메모리 위치(참조)가 전달되므로, 함수 내에서 요소를 변경하면 원본 변수도 변경됨.

const obj = { one: 1, two: 2 };
const obj2 = obj; // 동일한 객체의 참조를 갖게 됨.
// obj와 obj2는 같은 메무리 주소를 참조하므로 동일한 객체를 가리킴.
console.log(obj, obj2); // {one: 1, two: 2}, {one: 1, two: 2}
console.log(obj === obj2); // true
console.log(`obj: ${obj}, obj2: ${obj2}`);
console.log(`obj: ${JSON.stringify(obj)}, obj2: ${JSON.stringify(obj2)}`);
// 문자열 템플릿 (${}`)에서는 객체가 "문자열로 변환" 되어 출력함.
// 객체를 문자열 템플릿에서 읽기 좋게 출력하려면?
// JSON.stringify 라는 메소드를 사용함.
// (가볍게)
// JSON.stringify는 "JS 객체 또는 값"을 JSON 형식의 문자열로 변환하는 메서드.
// JSON은 데이터를 표현하는 (경량의) 데이터 형식, 키와 값 쌍으로 표현하는데 주로 사용.
// - 주로 데이터를 네트워크 요청나, 파일 저장에 적합한 문자열로 변환 / ex) 서버로 보낼 때

obj.five = 5;
console.log(obj, obj2);
console.log(obj === obj2); // true
// obj와 obj2는 현재 데이터도 같고 참조값 (address, 주소)도 같다.

const obj3 = { one: 1, two: 2 }; // {one: 1, two: 2}
const obj4 = { one: 1, two: 2 }; // {one: 1, two: 2}
console.log(obj3, obj4);
console.log(obj3 === obj4); // false

// obj3와 obj4는 현재 데이터가 같지만, 서로 다른 별도의 객체이다.
// 즉, 참조값 (address, 주소)가 다르다.

obj3.five = 5;
console.log(obj3, obj4);
console.log(obj3 === obj4); // false
