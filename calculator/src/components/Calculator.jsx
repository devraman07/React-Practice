import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNewInput, setWaitingForNewInput] = useState(false);

  
  const calculate = (a, b, op) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b === 0 ? "Error" : a / b;
      default:
        return b;
    }
  };

  const handleDigit = (digit) => {
    if (waitingForNewInput) {
      setDisplay(digit);
      setWaitingForNewInput(false);
    } else {
      
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const handleDoubleZero = () => {
    if (waitingForNewInput) {
      setDisplay("0");
      setWaitingForNewInput(false);
    } else if (display !== "0") {
      setDisplay(display + "00");
    }
  };

  const handleDecimal = () => {
    if (waitingForNewInput) {
      setDisplay("0.");
      setWaitingForNewInput(false);
      return;
    }
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleOperator = (nextOperator) => {
    const currentValue = Number(display);

    if (operator && !waitingForNewInput) {
      
      const result = calculate(previousValue, currentValue, operator);
      setDisplay(String(result));
      setPreviousValue(result === "Error" ? null : result);
    } else {
      setPreviousValue(currentValue);
    }

    setOperator(nextOperator);
    setWaitingForNewInput(true);
  };

  const handleEquals = () => {
    if (operator === null || previousValue === null) return;

    const currentValue = Number(display);
    const result = calculate(previousValue, currentValue, operator);

    setDisplay(String(result));
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNewInput(true);
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNewInput(false);
  };

  return (
    <div className="Calculator">
      <div className="calculator" name="calc">
        <input type="text" className="Value" value={display} readOnly />
        <span className="num-clear" onClick={clear}>Clear</span>

        <span onClick={() => handleOperator("/")}>/</span>
        <span onClick={() => handleOperator("*")}>*</span>
        <span onClick={() => handleDigit("7")}>7</span>
        <span onClick={() => handleDigit("8")}>8</span>
        <span onClick={() => handleDigit("9")}>9</span>
        <span onClick={() => handleOperator("-")}>-</span>
        <span onClick={() => handleDigit("4")}>4</span>
        <span onClick={() => handleDigit("5")}>5</span>
        <span onClick={() => handleDigit("6")}>6</span>
        <span className="plus" onClick={() => handleOperator("+")}>+</span>

        <span onClick={() => handleDigit("1")}>1</span>
        <span onClick={() => handleDigit("2")}>2</span>
        <span onClick={() => handleDigit("3")}>3</span>
        <span onClick={() => handleDigit("0")}>0</span>
        <span onClick={handleDoubleZero}>00</span>
        <span onClick={handleDecimal}>.</span>
        <span onClick={handleEquals}>=</span>
      </div>
    </div>
  );
};

export default Calculator;
