import React from "react";

const LoadImage = (props) => {
  return (
    <div className="col-10 col-lg-5">
      <label
        htmlFor="file-upload"
        className="btn btn-outline-dark shadow-sm fs-5 col-12"
      >
        Choose Background <i className="fa fa-cloud-upload fa-1x ms-1"></i>
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={props.handleFiles}
        className="d-none"
      />
      <p className="fst-italic pt-1" Style="font-size: 0.9rem;">
        {props.fileName ? props.fileName : "No File"}
      </p>
    </div>
  );
};

export default LoadImage;
