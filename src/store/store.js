import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import gamesSlice from "./games/reducer";
import { setLocalStorage } from "@utils";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    game: gamesSlice,
  },
});

store.subscribe(() => {
  setLocalStorage("store", store.getState());
});
