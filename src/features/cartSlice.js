import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  intialState,
    reducers: {
        addToCart(state, action) {
            state.cartItems.push(action.payload)
      }
  },
});

export const { addToCart } = cartSlice.actions  

export default cartSlice.reducer