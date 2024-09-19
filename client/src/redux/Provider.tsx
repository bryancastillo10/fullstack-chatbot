import { useRef } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { setupListeners } from "@reduxjs/toolkit/query";
import {persistStore }from "redux-persist";
import { makeStore } from ".";
import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector
  } from "react-redux";



/* REDUX TYPES */
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



export default function StoreProvider({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
      storeRef.current = makeStore();
      setupListeners(storeRef.current.dispatch);
    }
    const persistor = persistStore(storeRef.current);
  
    return (
      <Provider store={storeRef.current}> {/* Ensure this is treated as a component */}
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  }
  