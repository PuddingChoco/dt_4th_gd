// 실습1
const person = {
  name: "이몽룡",
  age: 18,
  like: ["강아지", "고양이"],
  isMarried: true,
  girfriend: { name: "성춘향", age: 16 },
};

console.log(person, typeof person);

// const cat = {
//     name: "장화",
//     age: 10,
//     isCute: true,
//     mew: function () {
//       return "먕";
//     },
//   };
//   console.log(cat); // {name: '장화', age: 10, isCute: true, mew: ƒ} - object 자체를 출력
// 실습2
// 성적 평균 구하는 프로그램 만들기.
// prompt() : JS에서 사용자로부터 입력을 받을 때 사용하는 브라우저 내장 함수.

// JS가 자동형변환 해준 모습.
let mathScore = "77";
let engScore = "88";
mathScore = Number(mathScore);
engScore = Number(engScore);
avgScore = (mathScore + engScore) / 2;
console.log(`평균점수는 ${avgScore} 입니다`);
