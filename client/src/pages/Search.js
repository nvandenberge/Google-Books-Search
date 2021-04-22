import React, { useState } from "react";

import API from "../utils/API";
import Form from "../components/Form/Form";
import BookCard from "../components/BookCard/BookCard";
import SaveBtn from "../components/SaveBtn/SaveBtn";
import Wrapper from "../components/Wrapper/Wrapper";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");
  const [savedBooks, setSavedBooks] = useState([]);

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
        .then(savedBook => setSavedBooks({savedBooks: savedBook}))
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
                {/* <SaveBtn onClick={() => handleSave(book)} /> */}
                <BookCard
                  title={book.title}
                  authors={book.authors}
                  description={book.description}
                  image={book.image}
                  link={book.link}
                  alt={`Cover of ${book.title} by ${book.authors}`}
                />
                {/* <SaveBtn onClick={() => handleSave(book)} /> */}

                <button 
                    onClick={() => handleSave(book)}
                    >SAVE</button>
              </div>
            );
          })}
        </Wrapper>
      )}
    </div>
  );
};

export default Search;
