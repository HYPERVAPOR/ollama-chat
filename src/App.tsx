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
        placeholder="请输入内容..."
        rows={6}
        className="border p-2 rounded"
      />
      <p>输入内容：{text}</p>
      <p className="text-lg text-gray-700 leading-relaxed">
        这是一个使用 Tailwind CSS 样式的段落示例。
        它设置了较大的字体、柔和的灰色文字和舒适的行高。
      </p>
    </div>
  );
}

export default App;
