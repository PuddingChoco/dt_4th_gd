// #1. onXXX 속성으로 등록.
function changeColor() {
  const color = Math.random();
  console.log(color);
  if (0 <= color <= 0.3) {
    div.style.backgroundColor = "red";
  } else if (0.4 <= color <= 0.7) {
    div.style.backgroundColor = "green";
  } else {
    div.style.backgroundColor = "blue";
  }
}
