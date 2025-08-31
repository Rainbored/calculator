import "./index.css";
import "./app.css";

export default function App() {
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
      <div id="display"></div>
      <div id="btn-container">
        {smth.map((btn) => <button key={btn} type="button">{btn}</button>)}
      </div>
    </div>
    </>
  );
}