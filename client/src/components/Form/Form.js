import React from "react";

const Form = ({ bookSearch, setBookSearch, searchBooks }) => {
  return (
    <div className="form-group container mb-5">
      <h4>Book Search</h4>
      <label>Book: </label>
      <input
        type="text"
        className="form-control w-50 mb-3"
        placeholder="Search Book"
        onChange={(e) => setBookSearch(e.target.value)}
        name="bookSearch"
        value={bookSearch}
      />
      <button type="submit" className="btn btn-primary" onClick={searchBooks}>
        Search
      </button>
    </div>
  );
};

export default Form;
