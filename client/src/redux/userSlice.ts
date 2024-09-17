import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    isAuthenticated: boolean;
    currentUser: {
        id:string;
        email:string;
        username:string;
        profilePicture:string;
    } | null;
}

const initialState: UserState = {
    isAuthenticated: false,
    currentUser: null
};

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<UserState['currentUser']>) => {
            state.isAuthenticated = !!action.payload;
            state.currentUser = action.payload;
        },
        clearCurrentUser: (state) => {
            state.isAuthenticated = false;
            state.currentUser = null;
        },
    }
});

export const { setCurrentUser, clearCurrentUser} = userSlice.actions;
export default userSlice.reducer;