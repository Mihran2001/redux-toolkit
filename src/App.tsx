import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";

function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}> Decrement</button>
      {/* <h1> {value} </h1> */}
      <button onClick={() => dispatch(increment())}> Increment </button>
    </div>
  );
}

export default App;
