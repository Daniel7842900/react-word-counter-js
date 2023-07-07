import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  const handleCountChange = (e) => {
    const currentValue = e.target.value;
    setValue(currentValue);

    const words = currentValue.split(/\s+/).filter((word) => word.length !== 0);

    setCount(words.length);
  };

  return (
    <>
      <div className="greetings-container">
        <h1>Welcome to Word Counter</h1>
      </div>
      <div className="text-input-container">
        <textarea
          name="count-area"
          id="count-area"
          cols="30"
          rows="10"
          value={value}
          onChange={handleCountChange}
        />
      </div>
      <div className="result-container">
        <p>Word Count: {count}</p>
      </div>
    </>
  );
}

export default App;
