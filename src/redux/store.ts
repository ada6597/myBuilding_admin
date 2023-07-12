import authSlice from "@/components/auth/auth.slice";
import shopsSlice from "@/components/dashboard/shopData.slice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSlice,
      shop: shopsSlice,
    },
  });
};
//Creating store
const store = makeStore();
export default store;

//returning app state
export type AppState = ReturnType<typeof store.getState>;

//using app dispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
