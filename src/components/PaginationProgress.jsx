import React from "react";

const PaginationProgress = ({progress, incrementProgress, decrementProgress}) => {

    return (
      <div className="progress__container">
        <div className="progress__button--container">
        <button onClick={decrementProgress} className="progress__button left">
            <i className="progress__arrow--left"></i>
          </button>
          <button onClick={incrementProgress} className="progress__button right">
          <i className="progress__arrow--right"></i>
          </button>
        </div>
        <div className="progress">
          <div className="progress__fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    );
  };
  
  export default PaginationProgress;
  