import React from "react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./utils/hooks/redux";
import { counterSlice } from "./store/reducers/CounterSlice";
import { userSlice } from "./store/reducers/UserSlice";
import { fetchThunkUsers, fetchUsers } from "./store/reducers/ActionCreator";


import "./App.css";


const App = () => {
  const [getUsers, setGetUsers] = useState(false);
  const [getThunkUsers, setGetThunkUsers] = useState(false);
  const { increment, decrement } = counterSlice.actions;
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counterReducer);
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );
  const { thunkUsers, thunkIsLoading, thunkError } = useAppSelector(
    (state) => state.userThunkReducer
  );

  const getUser = () => {
    setGetUsers(true);
  };

  const clearData = () => {
    dispatch(userSlice.actions.userFetchingSucces([]));
    setGetUsers(false);
  };

  const getThunkUser = () => {
    setGetThunkUsers(true);
  };
  const clearThunkData = () => {
    setGetThunkUsers(false);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, getUsers]);

  useEffect(() => {
    dispatch(fetchThunkUsers());
  }, [dispatch, getThunkUsers]);

  return (
    <div className="App">


      <h1>{count}</h1>
      {/* here logic reducer */}
      <button onClick={() => dispatch(increment(1))}> INCREMENT</button>
      <button onClick={() => dispatch(decrement(1))}> DECREMENT</button>
      <br />
      <br />


      {/* here reuducer with out Thunk, use if you need only get data */}
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
      <br />
      <br />


      {/* here reuducer with Thunk and rtk query, use if you need only get  and for post mutation data */}
      {getThunkUsers ? (
        <>
          <button onClick={clearThunkData}>Clear Thunk Users</button>
          <div>
            {thunkIsLoading && <h2>Loading...</h2>}
            {thunkError && <h2>{thunkError}</h2>}
            {JSON.stringify(thunkUsers, null, 2)}
          </div>
        </>
      ) : (
        <button onClick={getThunkUser}>Get user with thunk</button>
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
