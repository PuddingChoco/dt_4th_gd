import React from "react";

// props 넘겨준 setData 가지고 오기
export default function Input({ setData }) {
  const handleInput = (e) => {
    setData((data) => {
      return { ...data, content: e.target.value };
    });
  };
  return (
    <div>
      내용: <input type="text" onChange={handleInput} />
    </div>
  );
}
