import React from "react";

const Loader = () => {
  return (
    <div className={classes.loader_container}>
      <div className={classes.loader}>
        <div class={classes.loader_square}></div>
        <div class={classes.loader_square}></div>
        <div class={classes.loader_square}></div>
        <div class={classes.loader_square}></div>
        <div class={classes.loader_square}></div>
        <div class={classes.loader_square}></div>
        <div class={classes.loader_square}></div>
      </div>
    </div>
  );
};

export default Loader;
