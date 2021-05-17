import React from "react";
import "./Canvas.css";

const Canvas = (props) => {
  return (
    <canvas
      className="card shadow rounded-0 rounded-top"
      width={props.expandCanvas ? "1100" : "800"}
      height={props.expandCanvas ? "600" : "500"}
      onMouseDown={props.startDrawing}
      onMouseUp={props.finishDrawing}
      onMouseMove={props.draw}
      ref={props.canvasRef}
    ></canvas>
  );
};

export default Canvas;
