import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";
import favoritesReducer from "./fovatite";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        favorites: favoritesReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
