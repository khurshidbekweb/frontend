import { productType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
    items: productType[];
}

const initialState: FavoritesState = {
    items: JSON.parse(localStorage.getItem("favorites")!) || []
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<productType>) => {
            const existing = state.items.find((item: productType) => item.id === action.payload.id);
            if (existing) {
                state.items = state.items.filter((item: productType) => item.id !== action.payload.id);
            } else {
                state.items.push(action.payload);
            }
            localStorage.setItem("favorites", JSON.stringify(state.items));
        }
    }
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
