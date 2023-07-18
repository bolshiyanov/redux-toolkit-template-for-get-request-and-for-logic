import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IUserThunk } from "../../models/IUserThunk";
import { fetchThunkUsers } from "./ActionCreator";

interface UserThunkState {
  thunkUsers: IUserThunk[];
  thunkIsLoading: boolean;
  thunkError: string;
}

const initialState: UserThunkState = {
    thunkUsers: [],
    thunkIsLoading: false,
    thunkError: "",
};

export const userThunkSlice = createSlice({
  name: "userthunk",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchThunkUsers.fulfilled.type]: (state, action: PayloadAction<IUserThunk[]>) => {
        state.thunkIsLoading = false;
        state.thunkError = ''
        state.thunkUsers = action.payload;
    },
    [fetchThunkUsers.pending.type]: (state) => {
        state.thunkIsLoading = true;
    },
    [fetchThunkUsers.rejected.type]: (state,  action: PayloadAction<string>) => {
        state.thunkIsLoading = false;
        state.thunkError= action.payload
    },
}
});

export default userThunkSlice.reducer;
