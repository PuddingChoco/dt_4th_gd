// CommonJS 버전

// #2. 개별적으로 내보내기.
const add = (a, b) => a + b;
const PI = 3.141592;
const E = 2.718;

// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.E = E;

// 축약 버전
exports.add = add;
exports.PI = PI;
exports.E = E;
