import React from "react";

import category from "../img/category.png";

const CategoryItem = () => {
  return (
    <div className="category__item">
      <div className="category__item--photo">
        <img src={category} alt="photo" className="category__item--image"></img>
      </div>
      <div className="category__item--info">
        <h2 className="category__name">Чоловічі сумки</h2>
        <p className="category__link">Перейти →</p>
      </div>
    </div>
  );
};

export default CategoryItem;
