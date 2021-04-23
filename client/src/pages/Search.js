import React, { useState } from "react";

import API from "../utils/API";
import Form from "../components/Form/Form";
import BookCard from "../components/BookCard/BookCard";
import Wrapper from "../components/Wrapper/Wrapper";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");
  const [savedBooks, setSavedBooks] = useState([]);

  const bookObject = (bookData) => {
    return {
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink,
    };
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchBooks(bookSearch);
  };

  const searchBooks = (bookSearch) => {
    API.searchBooks(bookSearch)
      .then((res) =>
        setBooks(res.data.items.map((bookData) => bookObject(bookData)))
      )
      .catch((err) => console.log(err));
  };

  const handleSave = (book) => {
    API.saveBook(book)
        .then(savedBook => setSavedBooks(savedBook))
        .then(console.log("savedBooks", savedBooks))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form
        bookSearch={bookSearch}
        setBookSearch={setBookSearch}
        handleSearch={handleSearch}
      />
      {books.length && (
        <Wrapper name="Results">
          {books.map((book, index) => {
            return (
              <div key={index}>
                <BookCard
                  title={book.title}
                  authors={book.authors}
                  description={book.description}
                  image={book.image}
                  link={book.link}
                  alt={`Cover of ${book.title} by ${book.authors}`}
                  book={book}
                  handleSave={handleSave}
                />
              </div>
            );
          })}
        </Wrapper>
      )}
    </div>
  );
};

export default Search;
