import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";
import AddBook from "../features/Books/AddBook";
import BooksView from "../features/Books/BooksView";
import EditBook from "../features/Books/EditBook";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/showBooks" element={<BooksView />} />
          <Route path="/editBook" element={<EditBook />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Index;
