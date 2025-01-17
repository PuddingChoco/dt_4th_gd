import "./App.css";
import { ThemeMiddle } from "./components/ThemeMiddle";
import { ThemeProvider } from "./components/ThemeProvider";
// import UseCallbackEx from "./components/UseCallbackEx";
import UseCallbackEx2 from "./components/UseCallbackEx2";
import UseMemoEx from "./components/UseMemoEx";
import UseReducerEx from "./components/UseReducerEx";
import Practice1 from "./components/react-hook-form/Practice1";
import Form from "./components/react-hook-form/Form";

function App() {
  return (
    <div className="App">
      {/* <UseMemoEx></UseMemoEx> */}
      {/* <UseCallbackEx></UseCallbackEx> */}
      {/* <UseCallbackEx2 postId={9}></UseCallbackEx2> */}
      {/* <UseReducerEx></UseReducerEx> */}
      {/* <ThemeProvider>
        <ThemeMiddle></ThemeMiddle>
      </ThemeProvider> */}

      {/* <Form></Form> */}
      <Practice1></Practice1>
    </div>
  );
}

export default App;
