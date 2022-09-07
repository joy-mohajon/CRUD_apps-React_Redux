import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "../features/Books/BooksSlice";

export const store = configureStore({
  reducer: {
    bookReducer: BooksReducer,
  },
});
