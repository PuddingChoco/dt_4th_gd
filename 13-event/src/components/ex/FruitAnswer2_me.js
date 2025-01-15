// 방법2:
import React, { useState } from "react";
import Select from "./Select";

// 부모 컴포넌트 (FruitAnswer2 가 부모 역할)
// 상태 관리를 한번에 하는 방법
export default function FruitAnswer2() {
  // #1. 초기값 설정
  const [data, setdata] = useState({
    fruit: "apple",
    background: "black",
    color: "white",
    content: "text",
  });
  console.log(" >>>");

  return;
  <>
    {/* prop를 넘겨줄건데, setData 함수를 넘겨줘야 state 변경이 가능 */}
    {/* props 자체만으로는 데이터 못바꿈. 부모로부터 자식으로만 데이터 갈 수 있고, 읽기전용임. 근데 ~~ 하면 편법으로 가능  */}
    <div>
      <Select setData={setData}></Select>
    </div>
    <div>
      <Input setData={setData}></Input>
    </div>
    <div>
      {/* Result 는 화면에 뿌려주면 되기만 하면 되니까 {data} 만 하면 됨 */}
      <Result data={data}></Result>
    </div>
  </>;
}
