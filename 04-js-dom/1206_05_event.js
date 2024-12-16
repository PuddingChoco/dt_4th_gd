// js Event(이벤트)
// 어떤 사건을 의미
// ex. 버튼 클릭, 웹페이지 로드, 키가 눌렸을 때,...

// 이벤트에 "함수" 등록 방법 2가지.
// - 1. "HTML" 상에서 onXXX 속성으로 등록.
// - 2. js 에서 listener를 사용해 등록.

// #1. onXXX 속성으로 등록.
function clickH1() {
  alert("제목 클릭! 함수 이용");
}

// #2. addEventListener
/**
 * 기본 구조
 *
 * element.addEventListener(event, function)
 *
 * event: 처리할 이벤트의 이름 (ex. click, keyup)
 * function: 이벤트 발생 시 실행할 함수
 *
 * - 여러 개의 이벤트 리스너 등록 가능.
 */

const btn1 = document.querySelector(".btn--black");
const btn2 = document.querySelector(".btn--green");
const btn3 = document.querySelector(".btn--blue");
const btn4 = document.querySelector(".btn--red");
const container = document.getElementById("container");

// 1개의 요소에 여러개의 이벤트 리스너 등록
btn1.addEventListener("click", function () {
  alert("버튼 1을 클릭하셨습니다!");
});

btn1.addEventListener("mouseover", function () {
  btn1.style.backgroundColor = "aqua";
});

btn1.addEventListener("mouseout", function () {
  btn1.style.backgroundColor = "rgb(44, 44, 44)";
});

// 화살표 함수
btn2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.style.backgroundColor = "pink";
  div.innerHTML = "Hi~!";
  container.append(div);
});

// 함수명을 매개변수로 받아서 이벤트 실행.
btn3.addEventListener("click", changeColor);

function changeColor() {
  const divs = document.querySelectorAll("#container div");
  console.log(divs);
  // 해당 요소들 전부 CSS 변화를 적용 시키기 위해 for..of 반복 사용
  for (let div of divs) {
    div.style.backgroundColor = "skyblue";
  }
}

// this 사용법
btn4.addEventListener("click", changeBtnColor);

function changeBtnColor() {
  console.log(this); // 자기 자신 ==> btn4
  console.log(this.parentNode); // this를 이용해 부모 접근
  this.style.backgroundColor = "yellow";
}

// * this 키워드
// - 이벤트가 발생한 DOM 요소를 가르킴.
// - 화살표 함수에서는 동작 방식이 다르게 작용될 수 있습니다.

// * this 사용 주의 *
// 일반함수: 'this'는 이벤트를 발생시킨 DOM 요소를 가르킴.
// 화살표함수: 'this'는 상위 스코프를 따름. (window, undefined)

// key Event
// 이벤트 객체 (e)
// - DOM 이벤트가 발생할 때 브라우저가 자동으로 생성하는 객체.
// - 브라우저는 발생한 이벤트에 대한 다양한 정보를 담은 "이벤트 객체 (event object)"를 이벤트 리스너에 전달.
// ex. mousedown 이벤트 발생 -> 이벤트 객체는 (마우스 좌표, 버튼 번호) 정보를 가짐.
// ex. keydown 이벤트 발생 -> 이벤트 객체는 (키 코드값, 어떤 키가 눌렸는지에 대한 정보) 정보를 가짐.

const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", function (event) {
  // event 객체
  // 이벤트에 대한 다양한 정보를 포함.
  console.log(event); // 이벤트 객체에 대한 정보 출력
});

input.addEventListener("keydown", function (e) {
  console.log(e);
  console.log(e.code); // 눌려진 키의 고유 코드
  console.log(e.key); // input에 입력된 값.
  console.log(e.target); // 이벤트가 발생한 대상 요소를 참조.

  if (e.code === "ArrowUp") {
    console.log("▲");
  } else if (e.code === "ArrowDown") {
    console.log("▼");
  } else {
    console.log("others");
  }
});

// 폼 이벤트
const todoForm = document.getElementById("todo-form");
const todos = document.querySelector(".todos");

todoForm.addEventListener("submit", (e) => {
  console.log("submit");
  // submit : 폼에 대한 내용을 제출.
  // 제출하는 순간, 새로고침 일어납니다.
  e.preventDefault(); // 폼 submit 이벤트가 새로고침 되는 걸 막음. = 폼 제출을 막음

  const todoInput = document.querySelector('input[name="todo"]');
  // console.log(todoInput.value); // 입력된 값.

  const newTodo = todoInput.value.trim(); // 양쪽 공백 제거

  if (newTodo !== "") {
    const newTodoLi = document.createElement("li"); // <li></li>
    newTodoLi.append(newTodo); // <li>input 입력 값</li>
    todos.append(newTodoLi);
  }

  // input 창 초기화
  todoInput.value = "";
});

/**
 * * change
 * : input요소에 변경이 일어나고, 다른 요소를 클릭해서
 * input이 포커스 아웃(blur) 처리 되었을 때 일어나는 이벤트.
 */

const chgInput = document.querySelector("#change-input");
chgInput.addEventListener("change", function (e) {
  console.log("change!!");
  console.log(e.target.value);
});

/**
 * * input
 * : input에 값이 입력될 때마다 이벤트 발생.
 */
chgInput.addEventListener("input", function () {
  console.log("입력 발생!");
  // console.log(this.value);
  const div = document.querySelector(".intro");
  div.textContent = this.value;
});
