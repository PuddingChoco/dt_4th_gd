// jQuery 란?
// - JS의 라이브러리로 DOM 조작, 이벤트 처리, 애니메이션, Ajax 요청을
//   쉽게 구현할 수 있도록 설계.
// - JS 코드의 간결성과 생산성을 높이기 위해 만들어짐.

// * 구문
// $(CSS 선택자).동작함수()

// - $() : HTML 요소를 선택하는 함수
// - 동작함수 : 선택된 요소에 대해 원하는 동작 수행.

// let div1 = document.getElementById('div1');
// console.log(div1);

console.log($("#div1")); //ce {0: div#div1, length: 1}
// ce : jQuery 객체가 내부적으로 사용하는 이름.
// jQuery 객체를 생성하고 초기화하는 함수.

// #1. 순수 자바스크립트
function submitJS() {
  // 요소 선택
  const div1 = document.getElementById("div1");

  // div 내용을 변경
  div1.innerText = "반갑습니다!";

  // div border style 추가
  div1.setAttribute("style", "border: 2px solid red;");
}

// #2. jQuery
function submitJquery() {
  // 요소 선택
  const div1 = $("#div1");

  // div 내용을 변경
  div1.text("안녕히 가세요~!");

  // div border style 추가
  // div1.css('border', '2px dotted blue');
  div1.attr("style", "border: 2px dotted blue;");
}

//////////////////////////////////////////
const colorsJs = document.querySelectorAll(".color");
const colorsJquery = $(".color");

console.log(colorsJs); // NodeList(4) [li.color, li.color, li.color, li.color]
console.log(colorsJquery); // ce.fn.init {0: li.color, 1: li.color, 2: li.color, 3: li.color, length: 4, prevObject: ce.fn.init}

// Q) js li 요소 클릭시 글씨 색상 빨간색
// #1. 순수 자바스크립트
// colorsJs.addEventListener('click', () => {
//     colorsJs.style.color = 'red';
// });
// # 에러발생
// TypeError: colorsJs.addEventListener is not a function
// 유사 배열(객체)에 이벤트 리스너를 추가하려고 했기 때문! - 배열 자체가 이벤트리스너 사용 불가.
// 배열의 각 요소에 대해 이벤트리스너를 추가해야 하므로 "반복"해야함.

colorsJs.forEach((item) => {
  item.addEventListener("click", function () {
    this.style.color = "red";
  });
});

// Q) jquery li 요소 클릭시 배경 색상 하늘색
// #2. jQuery
// * .on() 메서드 존재.
// - jQuery에서 사용하는 이벤트 전용 메서드.
// - 순수 JS에서 on 메서드 사용 불가.
colorsJquery.on("click", function () {
  console.log("this >>>> ", $(this));
  $(this).css("background-color", "skyblue");
});
