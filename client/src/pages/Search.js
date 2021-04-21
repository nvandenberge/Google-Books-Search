import React, { useEffect, useState } from "react";

import API from "../utils/API";
import Form from "../components/Form/Form";
import BookCard from "../components/BookCard/BookCard";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

  const bookObject = (bookData) => {
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink,
    };
  };

  const handleFormSubmit = (e) => {
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

  return (
    <div>
      <Form
        bookSearch={bookSearch}
        setBookSearch={setBookSearch}
        searchBooks={handleFormSubmit}
      />
      {books.map((book) => {
        return (
          <BookCard
            key={book.id}
            title={book.title}
            authors={book.authors}
            description={book.description}
            image={book.image}
            link={book.link}
            alt={`Cover of ${book.title}`}
          />
        );
      })}
    </div>
  );
};

export default Search;
