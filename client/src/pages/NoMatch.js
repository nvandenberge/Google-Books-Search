import React from "react";

const NoMatch = ({ message }) => {
  return (
    <div className="text-center">
      <h1>{message}</h1>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
        </span>
    </div>
  );
};

export default NoMatch;
