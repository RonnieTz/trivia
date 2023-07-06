import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  lobby: boolean;
  room: boolean;
  startPressed: boolean;
  gameStarting: boolean;
  activeStep: number;
  createRoom: boolean;
  amount: number;
  category: number;
  difficulty: string;
  name: string;
} = {
  lobby: false,
  room: false,
  startPressed: false,
  gameStarting: false,
  activeStep: 0,
  createRoom: false,
  amount: 10,
  category: 9,
  difficulty: "easy",
  name: "",
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
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
    onCreateRoom: (state, action) => {
      state.createRoom = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const {
  joinLobby,
  joinRoom,
  startGame,
  gameReady,
  setActiveStep,
  onCreateRoom,
  setAmount,
  setCategory,
  setDifficulty,
  setName,
} = optionSlice.actions;

export default optionSlice.reducer;
