// only TS type

// #1. 튜플 (Tuple)
// - 튜플은 고정된 개수의 요소를 가짐.
// - 각 요소의 타입이 미리 지정된 배열.
// - 각 요소의 순서가 중요하며 순서에 따라 타입이 다를 수 있음.

// [ 튜플 타입 선언 ]
let drink: [string, number];

// [ 튜플 값 할당 ]
drink = ["color", 1];

// [ 튜플 타입 선언과 할당을 동시에 하는 법 ]
let drink2: [string, string] = ["cola", "pepci"];
// 튜플의 데이터를 변경할 때에도, 배열의 데이터를 변경했던 것처럼 인덱스로 접근.
// 또한, 배열의 일부 메소드들도 사용 가능.

drink2[0] = "zeroCola";
drink2[1] = "zeroPepci";
console.log("drink2 >>> ", drink2);

drink2.push("good"); // push() 는 배열 메소드
// 튜플의 한계 (아래 설명 참고)
console.log("drink2 >>> ", drink2);
/**
 * (!) 튜플의 숨겨진 한계
 * : 길이와 타입이 정해진 것처럼 보이지만, push 메소드가 동작하므로 정의가 깨짐.
 *   ㄴ 튜플이라 고정된 개수가 변하면 안되는데 변해버림.
 *
 * - 타입 시스템의 의도와 어긋나는 이러한 동작을 방지하고자 한다면,
 *   as const를 사용하거나, readonly 키워드를 사용하여 튜플을 불변으로 만들 수 있다.
 *
 * ------추가설명(me)------------------
 * push() 해서 배열이 늘어나면 안됨. typescript 에서 tuple 사용하는건 고정된 개수나 요소 사용하려고 하는것인데, 의도한 시스템과 어긋난 동작임. typescript의 한계임(타입까지는 검사를 하지만, 배열이 늘어나는것까지 검사하지는 못함) 방지하는 방법은 =>  as const   또는  readonly 사용하면 됨.
 */

// 방법1: readonly
// - 요소의 타입 순서와 길이를 완벽히 고정.
// - 일부 배열 메서드 사용 가능 (복사본 생성시 정도..?)
let drink3: readonly [string, number] = ["cider", 2000];
// drink3.push('hello'); // Error (이렇게 하면, push() 하면 바로 오류남)
console.log("drink3 >>> ", drink3);

// 참고) 실행하려고  ts-node 02_onlyTsType.ts  매번 터미널에 입력하는거 귀찮음 => 백엔드에서 이런거 쉽게 하려고 패키지 사용함  npm i -g nodemon 설치하면 됨.  그리고 nodemon --ext ts --exec ts-node 02_onlyTsType.ts 이렇게 입력하면,
// ext: 뒤에 있는것을 (확장자가) .ts 파일의 변경을 감지해라
// exec: 변경 가지하면 ts-node 다시 실행시켜라

// 방법2: as const
// - 해당 튜플은 불변 상태가 됨.
// - 모든 배열 메서드 사용 불가
let drink4: [string, number] = ["cider", 4000] as const;
// let drink4 =['cider', 4000] as const; 암묵적 추론으로 string, number 안써도 얘가 알아서 해주긴 함. 근데 써주는게 좋음.
// drink4.push('hello');
console.log("drink4 >>> ", drink4);

// [ 튜플 나머지 연산자 ]
let restTuple: [string, ...number[]] = ["damon", 10, 20, 30];
// ...number[] 애는 모든 나머지 다를 얘기하므로, let restTuple: [string, ...number[], string] = ["damon", 10, 20, 30];  이런식으로 하면 오류남.  항상 나머지는 마지막에 쓰기!  즉,  ...spread 연산자는 항상 마지막에 쓰기!
// ...spread 연산자는 항상 마지막에 작성!
console.log("restTuple >>> ", restTuple);

// #############################################
// ** Enum **
// - 사용하는 이유는?
// - 1. 분야별로 종류를 정의하여 명확하게 사용.
//      ㄴ 사용자 권한 분야만 따로 모아서 정의(열거)해두고, 또 다른 분야만 따로 모아서 정의해두고,
//      ㄴ 의미를 명확하게 파악하여 사용할 수 있다.
// - 2. 하드코딩을 줄이기 위해서

// [ 숫자 값 지정 가능 ]
// enum Auth {
//     admin = 0,
//     user = 1,
//     guset = 2,
// }

// enum Auth 처럼 이름은 대문자로 시작해주는게 좋음 (그룹임을 나타내기 위해서)

// - #1. enum은 기본으로 0부터 1씩 증가하는 값을 갖는다.
enum Auth {
  admin, // 0 : 별도로 값을 지정해주지 않으면 0부터 시작.
  user, // 1 : 이전 값에 1씩 더해짐.
  guest,
}

console.log(Auth);

enum Menu {
  pizza = 4000,
  pasta = 5000,
  chicken, // 5001 : #2. 정의되지 않은 값은 이전 값에 1씩 더해짐.
}

console.log(Menu);
// {
//     '4000': 'pizza',
//     '5000': 'pasta',
//     '5001': 'chicken',
//     pizza: 4000,
//     pasta: 5000,
//     chicken: 5001  --> 정의되지 않은 값은 이전 값에 1씩 더해짐
//   }

// #3. 문자열 지정 가능
enum Cafe {
  americano = "아메리카노",
  latte = "카페라떼",
}
console.log(Cafe);
console.log(Cafe.americano);
console.log(Cafe.latte);

// #3-2. 문자열 & 숫자 혼합 지정 가능
enum Cake {
  choco,
  vanilla,
  mango,
  kiwi = "kiwi",
}
console.log(Cake);
// {
//     '0': 'choco', ---> 양방향 매핑 지원.  숫자로 choco 접근할 수 있고 (아래보기)
//     '1': 'vanilla',
//     '2': 'mango',
//     choco: 0,   ---> choco로 숫자에 접근할 수 있음.
//     vanilla: 1,  ---> 문자열 없는 애들은 순서대로 숫자가 나오고,
//     mango: 2,
//     kiwi: 'kiwi' ---> 문자열 있는 애들은 문자열 나옴.
//   }

// #4. JS 객체와의 차이.
/**
 * ##1. 양방향 매핑
 * - '키'를 통해 값을 찾을 수 있음.
 * - '값'을 통해 키를 찾을 수 있음.
 *
 * 'TS'의 'enum'은 JS로 컴파일 될 때, 양방향 매핑 지원을 위해 변환.
 * 이 변환 과정에서 'enum' 값과 키가 모두 포함된 객체가 생성되며, 로그에 양방향 매핑이 포함된 형태로 출력.
 *
 * ##2. 'enum'은 한번 생성되면, 속성 추가 및 수정 불가
 *
 * ##3. 'enum'은 속성 값으로 숫자, 문자열만 할당 가능.
 */

// ex)
// enum Food {
//     pizza = 4000,
//     pasta = 5000,
//     burger = 2000,
// }
// console.log(Food.pasta); // 5000 ('키'를 통해서 값을 찾음)
// console.log(Food[5000]); // pasta ('값'을 통해서 키를 찾음)

// #############################################
// ** Any **
// 1. 명시적 타입 지정
let val: any = true;
val = "dog";
console.log("val >>> ", val, typeof val);

// 2. 암묵적 타입 지정
let val2;
val2 = false;
val2 = "cat";
console.log("val2 >>> ", val2, typeof val2);

// #############################################
// ** 타입 별칭 (Type Alias) **
// - TS에서 특정 타입에 대해 새로운 이름(별칭)을 만들어 재사용 할 수 있도록 해주는 기능 (= 사용자 정의 타입)
// - 재사용성 증가, 유지보수 용이

type Gender = "Female" | "male";
// - Gender 타입은 "Female" 또는 "male" 값만 가질 수 있도록 정의됨.

const gender: Gender = "Female"; // o (string 대신 Gender 해줘도 잘 됨)
// const gender2: Gender = 'female'; // x 오류 발생 (대소문자 구분)

// * 튜플(Tuple)과 타입 별칭을 활용
// - 엄격하고 명확히 데이터를 관리해야 하는 작업일 경우 이점.
type UserInfo = [number, string, number]; // 유저에 대한 타입 지정
let vip1: UserInfo = [1, "Damon", 5000]; // 재사용성이 좋아서 -> 가져다 쓰면 이 타입의 형식으로 계속 찍어낼 수 있음
let vip2: UserInfo = [2, "Yuni", 3000];

// #############################################
// * Interface
// #1. 객체 타입 정의
// - interface 키워드 사용
// 키에 대한 타입을 정의해주면 됨
// 인터페이스는 객체구조 정의할때 씀
// 키에대한: 타입
interface Crew {
  name: string;
  age: number;
  //   readonly age: number;
  exp: boolean;
}

// 내가 쓰고싶은 객체에 가져다 쓰면 됨. 근데, 3개면 3개 다 써줘야함. 대신 순서는 상관 없음.

const crew1: Crew = {
  name: "Damon",
  age: 20,
  exp: false,
};

// #2. 선택적 속성
// - 모든 속성이 필수는 아님!
// - '?' 붙이기
interface Crew2 {
  name: string;
  age?: number; // ? 붙이면 age는 선택적 속성이 됨
}
const crew2: Crew2 = {
  name: "layra",
};
// crew2 객체는 age 속성이 없어도 유효함

// #3. readOnly 읽기 전용 속성
// - 객체가 초기화 된 후에는 변경할 수 없음.
const crew3: Crew = {
  name: "John",
  age: 22,
  exp: true,
};
crew3.name = "Son";
// crew3.age = 10; // readyonly는 수정 불가능!
console.log("crew3 >>>> ", crew3);

// #4. 인터페이스 상속(확장)
enum Score {
  Aplus = "A+",
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  F = "F",
}

interface Team extends Crew {
  // 인터페이스에 인터페이스를 상속받은것
  // 인터페이스는 객체구조 정의할때 씀
  position: string;
  readonly personnel?: number;
  [grade: number]: Score; // Score 는 enum 타입
}

// 참고) 아까 위에서 한 Crew
// interface Crew {
//     name: string;
//     readonly age: number;
//     exp: boolean;
//   }

// Crew 한테 상속받았기 때문에 Crew 에 대한 속성들도 다 적어줘야함.
const first: Team = {
  name: "Damon",
  age: 30,
  exp: true,
  position: "FrontEnd",
  4: Score.Aplus, //  [grade: number]: Score;
  // '1': 'A+'
};
console.log("first >>> ", first);

/**
 *  [grade: number]: Score;
 *
 * ** 인덱스 시그니처
 * - 객체의 키와 값의 타입을 동적으로 정의
 * - 즉, 객체의 속성이 사전에 정해져 있지 않고, 임의의 키로 접근할 수 있도록 허용할 때 사용
 * = 객체가 어떤 키로든 접근할 수 있도록 허용하고, 키와 그에 대응하는 값의 타입을 정의 할 수 있는 방법을 제공.
 *
 * - 구문
 * interface 인터페이스명 {
 *      [key: 타입]: 값의 타입;
 * }
 *
 * //  [grade: number] - (숫자)인 키
 * //  [grade: number]: string - (숫자)인 키를 가진 객체가 (문자열) 값을 가질 것임을 명시.
 * //  Ex) 1: "Great"
 * //  기존 속성과 시그니처 간의 일관성을 유지하는 것이 중요.
 */

/** ---------추가설명(me)----------------------------
 * [grade: number]: Score;
 * [key  :   타입]: 값의타입;
 *
 * 자세히 설명--->
 * [grade: number] - (숫자)인 키
 * [grade: number]: string - (숫자)인 키를 가진 객체가 (문자열) 값을 가질 것임을 명시.
 * ex)      name      : string;  키에대한 : 타입
 * ex) [grade: number]: Score; // Score 는 enum 타입
 *
 * ex)      name     : string;  키에대한 : 타입
 * ex)        1      : "Great"
 * // 기존 속성과 시그니처 간의 일관성을 유지하는것이 중요.
 */

// 값 변경 (점 접근법, 대괄호 접근법)
first.position = "Backend";
first["age"] = 25;
console.log("first >>> ", first);

// #############################################
// ** type vs enum
type Money1 = 500 | 700 | 1000;
enum Money2 {
  a = 500,
  b = 700,
  c = 1000,
}
const mon1: Money1 = 500;
const mon2: Money2 = Money2.a;
console.log(mon1);
console.log(mon2);
/**
 * 목적:
 * type - 복잡한 타입을 정의하고, 코드에서 타입을 재사용하고 가독성을 높이기 위해 사용.
 * enum - 값들의 집합을 정의하고, 이를 상수처럼 사용하기 위해 사용
 */

// * 교차 타입 : 두 개 이상의 타일을 합쳐서 하나의 객체가 모든 속성을 포함하도록 만듬 ( 여기서 타입은 '인터페이스' 다)
interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string; // 공동퇸 속성을 가지고 있어도 상관없음. 한번만 해주면 됨.
  color: string;
  price: number;
}

// 1. Type 별칭을 사용해서 교차 타입
// type ToyCar = Toy & Car; // '&' 연산자 사용

// 2. 인터페이스를 사용한 교차 타입
// 위의 Toy와 Car 를 합쳐주려면, 타입 별칭으로 하면 됨.
interface ToyCar extends Toy, Car {}
// 인터페이스로 상속받음. 근데 {} 중괄호 이거 왜함??? -->
// {} : 별도의 새로운 속성을 추가하지 않고 기존의 인터페이스들(Toy, Car)을 **그대로 상속**하려는 목적

const toyCar: ToyCar = {
  name: "tayo",
  start() {
    console.log("출발!");
  },
  color: "blue",
  price: 5000,
};
console.log(toyCar);

// ** type 사용 예시
type Gender2 = "F" | "M";
type Drama = {
  name: string;
  age: number;
  like?: string[]; // ? 이기 때문에 아래에서 활용해도 안해도 됨.
  gender: Gender2; // 위에서 정의해줬으니 꼭 'F' 또는 'M' 둘 중 하나여야 함.
};

const Ok: Drama = {
  name: "옥씨부인전",
  age: 15,
  gender: "F", // gender 는 명시해서 작성해줘야함.
};
console.log(Ok);
