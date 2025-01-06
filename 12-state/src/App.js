import "./App.css";
import CounterClass from "./CounterClass";
import { CounterFunction } from "./CounterFunction.";

function App() {
  return (
    <div className="App">
      <CounterClass></CounterClass>
      <hr />
      <CounterFunction value={"Plus 1"}></CounterFunction>
      <hr />
    </div>
  );
}

export default App;
