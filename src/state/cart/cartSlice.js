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
            const item = state.items.find((i) => i.id === action.payload.id);

            if (item) {
              item.amount++;
            } else {
              state.items.push({ ...action.payload, amount: 1 });
            }
            state.total += action.payload.price;
            state.numberOfItems++;
        },
        removeProduct: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload.id);

            if (item) {
                state.items.splice(state.items.indexOf(item), 1)
                state.total -= item.price * item.amount;
                state.numberOfItems -= item.amount;
            }
        },
        increaseAmount: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload.id);

            if (item) {
              item.amount++;
              state.total += action.payload.price;
              state.numberOfItems++;
            }
        },
        decreaseAmount: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload.id);

            if (item) {
              item.amount--;
              state.numberOfItems--;
              state.total -= action.payload.price;
      
              if (item.amount === 0) {
                state.items.splice(state.items.indexOf(item), 1)
              }
            }
        },
        clearCart: (state) => {
            state.items = []
            state.total = 0
            state.numberOfItems = 0
        }
    }
})

export const { addProduct, removeProduct, increaseAmount, decreaseAmount, clearCart } = cartSlice.actions

export default cartSlice.reducer