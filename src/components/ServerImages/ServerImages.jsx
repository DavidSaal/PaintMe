import React from "react";
import Loader from "react-loader-spinner";

const ServerImages = (props) => {
  return (
    <div className="card shadow-sm rounded-0 rounded-bottom">
      <div className="card-header text-center fs-2">Saved Images On Server</div>
      <div className="py-3 scrolller">
        {props.loader ? (
          <Loader type="Oval" color="black" height={50} width={50} />
        ) : props.images.length > 0 ? (
          props.images.map((image, index) => (
            <img
              src={image.src}
              key={index}
              id={index}
              alt=""
              onClick={props.loadImage}
              className="border col-3 m-2 shadow-sm zoom"
            />
          ))
        ) : (
          <h6 className="fst-italic">(Empty List)</h6>
        )}
      </div>
      <div className="card border-0 border-top bg-light d-inline py-1 rounded-0 rounded-bottom">
        <button
          className="btn col-4 btn-outline-dark shadow-sm fs-5 my-1 mx-4"
          onClick={props.saveImage}
        >
          Save image
        </button>
        <button
          className="btn col-4 btn-outline-dark shadow-sm fs-5 my-1 mx-4"
          onClick={props.deleteAll}
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default ServerImages;
