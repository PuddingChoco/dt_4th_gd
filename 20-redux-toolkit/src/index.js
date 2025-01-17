import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // #3. Provider로 Store 연결
  // - React와 Redux 연결 : 모든 컴포넌트가 Redux 스토어에 접근할 수 있게 됨.
  <Provider store={store}>
    <App />
  </Provider>
);
