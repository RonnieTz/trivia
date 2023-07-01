import { configureStore } from "@reduxjs/toolkit";
import options from "./options";
import questions from "./questions";

export const store = configureStore({ reducer: { options, questions } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
