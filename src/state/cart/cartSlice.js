import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    total: 0,
    numberOfItems: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            let cartContains = state.items.some((item) => {
                if (action.payload.id === item.id) {
                    return true
                }
                return false
            })

            if (cartContains) {
                let x = state.items.findIndex(
                    (item) => item.id === action.payload.id
                )
                state.items[x].amount += 1
                state.total = state.total += action.payload.price
                state.numberOfItems += 1
            } else {
                state.total = state.total += action.payload.price
                state.items.push(action.payload); 
                state.numberOfItems += 1
            }
        },
        removeProduct: (state, action) => {
            let x = state.items.findIndex(
                (item) => item.id === action.payload.id
            )
            state.total = state.total - action.payload.price * state.items[x].amount
            state.items[x].amount = 0
            state.items.pop(action.payload)
            state.numberOfItems = 0
        },
        increaseAmount: (state, action) => {
            let x = state.items.findIndex(
                (item) => item.id === action.payload.id
            )
            state.items[x].amount += 1
            state.total = state.total += action.payload.price
            state.numberOfItems += 1
        },
        decreaseAmount: (state, action) => {
            let x = state.items.findIndex(
                (item) => item.id === action.payload.id
            )
            state.items[x].amount -= 1
            state.total = state.total -= action.payload.price
            state.numberOfItems -= 1

            if (state.items[x].amount === 0) {
                state.items.pop(action.payload)
            }
        },
        checkout: (state) => {
            state.items = []
            state.total = 0
            state.numberOfItems = 0
        }
    }
})

export const { addProduct, removeProduct, increaseAmount, decreaseAmount, checkout } = cartSlice.actions

export default cartSlice.reducer