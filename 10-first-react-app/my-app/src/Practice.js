import "./Practice.css";

function Practice() {
  const title = "Hello World";

  return (
    <div class="container">
      <div class="title">{title}</div>

      <div class="set">
        <label>아이디</label>
        <input type="text"></input>
      </div>

      <div class="set">
        <label>비밀번호</label>
        <input type="text"></input>
      </div>
    </div>
  );
}

export default Practice;
