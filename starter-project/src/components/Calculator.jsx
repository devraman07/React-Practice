import { useReducer, useState } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };

    case "decrement":
      return { ...state, count: state.count - action.payload };

    case "multiply":
      return { ...state, count: state.count * action.payload };

    case "reset":
      return { ...state, count: 0 };

    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const amount = Number(inputValue) || 0;

  return (
    <div>
      <div className="display-count">
        <h2>The current count value is :</h2>
        <p>{state.count}</p>
      </div>

      <div className="input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
        />
      </div>

      <button onClick={() => dispatch({ type: "increment", payload: amount })}>+</button>
      <button onClick={() => dispatch({ type: "decrement", payload: amount })}>-</button>
      <button onClick={() => dispatch({ type: "multiply", payload: amount })}>*</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default Calculator;