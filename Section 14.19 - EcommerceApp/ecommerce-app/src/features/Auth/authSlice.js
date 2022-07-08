import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StorageKeys from "constants/storage-keys.contants";
import userApi from "../../api/user-api";

export const register = createAsyncThunk("auth/register", async (payload) => {
    const response = await userApi.register(payload);
    localStorage.setItem(StorageKeys.TOKEN, response.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(response.user));
    return response.user;
});

export const login = createAsyncThunk("auth/login", async (payload) => {
    const response = await userApi.login(payload);
    localStorage.setItem(StorageKeys.TOKEN, response.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(response.user));
    return response.user;
});

export const logout = createAsyncThunk("auth/logout", async (payload) => {    
    return {};
});


const authSlice = createSlice({
    name: "auth",
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.current = action.payload;
        });

        builder.addCase(login.fulfilled, (state, action) => {
            state.current = action.payload;
        });

        builder.addCase(logout.fulfilled, (state, action) => {
            state.current = action.payload;
        });
    },
});

const { reducer } = authSlice;
export default reducer;
