import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    total: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            let isFound = state.items.some((item) => {
                if (action.payload.id === item.id) {
                    return true
                }
                return false
            })

            if (isFound) {
                let x = state.items.findIndex(
                    (item) => item.id === action.payload.id
                )
                state.items[x].amount += 1
                state.total = state.total += action.payload.price
            } else {
                state.total = state.total += action.payload.price
                state.items.push(action.payload); 
            }
        }
    }
})

export const { addProduct } = cartSlice.actions

export default cartSlice.reducer