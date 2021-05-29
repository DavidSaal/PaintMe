import React from "react";
import BrushSize from "../BrushSize";
import "./Header.css";
import logo from "../../images/logo.png";

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
      <div>
        <h1 className="display-1 d-inline">PaintMe</h1>
        <img
          src={logo}
          alt="Logo"
          className="position-absolute ps-2 mt-3"
          Style="width:70px; height:60px"
        />
      </div>
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
