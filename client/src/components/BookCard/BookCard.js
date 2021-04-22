import React from 'react';

const BookCard = ({ title, authors, description, image, alt, link }) => {
    return (
        <div className="container mb-5 border">
            <div className="row justify-content-between">
            <h5>{title}</h5>
            <a href={link} target="_blank" rel="noreferrer"><button>VIEW</button></a>           
            </div>
            <p>Written By: {authors.join(", ")}</p>
            <div className='row'>
                <div className="col-md-3"><img src={image} alt={alt}></img></div>
                <div className="col-md-9">{description}</div>
            </div>
        </div>
    )
}

export default BookCard;