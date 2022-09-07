import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { id: 1, title: "Bangladesh", author: "sumit" },
    { id: 2, title: "Anotherdesh", author: "anisul" },
  ],
};
const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      console.log(state);
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.books.filter((book) => book.id === id);
      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => id !== book.id);
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  booksSlice.actions;

export default booksSlice.reducer;
