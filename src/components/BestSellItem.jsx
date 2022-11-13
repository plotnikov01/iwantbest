import React from "react";
import bestSell from "../img/bestsell.png";
import starActive from "../img/star-active.svg";

const BestSellItem = () => {
  return (
    <div className="bestsell__item">
      <div className="bestsell__item--color">
        <span className="bestsell__item--color-pointer"></span>
        <span className="bestsell__item--color-pointer"></span>
        <span className="bestsell__item--color-pointer"></span>
      </div>
      <img
        src={bestSell}
        alt="bestsell"
        className="bestsell__item--image"
      ></img>
      <h2 className="bestsell__item--name">
        Сумка на день жіноча нова мода великої ємності
      </h2>
      <div className="bestsell__item--rating">
        <div className="bestsell__item--rating-starcontainer">
          <img
            src={starActive}
            alt="star"
            className="bestsell__item--rating-starcontainer-star-active"
          ></img>
          <img
            src={starActive}
            alt="star"
            className="bestsell__item--rating-starcontainer-star-active"
          ></img>
          <img
            src={starActive}
            alt="star"
            className="bestsell__item--rating-starcontainer-star-active"
          ></img>
          <img
            src={starActive}
            alt="star"
            className="bestsell__item--rating-starcontainer-star-active"
          ></img>
          <img
            src={starActive}
            alt="star"
            className="bestsell__item--rating-starcontainer-star-active"
          ></img>
        </div>
        <p className="bestsell__item--rating-review">2 відгуки</p>
      </div>
      <div className="bestsell__item--details">
        <h2 className="bestsell__item--details-price">890 ₴</h2>
        <p className="bestsell__item--details-link">Купити →</p>
      </div>
    </div>
  );
};

export default BestSellItem;
