import React from 'react'

const Wrapper = (props) => {
    return (
        <div className="container">
            <h3>{props.name}</h3>
            {props.children}
        </div>
    )
}

export default Wrapper;
