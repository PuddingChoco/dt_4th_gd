// 액션들 모두 여기에 한번에 모음.

// counterActions.js 에서 export로  내보낸 애들 다 가지고와서 다 불러모으고 다 내보냄.
// isVisibleActions.js 에서 export로 내보낸 애들 다 가지고와서 다 불러모으고 다 내보냄.

// 액션 모듈을 한 곳에 모아 내보내는 파일
// export * : 다른 파일에서 내보낸 모든 내용을 가져와 다시 내보낸다.

export * from "./counterActions";
export * from "./isVisibleActions";
