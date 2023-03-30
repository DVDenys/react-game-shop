import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "@utils";

console.log();

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    currentGame: getLocalStorage("store")
      ? getLocalStorage("store").game.currentGame
      : null,
  },
  reducers: {
    setCurrentGame: (state, action) => {
      state.currentGame = action.payload;
    },
  },
});

export const { setCurrentGame } = gamesSlice.actions;
export default gamesSlice.reducer;
