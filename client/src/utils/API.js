import axios from "axios";

const baseURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // Search all books from Googlebooks API
  searchBooks: (query) => axios.get(baseURL + query),

  // Gets all books
  getBooks: () => axios.get("/api/books"),
  
  // Deletes the book with the given id
  deleteBook: (id) => axios.delete("/api/books/" + id),
  
  // Saves the book to DB
  saveBook: (bookData) => axios.post("/api/books", bookData),
};