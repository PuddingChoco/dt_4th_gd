// ES6 버전
// package.json - type - module 추가.
// #1. 여러 모듈 내보내기.

const name = ["john", "damon", "matt"];

function subtract(a, b) {
  return a - b;
}

export { name, subtract };
