import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./rtkquery";
import userReducer from "./userSlice";


export const store = configureStore({
    reducer:{
        user: userReducer,
        [authApi.reducerPath]:authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware) 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;