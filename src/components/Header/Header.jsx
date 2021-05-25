import React from "react";
import BrushSize from "../BrushSize";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="card shadow pt-3">
      <div
        className="menu"
        title={props.expandCanvas ? "Reduce" : "Expand"}
        onClick={() => props.setExpandCanvas(!props.expandCanvas)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="display-1">PaintMe</h1>
      <div className="row">
        <div className="col-12 col-md">
          <p className="fs-7 d-inline">Pos: </p>
          <p className="fs-6 fw-bold d-inline">
            {props.offset.x},{props.offset.y}
          </p>
        </div>
        <div className="col-12 col-md">
          <p className="display-6 fs-6 d-inline mt-5">By David Saal</p>
        </div>
        <div className="col-12 col-md">
          <BrushSize
            brushSize={props.brushSize}
            setBrushSize={props.setBrushSize}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
