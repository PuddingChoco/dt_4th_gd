import React, { useState } from "react";

export default function Alphabet() {
  // 배열 ex
  // const [alphabet, setAlphabet] = useState(['D', 'e', 'm', 'O']);

  // 배열, 안에는 객체 형태 ex
  const [alphabet, setAlphabet] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "p" },
    { id: 3, alpha: "p" },
    { id: 4, alpha: "l" },
    { id: 5, alpha: "e" },
  ]);

  // input 데이터 상태 관리
  const [inputAlpha, setInputAlpha] = useState("");

  // #1. 글자 추가 기능
  const addAlpha = () => {
    // [Quiz] input이 빈 값이라면 alphabet 상태가 변경되지 않도록 하기.
    if (inputAlpha.trim().length === 0) {
      // trim: 양쪽 다 잘라내고 내용만 가져옴.
      return;
    }

    // * concat
    // - (배열, 문자열)을 결합하는데 사용되는 메서드.
    // - 기존 (배열, 문자열)을 변경하지 않고, 주어진 배열이나 값들을 "새로운" (배열이나 문자열)로 결합하여 반환.
    const newAlpha = alphabet.concat({
      id: alphabet.length + 1,
      alpha: inputAlpha,
    });
    setAlphabet(newAlpha); // id: 6 인 새로운 애가 새로 추가되서 새로운 배열이 됨 (newAlpha 를 새로운걸로 바꿔치기함. 그러나, 리액트 DOM 특성상 바뀐부분만 추가해서 바꿔준것임)
    setInputAlpha(""); // InputAlpha 상태값이 빈 문자열로 초기화됨
    console.log("newAlpha >>> ", newAlpha);
  };

  // #2. 키보드 이벤트
  const handleKeyDown = (e) => {
    console.log(e.nativeEvent.isComposing);

    /**
     * (!) 한글 입력시, 2개씩 입력되는 현상
     * - IME(입력기) 사용 시 발생하는 현상
     * (한글, 일본어, 중국어는 한 글자에 여러개 조합되어 있어서 언제 끝날지 모르므로 이런 현상 일어남. 알파벳은 하나하나라서 이런 현상 없음)
     *
     * - e.natvieEvent.isComposing : 입력중인 상태를 나타내는 속성
     * - e.natvieEvent.isComposing === true : 사용자가 IME로 아직 문자 입력 중 (뷰포트 입력창에 빨간줄 쳐짐)
     * - e.natvieEvent.isComposing === false : 입력이 확정되어 최종 문자로 처리 가능 상태
     */
    // 해결해보면---> (조건식은 true 안넣어주면 그냥 true임. 궃이 === true 안해줘도 됨)
    // IME 입력 중일 때는 처리하지 않는다.
    if (e.nativeEvent.isComposing) return;

    console.log(e);
    console.log(e.code);
    console.log(e.keyCode);

    if (e.code === "Enter") {
      addAlpha();
    }

    if (e.keyCode === 13) {
      addAlpha();
    }
  };

  // #3. 글자 삭제 기능
  const deleteAlpha = (targetId) => {
    console.log("targetId >>> ", targetId); // targetId : 더블클릭 하여 삭제될 요소의 key(id)

    // 삭제할 ID와 일치하지 않는 애들로 새로운 배열 생성.
    const newAlpha = alphabet.filter(
      (alpha) => alpha.id !== targetId // [1, 2, 3, 5] 일치하지 않으면 일단 패스
    );
    setAlphabet(newAlpha);
  };

  // #4. *이벤트 위임 방식*
  const handleDoubleClick = (e) => {
    // 이벤트 핸들러가 ol 요소에 설정되어 있기 때문에,
    // - 이벤트 위임을 통해 이벤트가 발생한 실제 요소가 무엇인지 확인하고,
    // - li 태그인 경우에만 삭제 기능을 실행토록 하기 위함.

    // 이벤트가 발생한 요소가 li 태그인지 확인
    if (e.target.tagName === "LI") {
      console.log(e.target);

      console.log("e.target.id >>>", e.target.id); // .key 는 undefined로 나옴(읽을수가 없다고)
      console.log("타입 :", typeof e.target.id); // type이 string 으로 나옴
      // id 속성으로 가져오는 값은 "문자열"로 반환

      const targetId = Number(e.target.id); // 변수에 담아서 쓰는게 가독성 좋다
      deleteAlpha(targetId);
    }
  };

  return (
    <>
      <h1>Map & Filter</h1>
      <ol>
        {/* 배열 ex */}
        {/* return 키워드 o */}
        {/* {alphabet.map((value, idx) => {
                    return <li key={idx}>{value}</li>;
                })} */}
        {/* return 키워드 x, 중괄호 x 소괄호 o */}
        {/* {alphabet.map((value, idx) => (
                    <li key={idx}>{value}</li>
                ))} */}
        {/* 배열 in 객체 ex */}
        {/* {alphabet.map((value) => {
                    return <li key={value.id}>{value.alpha}</li>;
                })} */}
      </ol>

      {/* #1. 알파벳 추가하기 기능 */}
      <input
        type="text"
        placeholder="알파벳 입력"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        // [Quiz 2] input에서 "enter"키 누르면 추가되도록!
        // #2. 키보드 이벤트 핸들러
        onKeyDown={handleKeyDown}
      />
      <button onClick={addAlpha}>ADD</button>

      {/* #3. 알파벳 삭제하기 기능 */}
      <ol>
        {alphabet.map((value) => (
          <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
            {value.alpha}
          </li>
        ))}
      </ol>

      {/* #4. *이벤트 위임* 방식 적용 - 효율성 증가! (자식 말고 부모한테 등록시켜놓으면 더 효율적임)*/}
      <h2>이벤트 위임 방식</h2>
      <ol onDoubleClick={handleDoubleClick}>
        {alphabet.map((value) => (
          <li key={value.id} id={value.id}>
            {value.alpha}
          </li>
        ))}
      </ol>
    </>
  );
}

// *concat 예제
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3); // [1, 2, 3, 4, 5, 6]
