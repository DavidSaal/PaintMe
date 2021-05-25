import React from "react";
import LoadImage from "../LoadImage";

const Container = (props) => {
  return (
    <div className="card shadow-sm rounded-0">
      <div className="row justify-content-center pt-lg-3 py-3 py-lg-0">
        <LoadImage fileName={props.fileName} handleFiles={props.handleFiles} />
        <div className="col-10 col-lg-7 ps-lg-1">
          <button
            className="btn btn-outline-dark shadow-sm fs-5 col-12"
            onClick={props.clearCanvas}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Container;
