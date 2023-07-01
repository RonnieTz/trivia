import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  numberOfQuestions: number;
  difficulty: "easy" | "medium" | "hard";
  category: number;
  gameStarted: boolean;
  answerChecked: boolean;
} = {
  numberOfQuestions: 10,
  difficulty: "easy",
  category: 9,
  gameStarted: false,
  answerChecked: false,
};

export const options = createSlice({
  name: "options",
  initialState,
  reducers: {
    changeNumber: (state, action) => {
      state.numberOfQuestions = action.payload;
    },
    changeDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
    changeGameStarted: (state, action) => {
      state.gameStarted = action.payload;
    },
    changeAnswerChecked: (state, action) => {
      state.answerChecked = action.payload;
    },
  },
});

export const {
  changeCategory,
  changeDifficulty,
  changeNumber,
  changeGameStarted,
  changeAnswerChecked,
} = options.actions;

export default options.reducer;
