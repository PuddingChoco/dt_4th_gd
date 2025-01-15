import React from 'react'


export default function Select() {
  return (
    과일:
      <select onChange={(e) => {
        // data state 값의 fruit 값을 변경해주기

        // 이벤트 객체 눈으로 확인
        console.log(e.target.value);

        // spread 연산자 (...연산자)
        // ...data: 이전 값 그대로
        // - 객체의 복사본을 만들 때 유용한 JS 문법
        // - 객체의 모든 속성을 펼쳐서 새로운 객체를 만들어줌

        // 'fruit' 값만 변경이 일어나서 fruit만 바꿔줌
        // 'fruit' 속성만 선택된 값으로 덮어 씌워짐
        // = 'fruit' 속성만 변경되도 나머지는 그대로 유지
        // -> 불변성 유지!
        // ...data 로 이전값 그대로 가지고 오고, fruit만 바꿔줌 
        // setData() 에 들어있는것은 '인자'
        // peach 되면 부모 컴포넌트인 FruitAnswer2의 fruit: "peach" 로 바뀜
        setData((data)=>{return {...data, fruit:e.target.value}})
      }}
      >
        <option value="peach.png">복숭아</option>
        <option value="apple.png">사과</option>
        <option value="banana.png">바나나</option>
      </select>
      
      배경색:
      <select onChange={(e) => {
        setData((data) => {
            return{...data, background:e.target.value}
        })
      }}>
        <option value="red">빨강</option>
        <option value="yellow">노랑</option>
        <option value="blue">파랑</option>

      </select onChange{(e)=> {
        setData((data)=> {
            return{...data, adfaddfdf}
        })
      }}>
      글자색:
      <select onChnage={}>
        <option value="black">검정</option>
        <option value="red">빨강</option>
        <option value="yellow">노랑</option>
      </select>
  )
}
    
