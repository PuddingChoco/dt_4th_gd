// 비동기처리 방법 v.2
// : Promise (프로미스) 객체
// - 비동기처리 하기 위한 첫번째 방법이 콜백함수 였는데, 콜백 지옥이라는 치명적인 단점이 있음.
// -- 이 단점을 해결하기 위해 ES6부터 등장한 문법 (2015년)
// - 미래에 실패/성공에 대한 결과값을 "약속"한다는 의미.
// - 어떤 작업에 대해 성공, 실패 분리해서 반환
// -- 성공은 then()으로, 실패는 catch() 메서드로 이어서 받음.

// => 성공이든 실패든 무언가의 "최종 결과"
// resolved: 성공
// rejected: 실패

// #1. promise를 생성하는 코드
// - "제작 코드" (Producing code)
/*
function promise1(flag) {
    // 프로미스 객체를 반환
    // - new 연산자를 이용해서 프로미스 객체를 만들고 바로 반환.

    // 실행함수(excutor)가 두 개의 콜백함수 (resolve, reject)를 받음.
    return new Promise(function (resolve, reject) {
        if (flag) {
            resolve(`프로미스 이행(fulfilled) 상태! === 성공! ${flag}`);
        } else {
            reject(`프로미스 거절(rejected) 상태! === 실패... ${flag}`);
        }
    });
}

// #2. promise를 소비하는 코드
// - "소비 코드" (Consuming code)
promise1(5 < 3)
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    });

// 화살표 함수로 표현하면     (화살표 함수 표현시 ( ) 주의 하기!)
promise1(5 > 3)
    .then((result) => console.log(result))
    .catch((result) => console.log(result));
*/
// #####################################
// P) 01_callback.js 에서 콜백함수를 사용해 작성한 코드를 promise를 이용해 바꿔보자.
/*
let product;
let price;

function goMart() {
    console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('고민 끝');
            product = '사이다';
            price = 3000;
            // resolve();

            if (price <= 3000) {
                resolve();
            } else {
                reject();
            }
        }, 3000);
    });
}

function pay() {
    console.log(`상품명 : ${product}, 가격은 : ${price}`);
}

function nopay() {
    console.log('금액 부족 ㅠㅠ');
}

goMart();
pickDrink().then(pay).catch(nopay);
*/
// reject() 반환 -> catch문 실행
// resolve() 반환 -> then문 실행

// ######################################
// # 프로미스 체이닝 (Promise Chaining)
// 목표 : 함수를 이용해 (4 + 3) * 2 - 1 연산.
// => sub(mul(add(4, 3), 2), 1) : add -> mul -> sub

// i) 콜백함수를 이용해 처리한 경우
/*
function add(n1, n2, callback) {
    setTimeout(function () {
        const result = n1 + n2; // 두 숫자 n1과 n2를 더함.
        callback(result); // 콜백 함수에 결과(result)를 전달.
    }, 1000);
}

function mul(n, callback) {
    setTimeout(function () {
        const result = n * 2;
        callback(result);
    }, 700);
}

function sub(n, callback) {
    setTimeout(function () {
        const result = n - 1;
        callback(result);
    }, 500);
}

add(4, 3, function (x) {
    console.log(x); // 7

    mul(x, function (y) {
        console.log(y); // 14

        sub(y, function (z) {
            console.log(z); // 13
        });
    });
});
*/
// 가독성 불편함.

// ii) 프로미스 체이닝을 이용한 경우
function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n1 + n2; // 7
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n * 2; // 14
      resolve(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n - 1; // 13
      resolve(result);
      // reject(new Error('의도적으로 에러 발생'));  new Error 안써도 됨. 그냥 더 에러처럼 보이라고 넣어준거.
    }, 500);
  });
}

add(4, 3)
  .then(function (result) {
    console.log(result); // 7

    return mul(result); // return mul(7)
  })
  .then(function (result) {
    console.log(result); // 14

    return sub(result);
  })
  .then(function (result) {
    console.log(result); // 13
  })
  .catch(function (error) {
    console.log(error); // console.error(error); 로 해도 됨.
    // 또는 그 앞에
    // error.message = '진짜 큰일남'; 이런거 써줘도 됨.
  });
