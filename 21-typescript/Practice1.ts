// 튜플 타입 선언과 할당 동시에
// 1.
let olimpic_newgame: [[string, string], boolean] = [
  ["쇼트트랙", "혼성계주"],
  true,
];
console.log(olimpic_newgame);
olimpic_newgame[1] = false;
console.log(olimpic_newgame);

// 2.
// let olimpic_newgame: readonly [[string, string], boolean] = [
//   ["쇼트트랙", "혼성계주"],
//   true,
// ];
// olimpic_newgame[1] = false;
// console.log(olimpic_newgame);
