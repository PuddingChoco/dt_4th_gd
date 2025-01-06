// props.children
// - 부모 컴포넌트에서 자식 컴포넌트 호출 시 태그 사이에 작성한 내용.
// - 문자열, 숫자, JSX, 배열 등 다양한 형태.
import "./Button.css";

// #1. 단일 자식 요소 전달
const Button = ({ link = "https://www.naver.com", children = "네이버" }) => {
  return (
    <>
      {/* 구조분해 할당 X */}
      {/* <a href={props.link}>
                <button>{props.children}</button>
            </a> */}

      {/* 구조분해 할당 O */}
      <a href={link}>
        <button className="Button">{children}</button>
      </a>
    </>
  );
};

export default Button;
