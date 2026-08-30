import { useReducer } from "react";
import "./counter.css";
import { useState } from "react";

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

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState(0);

  const amount = Number(input) || 0;

  return (
    <div>
      <div className="counter-value">
        <h1>The current counter value is {state.count}</h1>
      </div>
      <div className="input-field">
        <input
          type="text"
          placeholder="Enter a Number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="buttons">
        <button
          onClick={() => dispatch({ type: "increment", payload: amount })}
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "decrement", payload: amount })}
        >
          -
        </button>
        <button onClick={() => dispatch({ type: "multiply", payload: amount })}>
          *
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
    </div>
  );
};

export default Counter;
