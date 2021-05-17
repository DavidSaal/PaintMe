import React from "react";

const BrushColor = (props) => {
  return (
    <div>
      <label>Color </label>
      <input
        type="color"
        value={props.brushColor}
        onChange={props.setBrushColor}
      />
    </div>
  );
};

export default BrushColor;
