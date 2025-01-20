// ** 실습 **

import { createSlice } from "@reduxjs/toolkit";

// #1. 슬라이스 정의
const isVisibleSlice = createSlice({
  name: "isVisible",
  initialState: true,
  reducers: {
    changeVisibility: (state) => {
      return !state;
    },
  },
  // 또는
  // reducers: {
  //     changeVisibility: (state) => !state,
  // },
});

// 액션 생성자, 리듀서를 내보내기
export const { changeVisibility } = isVisibleSlice.actions; // 액션 값 내보내기.
export default isVisibleSlice.reducer; // // 리듀서 내보내기
