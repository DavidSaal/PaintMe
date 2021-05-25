import React from "react";
import "./Canvas.css";

const Canvas = (props) => {
  return (
    <canvas
      className="card shadow rounded-0 rounded-top m-0"
      height="600"
      onMouseDown={props.startDrawing}
      onMouseUp={props.finishDrawing}
      onMouseMove={props.draw}
      ref={props.canvasRef}
    ></canvas>
  );
};

export default Canvas;
