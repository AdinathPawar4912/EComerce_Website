import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({
          ...product,
          quantity: 1,
        });
      }
    },

    increaseQuantity: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (product) {
        product.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;