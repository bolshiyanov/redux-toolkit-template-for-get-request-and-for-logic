import React from "react";

import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { counterSlice } from "./store/reducers/CounterSlice";

const  App = () => {
  const { increment, decrement } = counterSlice.actions;
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counterReducer);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(1))}> INCREMENT</button>
      <button onClick={() => dispatch(decrement(1))}> DECREMENT</button>
    </div>
  );
}

export default App;
