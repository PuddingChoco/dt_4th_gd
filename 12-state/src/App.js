import "./App.css";
import CounterClass from "./CounterClass";
import { CounterFunction } from "./CounterFunction.";
import { SayFunction } from "./SayFunction";
import StateClass from "./Practice1";
import { StateFunction } from "./Practice2";

function App() {
  return (
    <div className="App">
      <CounterClass></CounterClass>
      <hr />
      <CounterFunction value={"Plus 1"}></CounterFunction>
      <hr />
      <SayFunction></SayFunction>
      <hr />
      <StateClass></StateClass>
      <hr />
      <StateFunction></StateFunction>
    </div>
  );
}

export default App;
