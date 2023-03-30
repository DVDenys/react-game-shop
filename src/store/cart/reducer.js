import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "@utils";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: getLocalStorage("store")
      ? getLocalStorage("store").cart.itemsInCart
      : [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload);
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (game) => game.id !== action.payload
      );
    },
  },
});

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
