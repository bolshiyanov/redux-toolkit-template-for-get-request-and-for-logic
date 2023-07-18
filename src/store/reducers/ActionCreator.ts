import axios from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../../models/IUsers";
import { IUserThunk } from "../../models/IUserThunk";
import { userSlice } from "./UserSlice";
import getErrorMessage from "../../utils/hooks/typeError";
import {createAsyncThunk} from "@reduxjs/toolkit";



export const  fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching());
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        dispatch(userSlice.actions.userFetchingSucces(response.data));

    } catch (e) {
        dispatch(userSlice.actions.userFetchingError(getErrorMessage(e)));
    }
};

export const fetchThunkUsers = createAsyncThunk(
    'userThunk/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUserThunk[]>('https://jsonplaceholder.typicode.com/users')
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(getErrorMessage(e))
        }
    }
);