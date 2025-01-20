// #2. 스토어 생성 및 리듀서 연결!

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import isVisibleReducer from "./isVisibleSlice";

// # configureStore 메소드
// - store 생성
// - 여러 리듀서 결합 (reducer 옵션으로 전달)
//   ㄴ 객체 형태로 전달, 키는 상태 이름이 된다.
const store = configureStore({
  reducer: {
    counter: counterReducer, // "counter" 라는 키는 상태 이름. 상태를 counterReducer로 관리. // counterReducer라는 변수명같은건 마음대로 할 수 있음
    isVisible: isVisibleReducer,
  },
});
export default store;
