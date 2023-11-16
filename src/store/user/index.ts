import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { RootState } from "@store/index";

import { userLoginIn } from "@api/login";

type typeLoginParmas = Parameters<typeof userLoginIn>[0];
type typeLoginResult = Awaited<ReturnType<typeof userLoginIn>>["result"];

export interface CounterState {
    userInfo: typeLoginResult | null;
    status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
    userInfo: $tools.getLocalStorage('userInfo'),
    status: "idle",
};

export const login = createAsyncThunk(
    "user/login",
    async (detail: {
        params: typeLoginParmas,
        cb: any
    }) => {
        try {
            const response = await userLoginIn(detail.params);

            typeof detail.cb === 'function' && detail.cb()
            // The value we return becomes the `fulfilled` action payload
            return response;
        } catch(e) {
            typeof detail.cb === 'function' && detail.cb()
        }
        
    }
);
export const userSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        loginOut(state) {    
            state.userInfo = null
            $tools.clearAllLocalStorage();
        },
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = "loading";
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = "idle";
                state.userInfo =  action.payload ? action.payload.result : null;
                $tools.setLocalStorage('userInfo', state.userInfo)
            })
            .addCase(login.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export const selectUserInfo = (state: RootState) => {

    return state.users.userInfo;
};

export const { loginOut } = userSlice.actions

export default userSlice.reducer;
