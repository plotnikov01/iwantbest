import React from "react";

import { ReactComponent as LoadmoreIcon } from "../img/loadmore.svg";

const LoadMore = () => {
  return (
    <div className="loadmore__container">
      <LoadmoreIcon className="loadmore__icon"></LoadmoreIcon>
      <p className="loadmore__text">
        Показати ще <br />7 товарів
      </p>
    </div>
  );
};

export default LoadMore;
