import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
    isAuthenticated:boolean;
    isSidebarCollapsed:boolean;
    user: {
        user_id: string;
        username: string;
        email: string;
        profilePicture: string;
        createdAt: string;
        updatedAt: string;
    } | null;
}


const initialState: InitialStateTypes = {
    isAuthenticated:false,
    isSidebarCollapsed:false,
    user:null
};

export const globalSlice = createSlice({
    name:'global',
    initialState,
    reducers:{
        setCurrentUser:(state,action: PayloadAction<InitialStateTypes['user']>) => {
            state.isAuthenticated = !!action.payload,
            state.user = action.payload;
        },
        clearCurrentUser:(state) => {
            state.isAuthenticated = false,
            state.user = null
        },
        setSidebarCollapsed:(state,action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload;
        }
    }
})

export const {setCurrentUser, setSidebarCollapsed, clearCurrentUser} = globalSlice.actions;
export default globalSlice.reducer;