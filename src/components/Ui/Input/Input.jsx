import React from "react";
import classes from "./Input.module.css";

const Input = () => {
  return (
    <div>
      <input
        type="text"
        name="text"
        className={classes.input}
        placeholder="Type here!"
      ></input>
    </div>
  );
};

export default Input;
