import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICounter } from "../../models/ICounter";

interface CounterState {
  counter: ICounter[];
  error: string;
  count: number;
}

const initialState: CounterState = {
  counter: [],
  error: "",
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    decrement(state, action: PayloadAction<number>) {
      state.count > 0 && (state.count -= action.payload);
    },
  },
});

export default counterSlice.reducer;
