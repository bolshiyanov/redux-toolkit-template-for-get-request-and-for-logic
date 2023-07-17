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
    <div className="link"><a href="https://github.com/bolshiyanov/redux_toolkit_rtk_query_pro_template">Code Git here</a></div>
    </div>
  );
}

export default App;
