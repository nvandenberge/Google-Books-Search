import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Wrapper from '../components/Wrapper/Wrapper';
import BookCard from '../components/BookCard/BookCard';
import NoMatch from '../pages/NoMatch';
import { useAlert } from 'react-alert'



const Saved = () => {
  const alert = useAlert()
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
      .then(alert.show('Book has been removed'))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {books.length !== 0 ? (
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
      ): <NoMatch message={"No saved books"} />}
    </div>
  );
};

export default Saved;
