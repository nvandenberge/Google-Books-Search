import React from 'react';
import SaveBtn from '../SaveBtn/SaveBtn';
import RemoveBtn from '../RemoveBtn/RemoveBtn';
import { HashRouter as Router, Route } from "react-router-dom";



const BookCard = ({ title, authors, description, image, alt, link, book, handleSave, handleRemove, id }) => {
    return (
        <Router>
        <div className="container mb-5 border">
            <div className="row justify-content-between">
            <h5>{title}</h5>
            <span>
            <a href={link} target="_blank" rel="noreferrer"><button>VIEW</button></a>
            <Route exact path={["/", "/search"]}>
            <SaveBtn onClick={() => handleSave(book)} /> 
            </Route>
            <Route exact path={"/saved"}>
            <RemoveBtn onClick={() => handleRemove(id)} />
            </Route>
            </span>
            </div>
            <p>Written By: {authors.join(", ")}</p>
            <div className='row'>
                <div className="col-md-3 mb-3"><img src={image} alt={alt}></img></div>
                <div className="col-md-9 mb-3">{description ? description : <i>No description available.</i>}</div>
            </div>
        </div>
        </Router>

    )
}

export default BookCard;