import React, { useState } from "react";
import "./App.css";
function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} value={i} onClick={() => updateCalc(i.toString())}>
          {i}
        </button>
      );
    }
    return digits;
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span className="display-value">
            {result ? (
              <span
                style={{
                  fontSize: "22px",
                  marginRight: "20px",
                  color: "gray",
                }}
              >
                ({result})
              </span>
            ) : (
              ""
            )}
            &nbsp;
            {calc || "0"}
          </span>
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>

          <button onClick={() => deleteLast()}>
            DEL
          </button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
