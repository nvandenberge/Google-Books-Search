import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Wrapper from '../components/Wrapper/Wrapper';
import BookCard from '../components/BookCard/BookCard';


const Saved = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = () => {
    API.getSavedBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  };

  const handleRemove = (id) => {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {books.length && (
        <Wrapper name="Saved Books">
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
                  handleRemove={handleRemove}
                  id={book._id}
                />
              </div>
            );
          })}
        </Wrapper>
      )}
    </div>
  );
};

export default Saved;
