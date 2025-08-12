import { configureStore } from "@reduxjs/toolkit";
import basketHeartReducer from "./basketHeartSlice";


export const store = configureStore({
    reducer: {
        basketHeart: basketHeartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch