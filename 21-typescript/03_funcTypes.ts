// TS 에서의 함수 선언
// #1. 기본 함수 선언
// typescript 에서는 매개변수에 타입을 꼭 지정해줘야함.
// (a,b)만 하면 안됨. 그 뒤에 있는 number 는 return 의 타입도 정해준것임.
function add(a: number, b: number): number {
  return a + b;
}
// 두 매개변수 'a', 'b' 모두 'number' type / 반환 값도 'number' type

// #2. 선택적 매개변수
// - 선택적 매개변수 ('?')는 매개변수 중 "맨 뒤"에 있어야 한다.
function print(a: number, b: number, c?: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}
// #2.2 함수의 리턴값이 없는 함수 = void
//      ㄴ return이 없거나 함수가 단순히 작업을 수행만 할 때

print(2, 4, 6); // 2 4 6
print(2, 4); // 결과는  2 4 undefined  나옴

// #3. 기본값 매개변수
// - 매개변수에 기본 값 할당 가능
// - 매개변수 입력을 안받으면 기본 값 출력
function print2(a: number, b: number, c = 100): void {
  console.log("=================");
  console.log(a);
  console.log(b);
  console.log(c);
}
print2(2, 4, 6); // 2 4 6
print2(2, 4); // 2 4 100

// #4. 매개변수 없는 함수
function sayHello(): void {
  console.log("Hello");
}
sayHello(); // Hello

// #5. void가 아닌 자료형을 리턴하는 함수
// 1.
function sayHello2(): string {
  return "hello";
}

// 2.
function concatString(x: string, y: string): string {
  return x + y;
}
console.log(concatString("안녕", " 하세요"));

// 3.
// 반환될 값 number 라고 예상하고 있으니 :number 해준것임(두 번째 number)
function circleArea(r: number): number {
  return r * r * Math.PI;
}
console.log(circleArea(5));

// #6. 화살표 함수
const squareArea = (x: number, y: number): number => {
  return x + y;
};
console.log(squareArea(3, 5));

// #7. 화살표 함수 & return 구문 생략
// parseInt() : 형변환
const triangleArea = (w: string, h: string): number =>
  (parseInt(w, 10) * parseInt(h, 10)) / 2;
console.log("triangleArea >>> ", triangleArea("3", "4"));

// #8. interface 정의 시 함수 타입 표현
interface Greet {
  name: string; // string 으로 반환받겠다.
  hi(): string; // hi() 메소드도 string 으로 반환받겠다.
  bye(a: number): string; // bye() 메소드 매개변수 들어감, 그리고 string 으로 반환받겠다.
}

// sesac 객체에 Greet 라는 인터페이스를 연동시킴.
const sesac: Greet = {
  name: "sesac",
  hi() {
    return "여기는 " + this.name + " 강동캠퍼스";
    // string 으로 반환받겠다.
  },
  bye(a: number) {
    // bye() 만 빼고 해주거나 하면 안됨 -> 오류남.
    return `작별 인사를 ${a}번 했습니다.`; // string 으로 반환받겠다.
  },
};
// 메서드 내에서 this를 사용하여 객체의 다른 속성에 접근할 수 있다.
// this.name => 현재 객체(sesac)의 name 속성을 참조.
// this = 현재 객체    .name 속성   에 접근
console.log(sesac.hi());
console.log(sesac.bye(5)); // bye() 메소드에 5라는 숫자를 매개변수로 줌.

// #9. never (= 의미론적 타입)
// - 함수의 끝에 절대 도달하지 않는 경우
function goingOn(): never {
  while (true) {
    console.log("go!");
  }
}
// - 무한루프나 예외처리가 필요한 경우 never 타입 명시를 해서 실행하지 못하게 작성하기.
// ~~~~~~~~~~~~~~~~~~~( naver 자체는 실행을 막지는 못함. 실행시키지 말것!!!)
// naver 는 그냥 의미론적인 것임. 현업에서는 거의 안씀!

// #10. 오버라이딩 vs 오버로딩
// 오버라이딩은 '매개변수 목록이 동일'  vs  오버로딩은 '매개변수 목록이 서로 다름'

// ** 오버라이딩
// - 클래스에서 부모 클래스의 메서드를 자식 클래스에서 "재정의"하는 개념
// - 메서드의 이름과 "매개변수 목록이 동일"하며, 자식 클래스에서 새로운 구현을 제공하여
//   부모 클래스의 동작을 변경.

class Animal {
  speak(): void {
    // 반환값이 없으므로 typescript 쓸때는 void 써주기.
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  // 오버라이딩
  speak(): void {
    super.speak(); // 부모 클래스의 speak 메서드 호출
    console.log("Dog barks");
  }
}

const myDog = new Dog();
myDog.speak();

// ** 오버로딩
// - 동일한 메서드 이름을 사용하지만 "서로 다른 매개변수 목록"을 가지는 여러 함수 정의를 제공하는 것.
// - 같은 기능을 여러 방법으로 수행해야 할 때
// 같은 함수 쓸것인데, 여러 방법으로 결과를 내야할때 사용함.
// 동일한 메서드 명이면서 + 매개변수가 서로 다름.

// Ex1)
function greet(person: string): string;
function greet(person: string, age: number): string;

// 함수 구현
function greet(person: string, age?: number): string {
  if (age !== undefined) {
    // undfined 가 아니라면 = age 가 있다면
    return `Hello ${person}, you are ${age} years old`;
  } else {
    return `Hello ${person}`;
  }
}
console.log(greet("Bob", 30));
console.log(greet("Una"));

// Ex2) 함수가 겹쳐도 매개변수가 다르니까 오류없이 실행됨.
function sum(a: string, b: string): string; // 선언부
function sum(a: number, b: number): number; // 선언부

function sum(a: any, b: any): any {
  //  아무거나 들어와도 된다.
  return a + b;
}
// 구현부
console.log(sum("가", "나")); // 가나
console.log(sum(10, 20)); // 30
