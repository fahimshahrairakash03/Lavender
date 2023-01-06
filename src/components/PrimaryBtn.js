import React, { Children } from "react";
import "./PrimaryBtn.css";

const PrimaryBtn = ({ children }) => {
  return (
    <div>
      <button className="primarybtn px-5 font-semibold py-2">
        {" "}
        {children}
      </button>
    </div>
  );
};

export default PrimaryBtn;
