// *1.
// 02_module 사용.
// .js 확장자 명을 정확히 붙혀줄 것. - Node.js가 모듈을 찾지 못할 수 있음.
import { name, subtract } from "./02_module.js";
console.log(name);
console.log(subtract(5, 3));

// *2.
import { add, mul } from "./02_module2.js";
console.log(add(3, 8));
console.log(mul(2, 4));

// *3.
// default로 내보내진 모듈을 가져올 땐 { } 사용하지 않음.
import div from "./02_module3.js";
console.log(div(4, 2));

// *4.
// 별칭(Alias) 사용
// - 가져오는 변수명 변경
import { add as addition, mul as multifly } from "./02_module2.js";
console.log(addition(5, 3));
console.log(multifly(5, 3));
