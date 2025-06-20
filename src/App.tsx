import { useState } from "react";
import InputBox from "./components/InputBox";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  return (
    <div>
      <InputBox
        value={text}
        onChange={setText}
        placeholder="问我任何问题..."
        rows={6}
      />
      <p>输入内容：{text}</p>
    </div>
  );
}

export default App;
