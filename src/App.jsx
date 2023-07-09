import { useState } from "react";
import "./App.css";

function App() {
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const handleCountChange = (e) => {
    const currentValue = e.target.value;
    setCharacterCount(currentValue.length);

    const words = currentValue.split(/\s+/).filter((word) => word.length !== 0);

    setWordCount(words.length);
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
          onChange={handleCountChange}
        />
      </div>
      <div className="result-container">
        <p>Word Count: {wordCount}</p>
        <br />
        <p>Character Count: {characterCount}</p>
      </div>
    </>
  );
}

export default App;
