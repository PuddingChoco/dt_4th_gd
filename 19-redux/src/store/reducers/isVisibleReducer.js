// (!) 액션 타입 가져오기
import { CHANGE } from "../actions/isVisibleActions";

// #1. state 초기값 정의
const initialState = true;

// #2. 리듀서 작성
const isVisibleReducer = (state = initialState, action) => {
  if (action.type === CHANGE) {
    return !state;
  }
  return state;
};

export default isVisibleReducer;
