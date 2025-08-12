import { productType } from "@/types"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface basketItem extends productType {
    quantity: number;
}
interface stateType {
    basket: basketItem[],
    heart: productType[]
}


const initialState: stateType = {
    basket: [],
    heart: []
}

const basketHeartSlice = createSlice({
    name: 'basketHeart',
    initialState,
    reducers: {
        addToBasket: (state, action: PayloadAction<productType>) => {
            const existing = state.basket.find(item => item.id === action.payload.id)
            if (existing) {
                existing.quantity += 1;
            } else {
                state.basket.push({ ...action.payload, quantity: 1 })
            }
        },
        removeFromBasket: (state, action: PayloadAction<number>) => {
            state.basket = state.basket.filter(item => item.id !== action.payload)
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.basket.find(item => item.id === action.payload)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1
                } else {
                    state.basket = state.basket.filter(item => item.id !== action.payload)
                }
            }
        },
        toggleHeart: (state, action: PayloadAction<productType>) => {
            const existing = state.heart.find(item => item.id === action.payload.id)
            if (existing) {
                state.heart = state.heart.filter(item => item.id === action.payload.id)
            } else {
                state.heart.push(action.payload)
            }
        }
    }
})

export const { addToBasket, decreaseQuantity, removeFromBasket, toggleHeart } = basketHeartSlice.actions


export default basketHeartSlice.reducer;