// 방법 1 : 상태 관리를 따로따로 하는 방법 (UseState 이용)
import React, { useState } from "react";

export default function FruitAnswer() {
  const [fruit, setFruit] = useState("peach.png");
  const [bgc, setBgc] = useState("red");
  const [color, setColor] = useState("black");
  const [text, setText] = useState("");

  const fruitChange = (e) => {
    // onChange={furitChange} 누르는 순간 e 이벤트 객체 들어감
    setFruit(e.target.value);
  };

  const bgcChange = () => {
    setBgc(e.target.value);
  };

  const colorChange = () => {
    setColor(e.target.value); // value 에 black 들어가면 line7의 color가 balck 이 되고, 맨 밑에 style 에서 {color} 사용하면 색상 바뀌는거 보임
  };

  function Typing(e) {
    setText(e.target.value); // onChange 누르면 이벤트 객체 들어오고 -> 변동된 값이 line8의 text로 들어가고 아래 내용부분 {text} 에 변동된 값이 들어가서 화면에 나오게 됨.
  }

  return (
    <div>
      과일:
      {/* select 에서 변동이 일어남 ->  */}
      <select onChange={fruitChange}>
        <option value="peach.png">복숭아</option>
        <option value="apple.png">사과</option>
        <option value="banana.png">바나나</option>
      </select>
      배경색:
      <select onChange={bgcChange}>
        <option value="red">빨강</option>
        <option value="yellow">노랑</option>
        <option value="blue">파랑</option>
      </select>
      글자색:
      <select onChnage={colorChange}>
        <option value="black">검정</option>
        <option value="red">빨강</option>
        <option value="yellow">노랑</option>
      </select>
      <div>
        내용: <input type="text" onChange={Typing} />
      </div>
      <div>
        <img src={fruit} alt="" width={100} height={100} />
      </div>
      {/* bgc 에 값들어와서 배경색 변함 */}
      <div style={{ backgroundColor: bgc, color: { color } }}>{text}</div>
    </div>
  );
}
