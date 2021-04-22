// import React, { useEffect, useState } from "react";
// import API from "../utils/API";

// const Saved = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     loadBooks();
//   }, []);

//   const loadBooks = () => {
//     API.getSavedBooks()
//       .then((res) => setBooks(res.data))
//       .catch((err) => console.log(err));
//   };

//   const handleDelete = () => {
//     API.deleteBook(id)
//       .then((res) => loadBooks())
//       .catch((err = console.log(err)));
//   };

//   return (
//     <div>
//       {books.length && (
//         <Wrapper name="Saved Books">
//           {books.map((book, index) => {
//             return (
//               <div key={index}>
//                 <BookCard
//                   title={book.title}
//                   authors={book.authors}
//                   description={book.description}
//                   image={book.image}
//                   link={book.link}
//                   alt={`Cover of ${book.title} by ${book.authors}`}
//                 />
//                 <button onClick={() => handleDelete(book)}>DELETE</button>
//               </div>
//             );
//           })}
//         </Wrapper>
//       )}
//     </div>
//   );
// };

// export default Saved;
