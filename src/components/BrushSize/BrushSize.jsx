import React from "react";

const BrushSize = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <p className="fs-7 px-2">Brush Size</p>
      <div>
        <input
          type="range"
          min="1"
          max="20"
          value={props.brushSize}
          onChange={(event) => props.setBrushSize(event.target.value)}
        />
        <p className="fw-bold fs-5 d-inline"> {props.brushSize}</p>
      </div>
    </div>
  );
};

export default BrushSize;
