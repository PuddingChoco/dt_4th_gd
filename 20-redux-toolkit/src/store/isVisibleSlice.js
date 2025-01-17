//  이건 수정해야함 -> 답안 확인하기!
import { createSlice } from "@reduxjs/toolkit";

const isVisibleSlice = createSlice({
  name: "isVisible",
  initialState: true,
  reducers: {
    visible: (state) => {
      if (state === true) {
        return !state;
      }
      return state;
    },
  },
});
console.log("counterSlice >>>> ", isVisibleSlice);

export const { visible } = isVisibleSlice.actions; // 액션 값 내보내기.

export default isVisibleSlice.reducer; // 리듀서 내보내기
