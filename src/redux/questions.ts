import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
type body = { amount: number; category: number; difficulty: string };
export const fetchData = createAsyncThunk(
  "questions/fetchData",
  async (body: body) => {
    console.log(body);

    const res = await axios.get(
      `https://opentdb.com/api.php?amount=${body.amount}&category=${body.category}&difficulty=${body.difficulty}&type=multiple`
    );

    const data = res.data.results.map((item: any) => {
      return {
        question: item.question,
        answers: [...item.incorrect_answers, item.correct_answer]
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value),
        correct: item.correct_answer,
      };
    });
    return data;
  }
);

const initialState: {
  question: string;
  answers: [string, string, string, string];
  id: string;
  correct: string;
}[] = [];

export const questions = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (_state, action) => {
      return action.payload;
    });
  },
});
export const {} = questions.actions;
export default questions.reducer;
