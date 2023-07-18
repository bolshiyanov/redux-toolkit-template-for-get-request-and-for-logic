import React from "react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./utils/hooks/redux";
import { counterSlice } from "./store/reducers/CounterSlice";
import { fetchUsers } from "./store/reducers/ActionCreator";

import "./App.css";
import { userSlice } from "./store/reducers/UserSlice";

const App = () => {
  const [getUsers, setGetUsers] = useState(false);
  const { increment, decrement } = counterSlice.actions;
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counterReducer);
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  const getUser = () => {
    setGetUsers(true);
  };

  const clearData = () => {
    dispatch(userSlice.actions.userFetchingSucces([]));
    setGetUsers(false);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, getUsers]);

  return (
    <div className="App">
      <h1>{count}</h1>
      {/* here logic reducer */}
      <button onClick={() => dispatch(increment(1))}> INCREMENT</button>
      <button onClick={() => dispatch(decrement(1))}> DECREMENT</button>
      <br />
      <br />
      {/* here reuducer with out Thunk */}
      {getUsers ? (
        <>
          <button onClick={clearData}>Clear users</button>
          <div>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {JSON.stringify(users, null, 2)}
          </div>
        </>
      ) : (
        <button onClick={getUser}>Get user with axios, without thunk</button>
      )}

      <div className="link">
        <a href="https://github.com/bolshiyanov/redux_toolkit_rtk_query_pro_template">
          Code Git here
        </a>
      </div>
    </div>
  );
};

export default App;
