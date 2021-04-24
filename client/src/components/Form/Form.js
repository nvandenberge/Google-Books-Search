import React from "react";
import './Form.css';

const Form = ({ bookSearch, setBookSearch, handleSearch }) => {
  return (
    <div className="form-group container mb-5">
      <h4 className="mb-3">Book Search</h4>
      <div className="searchWrapper">
      <input
        type="text"
        className="form-control w-50 mb-3"
        placeholder="Search Book"
        onChange={(e) => setBookSearch(e.target.value)}
        name="bookSearch"
        value={bookSearch}
      />
      <button type="submit" className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
      </div>
    </div>
  );
};

export default Form;
