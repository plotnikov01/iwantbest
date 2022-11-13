import React from "react";

import book from "../img/book.png";
import starActive from "../img/star-active.svg";

const BookItem = () => {
  return (
    <div className="item__wrapper">
    <div className="book__item">
      <img src={book} className="book__item--image"></img>
      <h2 className="book__item--name">
        Управление репутацией в Интернете - Дмитрий Сидорин
      </h2>
      <div className="book__item--rating">
        <div className="book__item--rating-starcontainer">
          <img
            src={starActive}
            alt="star"
            className="book__item--rating-starcontainer-star-active"
          ></img>
          <img
            src={starActive}
            alt="star"
            className="book__item--rating-starcontainer-star-active"
          ></img>
          <img
            src={starActive}
            alt="star"
            className="book__item--rating-starcontainer-star-active"
          ></img>
          <img
            src={starActive}
            alt="star"
            className="book__item--rating-starcontainer-star-active"
          ></img>
          <img
            src={starActive}
            alt="star"
            className="book__item--rating-starcontainer-star-active"
          ></img>
        </div>
        <p className="book__item--rating-review">2 відгуки</p>
      </div>
      <div className="book__item--details">
        <h2 className="book__item--details-price">890 ₴</h2>
        <p className="book__item--details-link">Купити →</p>
      </div>
    </div>
    </div>
  );
};

export default BookItem;
