const add = require("./1230_01_module");
console.log(add(5, 7));

const math = require("./1230_01_module2");
log(math);
// *1.
// 01_module의 모듈을 불러와 사용.
const add = require("./01_module");
console.log(add(5, 7));

// --------------------------
// *2.
// 01_module2의 모듈을 불러와 사용.
const math = require("./01_module2");
console.log(math);
console.log(math.PI);
console.log(math.E);
console.log(math.add(3, 6));

// --------------------------
// *3.
// 01_module3의 모듈을 불러와 사용.
const data = require("./01_module3");
console.log(data);

// 내부에 있는 변수, 클래스, 메소드 사용은 . 을 이용해서 사용
// 변수 사용
console.log(data.colors);

// 함수 사용
data.sayName("damon");

// 클래스 사용
const Rei = new data.Person("레이", 20);
console.log(Rei);
console.log(Rei.getBornYear());

// --------------------------
// *4.
// 가지고 오고 싶은 것만 가져오기.
const { colors } = require("./01_module3");
console.log(colors);

// --------------------------
// *5.
// 01_module4의 모듈을 불러와 사용
// 바로 내보내는 것 가져오기.
const { sayhi2 } = require("./01_module4");
sayhi2();
