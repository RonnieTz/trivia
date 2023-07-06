import { configureStore } from "@reduxjs/toolkit";
import optionSlice from "./optionSlice";
import roomSlice from "./roomSlice";

export const store = configureStore({
  reducer: { option: optionSlice, room: roomSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
