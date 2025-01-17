// 액션 생성자 정의: type 상수로 액션객체를?  만들어줌
// #3. 액션 타입 상수 정의
export const CHANGE = "isVisible/CHANGE";

// #4. 액션 생성자 정의
export const changeVisibility = () => ({ type: CHANGE });
