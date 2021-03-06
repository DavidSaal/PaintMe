import React from "react";
import Skeleton from "react-loading-skeleton";

const ServerImages = (props) => {
  return (
    <div className="card shadow-sm rounded-0 rounded-bottom mt-4 mt-md-0 mt-lg-1">
      <div className="card-header text-center fs-2">Saved Images On Server</div>
      <div className="py-4 mb-2 scrolller">
        {props.loading ? (
          <div>
            <Skeleton
              className="border shadow-s m-3"
              count={3}
              height={140}
              width={210}
            />
            <p className="pt-2 mb-0 fs-4">Loading..</p>
          </div>
        ) : props.images.length > 0 ? (
          props.images.map((image) => (
            <div className="position-relative d-inline" key={image._id}>
              <button
                type="button"
                className="btn-close fs-8 check p-0"
                aria-label="Close"
                id={image._id}
                onClick={props.deleteImage}
              ></button>
              <img
                src={image.src}
                id={image._id}
                alt=""
                onClick={props.loadImage}
                className="border m-3 col-7 col-sm-5 col-md-4 col-lg-6 col-xl-3 my-2 shadow-sm zoom"
              />
              <p className="position-absolute start-50 translate-middle ms-2 mt-1 fs-8">
                {new Date(image.createdAt).toUTCString()}
              </p>
            </div>
          ))
        ) : (
          <h6 className="fst-italic">(Empty List)</h6>
        )}
      </div>
      <div className="card border-0 border-top bg-light d-inline py-1 rounded-0 rounded-bottom">
        <button
          className="btn col-10 col-lg-5 btn-outline-dark shadow-sm fs-5 my-1 me-lg-3"
          onClick={props.saveImage}
        >
          Save image <i className="fa fa-save fa-1x ms-1"></i>
        </button>
        <button
          className="btn col-10 col-lg-5 btn-outline-dark shadow-sm fs-5 my-1"
          onClick={props.deleteAll}
        >
          Delete all <i className="fa fa-trash fa-1x ms-1"></i>
        </button>
      </div>
    </div>
  );
};

export default ServerImages;
