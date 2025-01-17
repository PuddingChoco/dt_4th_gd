// store 공간 생성함.
// 가장 최상단 컴포넌트
// Provider 컴포넌트 사용해서 Redux 스토어를 공유한다. 가장 최상위 컴포넌트에 적용하며, 이렇게 하면 하위 모든 컴포넌트가 Redux 스토어에 접근 가능해진다.
// 사용하고싶은곳에서 사용하면 됨 -> ex. UseRedux.js 보기.

import { createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import rootReducer from "./reducers";
// #5. 스토어 생성!
// - createStore 사용
// - 리듀서와 미들웨어 결합하여 설정

// [단일 리듀서] 일 때,
// const store = createStore(counterReducer);

// #5.2 스토어 생성!
// [여러개의 리듀서]
const store = createStore(rootReducer);

export default store;
