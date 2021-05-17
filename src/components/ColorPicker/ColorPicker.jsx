import React from "react";
import "./ColorPicker.css";

const ColorPicker = (props) => {
  let boxColor = {
    backgroundColor: props.rgbColor,
  };

  return (
    <div className="card py-3 shadow">
      <h3>{props.title}</h3>
      <div className="color" style={boxColor}></div>
      <div className="result pb-4">{props.rgbColor}</div>
      <div>
        <input
          type="range"
          min="0"
          max="255"
          name="red"
          value={props.color.red}
          onChange={props.changeColor}
        />
        <div>red: {props.color.red}</div>
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="255"
          name="green"
          value={props.color.green}
          onChange={props.changeColor}
        />
        <div>green: {props.color.green}</div>
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="255"
          name="blue"
          value={props.color.blue}
          onChange={props.changeColor}
        />
        <div>blue: {props.color.blue}</div>
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="1"
          name="alpha"
          step="0.01"
          value={props.color.alpha}
          onChange={props.changeColor}
        />
        <div>alpha: {props.color.alpha}</div>
      </div>
    </div>
  );
};

export default ColorPicker;
