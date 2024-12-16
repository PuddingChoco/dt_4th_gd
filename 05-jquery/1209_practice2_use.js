// teacher
let colors = ["red", "orange", "yellow", "green", "blue", "purple"];

// removeClass & addClass
// function changeColor() {
//     let currentClass = $('div').attr('class'); // 현재 클래스 가져오기.
//     console.log(currentClass); // red

//     let currentIndex = colors.indexOf(currentClass);
//     console.log(currentIndex); // 0

//     // #1. 다음 색상 전환
//     // currentIndex : 0 ~ 5 사이 숫자
//     // colors.lenght - 1 : 5
//     // let nextClass =
//     //     currentIndex === colors.length - 1
//     //         ? colors[0]
//     //         : colors[currentIndex + 1];

//     // console.log('nextClass >>>> ', nextClass);

//     // #2. Random 색상 전환
//     // 0 <= x < 6 --- 5.xxxx
//     let randomIndex = Math.floor(Math.random() * colors.length); // 정수 0 <= x < 6
//     let nextClass = colors[randomIndex];

//     // 클래스 교체
//     $('div').removeClass(currentClass).addClass(nextClass);
// }

// 해설 (switchClass())
// SwitchClass(제거할 클래스, 추가할 클래스, [duration])
// - 애니메이션 효과
// - jQuery 메서드가 아님.
// - jQuery UI 라이브러리 필요.

function changeColor() {
  let currentClass = $("div").attr("class"); // 현재 클래스 가져오기
  console.log(currentClass); // red

  let currentIndex = colors.indexOf(currentClass);
  console.log(currentIndex); // 0

  currentIndex === colors.length - 1
    ? $("div").switchClass(currentClass, colors[0], 1000)
    : $("div").switchClass(currentClass, colors[currentIndex + 1], 1000);
}

// me (동작안됨) addeventlistener is not a function 에러
// let colors1 = ["red", "orange", "yellow", "green", "blue", "purple"];

// TODO2: changeColor 함수 내부 작성

// function changeColor() {
//   let currentClass = $("div").attr("class");
//   currentClass.on("click", function () {
//     for (let color of colors1) {
//       $("div").removeClass(currentClass).addClass(color);
//     }
//   });
// }
// for (let i = 0; i <= colors1.length; i++) {\

// $("div").css("background-color", colors1[i]);
//$("div").style.backgroundColor = colors1[i];
//     }
//   });
// }

//   for (let i = 0; i <= colors.length; i++) {
//  $("div").style.backgroundColor = colors[i];

// $(".p-dmg").click(function() {
//   $(".p-dmg").css('color','red');
// });

// $(".p-dmg").click(function() {
//   $(this).css('color', blue);
// })

// $('.num').on('click',function() {
//   $(this).css('color', blue);
// })

//   const color = $("div").attr("class");
//   console.log(color);
//     console.log("a");
//   .removeClass(colors[i])
//   .addClass(colors[i + 1]);
// this.style.color = "red";
// colorsJs.forEach((item) => {
//     item.addEventListener("click", function () {
//       this.style.color = "red";
//     });
//   });
