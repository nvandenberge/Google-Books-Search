import React from "react";
import './RemoveBtn.css'

const RemoveBtn = (props) => {
  return (
    <span className="remove-btn ml-2" role="button" {...props}>
      REMOVE
    </span>
  );
};

export default RemoveBtn;
