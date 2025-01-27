// types/ : 타입 관련 모든 정의가 모여 있는 곳.

// #1. interface 정의
// 단일 Todo 아이템 Type
export interface ToDoItem {
  id: number; // 유일 ID
  text: string; // 투두 내용
  completed: boolean; // 완료 여부
}

// 제네릭 타입을 사용하는 Todo 아이템 Type
// - 제네릭 제약 추가.
// - ㄴ JSX 문법 사용하기 때문에 props로 전달되는 데이터는 React가 렌더링할 수 있는 형식이어야 함. (아니면 오류!)

// * T extends React.ReactNode
// ㄴ T 는 반드시 React.ReactNode 타입이어야 한다는 의미.
export interface GnToDoItem<T extends React.ReactNode> {
  id: number;
  text: T; // 텍스트 타입을 제네릭으로 정의
  completed: boolean;
}
