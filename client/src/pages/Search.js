import React, { useEffect, useState } from "react";

import API from "../utils/API";
import Form from "../components/Form/Form";
import BookCard from "../components/BookCard/BookCard";
import Wrapper from "../components/Wrapper/Wrapper";
import NoMatch from "../pages/NoMatch";
import { useAlert } from 'react-alert'


const Search = () => {
  const alert = useAlert()
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

  useEffect(() => {
    API.getSavedBooks()
      .then((res) => setSavedBooks(res.data))
      .catch((err) => console.log(err));
  });

  const searchBooks = (bookSearch) => {
    API.searchBooks(bookSearch)
      .then((res) =>
        setBooks(res.data.items.map((bookData) => bookObject(bookData)))
      )
      .catch((err) => console.log(err));
  };

  const handleSave = (book) => {
        API.saveBook(book)
          .then((savedBook) => setSavedBooks(savedBook))
          .then(alert.show('Book has been saved'))
          .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form
        bookSearch={bookSearch}
        setBookSearch={setBookSearch}
        handleSearch={handleSearch}
      />
      {books.length !== 0 ? (
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
      ) : (
        <NoMatch message={"No results"} />
      )}
    </div>
  );
};

export default Search;
