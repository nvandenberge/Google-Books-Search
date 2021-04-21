import React from 'react';

const Form = () => {
    return (
        <div className="form-group">
            <h4>Book Search</h4>
            <label for="exampleInputPassword1">Book: </label>
            <input type="text" className="form-control w-50 mb-3" id="bookInput" placeholder="Search Book"></input>
            <button type="submit" className="btn btn-primary">Search</button>
        </div>
    )
}

export default Form;