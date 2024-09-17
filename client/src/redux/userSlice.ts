import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    isAuthenticated: boolean;
    user: {
        id:string;
        email:string;
        username:string;
        profilePicture:string;
    } | null;
}

const initialState: UserState = {
    isAuthenticated: false,
    user: null
};

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState['user']>) => {
            state.isAuthenticated = !!action.payload;
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    }
});

export const { setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;