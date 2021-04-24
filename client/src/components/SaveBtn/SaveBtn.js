import React from "react";
import "./SaveBtn.css";

const SaveBtn = (props) => {
  return (
    <span className="save-btn ml-2" role="button" {...props}>
      SAVE
    </span>
  );
};

export default SaveBtn;
