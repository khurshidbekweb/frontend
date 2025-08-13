import { productType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BasketItem extends productType {
    quantity: number;
}

interface BasketState {
    items: BasketItem[];
}


const initialState: BasketState = {
    items: JSON.parse(localStorage.getItem("basket")!) || []
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action: PayloadAction<productType>) => {
            const existing = state.items.find(item => item.id === action.payload.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem("basket", JSON.stringify(state.items));
        },
        decreaseFromBasket: (state, action: PayloadAction<number>) => {
            const existing = state.items.find(item => item.id === action.payload);
            if (existing) {
                if (existing.quantity > 1) {
                    existing.quantity -= 1;
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload);
                }
            }
            localStorage.setItem("basket", JSON.stringify(state.items));
        },
        removeFromBasket: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem("basket", JSON.stringify(state.items));
        },
        clearBasket: (state) => {
            state.items = [];
            localStorage.setItem("basket", JSON.stringify(state.items));
        }
    }
});

export const { addToBasket, decreaseFromBasket, removeFromBasket, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;
