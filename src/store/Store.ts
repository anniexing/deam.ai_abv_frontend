import { configureStore } from "@reduxjs/toolkit";
import BeerSlice from "../slices/BeerSlice";

const reducer ={
    beers: BeerSlice,
};
export const store = configureStore({
    reducer: reducer,
    devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
