const a = Number(prompt("0에서 10000까지의 숫자 중 하나를 입력하세요"));

// console.log(a, typeof a);

function findNumber(a) {
  if (a < 0 || a > 10000) {
    console.log("0과 10000사이의 숫자를 입력해 주세요");
  } else if (a % 2 == 1 && a % 13 == 0) {
    console.log(`${a} 는 홀수이면서 13의 배수입니다.`);
  }
}

findNumber(a);
