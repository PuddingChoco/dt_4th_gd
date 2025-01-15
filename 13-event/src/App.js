// import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./ClassComponent";
import { FuncComponent } from "./FuncComponent";
import SyntheticEvent from "./SyntheticEvent";

import HandlerEx from "./components/ex/HandlerEx";
import { ColorButton } from "./components/ex/ColorButton";
import { HideButton } from "./components/ex/HideButton";
import { FruitSelection } from "./components/ex/FruitSelection";
import FruitAnswer1 from "./components/ex/FruitAnswer1";
import FruitAnswer2 from "./components/ex/FruitAnswer2";

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
      <hr />
      {/* 실습 4 */}
      <FruitSelection></FruitSelection>
      {/* 실습 4_답안 1 */}
      <FruitAnswer1></FruitAnswer1>
      {/* 실습 4_답안 2 */}
      <FruitAnswer2></FruitAnswer2>
    </div>
  );
}

export default App;
