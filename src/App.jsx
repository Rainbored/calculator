import "./index.css";
import "./app.css";
import { useState } from "react";

export default function App() {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState("");

  const buttons = [
    'C', '()', '%', '/',
     7,   8,   9,   'X', 
     4,   5,   6,   '-',
     1,   2,   3,   '+',
    '',   0,  '.',  '='
    ]

    const handleClick = (s) => {
      if (Number.isInteger(s) || s === '.') setEquation((prev) => prev + s)
      else if (s === 'C') {
        setEquation("");
        setResult("")
      }
      else if (s === '') console.log("gl making this");
      else if (s === '=') handleSolve();
      else if (s === '()') console.log("ok");
      else setEquation((prev) => `${prev} ${s} `);
    }
    const handleSolve = () => {
      const holder = equation.split(" ");
      console.log(holder)
    }

  return (
    <>
    <div id="calculator">
      <div id="display">
        <div id="equation">{equation}</div>
        <div id="result">{result}</div>
      </div>
      <div id="btn-container">
        {buttons.map((btn) => <button onClick={() => handleClick(btn)} key={btn} type="button">{btn}</button>)}
      </div>
    </div>
    </>
  );
}