import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  lobby: boolean;
  room: boolean;
  startPressed: boolean;
  gameStarting: boolean;
} = {
  lobby: false,
  room: false,
  startPressed: false,
  gameStarting: false,
};

export const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    joinLobby: (state, action) => {
      state.lobby = action.payload;
    },
    joinRoom: (state, action) => {
      state.room = action.payload;
    },
    startGame: (state, action) => {
      state.startPressed = action.payload;
    },
    gameReady: (state, action) => {
      state.gameStarting = action.payload;
    },
  },
});

export const { joinLobby, joinRoom, startGame, gameReady } =
  optionSlice.actions;

export default optionSlice.reducer;
