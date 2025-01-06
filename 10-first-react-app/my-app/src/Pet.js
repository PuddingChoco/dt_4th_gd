function Pet() {
  const name = "Pudding";
  const animal = "강아지";
  return (
    <h2>
      제 반려 동물의 이름은<u>{name}</u> 입니다.<br></br>
      <u>{name}</u>는 <u>{animal}</u> 입니다.{" "}
    </h2>
  );
}

export default Pet;
