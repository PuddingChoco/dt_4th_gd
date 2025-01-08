// import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./ClassComponent";
import { FuncComponent } from "./FuncComponent";
import SyntheticEvent from "./SyntheticEvent";

import HandlerEx from "./components/ex/HandlerEx";
import { ColorButton } from "./components/ex/ColorButton";
import { HideButton } from "./components/ex/HideButton";

function App() {
  return (
    <div className="App">
      <SyntheticEvent></SyntheticEvent>
      <hr />
      <FuncComponent></FuncComponent>
      <hr />
      <ClassComponent></ClassComponent>
      <hr />
      <hr />
      {/* 실습 1*/}
      <HandlerEx></HandlerEx>
      <hr />
      {/* 실습 2*/}
      <ColorButton></ColorButton>
      <hr />
      {/* 실습 3*/}
      <HideButton></HideButton>
    </div>
  );
}

export default App;
