import "./index.css";
import "./app.css";
import { use, useState } from "react";

export default function App() {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState("");
  const [bracSwitch, setBracSwitch] = useState("(")

  const buttons = [
    'C', '()', '%', '/',
     7,   8,   9,   '×', 
     4,   5,   6,   '-',
     1,   2,   3,   '+',
    'hi', 0,  '.',  '='
  ]

  const handleClick = (s) => {
    if (result !== "") {
      setEquation("");
      setResult("");
    }
    if (Number.isInteger(s) || s === '.') setEquation((prev) => prev + s);
    else if (s === 'C') {
      setEquation("");
      setResult("");
    }
    else if (s === 'hi') console.log("gl making this");
    else if (s === '=') handleSolve();
    else if (s === '()') handleBracket();
    else setEquation((prev) => `${prev} ${s} `);
  }
  const handleSolve = () => {
      const alteredEq = equation.replaceAll('×', '*');
      try {
        setResult(Function("return " + alteredEq)());
      } catch {
        setResult("Error")
      }
  }
  const handleBracket = () => {
    setEquation((prev) => prev + bracSwitch)
    if (bracSwitch === '(') setBracSwitch(')');
    else setBracSwitch('(');
  }

  return (
    <>
    <div id="calculator">
      <div id="display">
        <div id="equation">{equation}</div>
        <div id="result">{result}</div>
      </div>
      <div id="btn-container">
        {buttons.map((btn, index) => <button onClick={() => handleClick(btn)} key={index} id={`btn${index}`} type="button">{btn}</button>)}
      </div>
    </div>
    </>
  );
}