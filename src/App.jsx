import "./index.css";
import "./app.css";
import { useState } from "react";

export default function App() {
  const [display, setDisplay] = useState("");

  const smth = [
    'C', '()', '%', '/',
     7,   8,   9,   'X', 
     4,   5,   6,   '-',
     1,   2,   3,   '+',
    '',   0,  '.',  '='
    ]

  return (
    <>
    <div id="calculator">
      <div id="display">{display}</div>
      <div id="btn-container">
        {smth.map((btn) => <button onClick={() => setDisplay((prev) => prev + btn)} key={btn} type="button">{btn}</button>)}
      </div>
    </div>
    </>
  );
}