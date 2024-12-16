let age = Number(prompt("나이를 입력해주세요: "));
if (age >= 20) {
  console.log("성인");
} else if (age >= 17) {
  console.log("고등학생");
} else if (age >= 14) {
  console.log("중학생");
} else if (age >= 8) {
  console.log("초등학생");
} else if (age >= 0) {
  console.log("유아");
}

// let number = Number(prompt('숫자를 입력해주세요!'));
// 1. prompt()로 사용자로부터 값을 입력 받고(문자열)
// 2. number() 문자열 -> 숫자형 형변환.

// #2. if ~ else문
// if (number > 10) {
//     console.log('입력한 수는 10 보다 크다.');
// } else {
//     console.log('입력한 수는 10 보다 작거나 같다.');
// }

// #3. if ~ "else if" ~ else 문
// if (number > 10) {
//     console.log('입력한 수는 10보다 크다.');
// } else if (number === 10) {
//     console.log('입력한 수는 10이다!');
// } else {
//     console.log('입력한 수는 10보다 작다.');
// }

// #4. if ~ "else if" * n ~ else 문
// else는 한번만 사용 가능.
// else if는 여러개 사용 가능.

// if (number > 100 || number < 0) {
//     console.log('입력값이 잘못되었습니다. 숫자의 범위는 0 ~ 100');
// } else if (number >= 90) {
//     console.log('A');
// } else if (number >= 80) {
//     console.log('B');
// } else if (number >= 70) {
//     console.log('C');
// } else if (number >= 60) {
//     console.log('D');
// } else {
//     console.log('F');
// }
