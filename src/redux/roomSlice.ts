import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  roomList: { name: string; creator: string; id: string }[];
  joinedRoom: {
    name: string | undefined;
    creator: string;
    users: {
      name: string;
      picture: string;
      answered: number;
      correct_answers: number;
      startPressed: boolean;
      id: string;
    }[];
    messages: { user: string; text: string }[];
    rules: { amount: number; category: number; difficulty: string };
    questions: {
      question: string;
      answers: string[];
      correct_answer: string;
    }[];
  };
} = {
  roomList: [
    { name: "Room 1", creator: "ronis.tzol", id: "01" },
    { name: "Room 2", creator: "onlypanatha", id: "02" },
  ],
  joinedRoom: {
    name: "",
    users: [],
    creator: "",
    messages: [],
    rules: { amount: 10, category: 9, difficulty: "easy" },
    questions: [],
  },
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    addRoom: (state, action) => {
      state.roomList.push(action.payload);
    },
  },
});

export const { addRoom } = roomSlice.actions;

export default roomSlice.reducer;
