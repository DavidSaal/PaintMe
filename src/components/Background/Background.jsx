import React from "react";

const Background = (props) => {
  return (
    <div>
      <label>Background </label>
      <input
        type="color"
        value={props.bgColor}
        onChange={props.changeBackground}
      />
    </div>
  );
};

export default Background;
